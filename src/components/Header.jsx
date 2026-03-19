import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import Sidebar from "./Sidebar";

const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about", hasDropdown: true },
  { label: "AWARDS", to: "/awards" },
  { label: "FAQ", to: "/faq" },
  { label: "CONTACT", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="flex items-end gap-[2px]">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <span
                  key={i}
                  className="bg-blue-600 w-[3px] rounded-sm"
                  style={{ height: `${h * 2}px` }}
                />
              ))}
            </div>
            <span className="text-xl font-bold tracking-widest text-gray-900">
              Gregor
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, to, hasDropdown }) => (
              <NavLink key={to} to={to} end={to === "/"} className={linkClass}>
                {label}
                {hasDropdown && <span className="ml-1 text-xs">+</span>}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4 text-gray-600">
            <button className="hover:text-blue-600 transition-colors">
              <FiSearch size={18} />
            </button>
            <button
              className="hover:text-blue-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <BsGrid3X3Gap size={18} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
            <nav className="flex flex-col gap-4 pt-4">
              {navLinks.map(({ label, to, hasDropdown }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={linkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                  {hasDropdown && <span className="ml-1 text-xs">+</span>}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
