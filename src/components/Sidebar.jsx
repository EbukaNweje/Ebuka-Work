import { FiX } from "react-icons/fi";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-1/2 bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="bg-gray-100 hover:bg-gray-200 p-2 rounded transition-colors"
          >
            <FiX size={20} className="text-gray-700" />
          </button>
        </div>

        <div className="px-8 pb-12">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-end gap-[2px]">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <span
                  key={i}
                  className="bg-blue-600 w-[4px] rounded-sm"
                  style={{ height: `${h * 3}px` }}
                />
              ))}
            </div>
            <span className="text-4xl font-extrabold tracking-widest text-gray-900">
              GREGOR
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Gregor Vankirk is dedicated to building strong client relationships
            by deeply understanding your goals, addressing concerns with
            empathy, and providing tailored solutions to ensure you feel
            supported and confident in your financial decisions.
          </p>

          {/* Contact info */}
          <div className="flex flex-col gap-3 mb-8 text-gray-700 text-sm">
            <div className="flex items-start gap-2">
              <MdOutlineLocationOn
                size={18}
                className="text-gray-500 mt-0.5 flex-shrink-0"
              />
              <span>
                1999 Avenue of the Stars, Suite 2400 Los Angeles, CA 90067
              </span>
            </div>
            <span>+1 (332) 699-0836</span>
            <span>info@gregorvankirk.com</span>
            <span>09:00 - 17:00</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaFacebookF size={14} />, href: "#" },
              { icon: <FaXTwitter size={14} />, href: "#" },
              { icon: <FaPinterestP size={14} />, href: "#" },
              { icon: <FaInstagram size={14} />, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="bg-blue-600 hover:bg-blue-700 text-white w-9 h-9 flex items-center justify-center rounded transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
