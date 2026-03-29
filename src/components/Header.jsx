import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { SlMenu } from "react-icons/sl";
import Sidebar from "./Sidebar";

const navLinks = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT",
    to: "/about",
    hasDropdown: true,
    dropdown: [{ label: "Check Broker", to: "/check-broker" }],
  },
  { label: "AWARDS", to: "/awards" },
  { label: "FAQ", to: "/faq" },
  { label: "CONTACT", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium tracking-wide transition-colors duration-200 ${
      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 h-25 flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between  w-[90%]">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="flex items-end gap-0.5">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <span
                  key={i}
                  className="bg-blue-600 w-0.75 rounded-sm"
                  style={{ height: `${h * 2}px` }}
                />
              ))}
            </div>
            <span className="text-[35px] font-bold tracking-widest text-gray-900">
              Joshua
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(({ label, to, hasDropdown }) =>
              hasDropdown ? (
                <div
                  key={to}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                >
                  <NavLink to={to} end={to === "/"} className={linkClass}>
                    {label}
                    <span className="ml-1 text-xs">+</span>
                  </NavLink>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-blue-600 border border-gray-200 rounded-md shadow-lg py-2 z-50">
                      <NavLink
                        to="https://brokercheck.finra.org/individual/summary/5166189"
                        className="block px-4 py-2 text-sm text-white transition-colors"
                        onClick={() => setDropdownOpen(false)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        Check Broker
                      </NavLink>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={linkClass}
                >
                  {label}
                </NavLink>
              ),
            )}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4 text-gray-600">
            <button className="hover:text-blue-600 transition-colors">
              <FiSearch size={25} />
            </button>
            <button
              className="hover:text-blue-600 transition-colors"
              onClick={() => setSidebarOpen(true)}
            >
              <SlMenu size={40} className="text-blue-600" />
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
          <div className="md:hidden fixed inset-0 top-0 bg-white z-40 overflow-y-auto">
            <div className="h-[70px]" />
            <nav className="h-[calc(100vh-70px)] overflow-y-auto flex flex-col">
              {navLinks.map(({ label, to, hasDropdown }) =>
                hasDropdown ? (
                  <div key={to} className="border-b border-gray-100">
                    <div className="flex items-center justify-between px-5 py-4">
                      <NavLink
                        to={to}
                        end={to === "/"}
                        className="text-lg font-semibold text-gray-900"
                        onClick={() => setMenuOpen(false)}
                      >
                        {label}
                      </NavLink>
                      <button
                        type="button"
                        className="text-lg font-semibold text-gray-500 hover:text-gray-900"
                        onClick={() => setAboutDropdownOpen((v) => !v)}
                      >
                        {aboutDropdownOpen ? "-" : "+"}
                      </button>
                    </div>
                    {aboutDropdownOpen && (
                      <NavLink
                        to="https://brokercheck.finra.org/individual/summary/5166189"
                        className="block w-full pl-10 pr-5 py-3 text-base font-medium text-blue-700 bg-blue-50 hover:bg-blue-100"
                        onClick={() => {
                          setMenuOpen(false);
                          setAboutDropdownOpen(false);
                        }}
                      >
                        Check Broker
                      </NavLink>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className="block w-full text-left px-5 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 border-b border-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ),
              )}
            </nav>
          </div>
        )}
      </header>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
