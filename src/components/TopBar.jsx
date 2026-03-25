import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";

export default function TopBar() {
  return (
    <div className="bg-blue-600 text-white text-sm">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center sm:justify-between gap-2">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@michael-golden.com"
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <MdEmail size={15} />
            <span>info@gregorvankirk.com</span>
          </a>
          <span className="hidden sm:block border-l border-blue-400 h-4" />
          <a
            href="tel:+14232766167"
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <BsTelephone size={13} />
            <span>+1 (332) 699-0836</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <MdAccessTime size={15} />
            <span className="hidden md:inline">
              Mon - Fri: 9:00 am - 06.00pm / Closed on Weekends
            </span>
          </span>
          <div className="flex items-center gap-2 ml-2">
            <a href="#" className="hover:text-blue-200">
              <FaFacebookF size={13} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FaXTwitter size={13} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FaPinterestP size={13} />
            </a>
            <a href="#" className="hover:text-blue-200">
              <FaInstagram size={13} />
            </a>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="max-w-7xl mx-auto px-4 pb-3">
        <span className="flex items-center gap-1 text-xs text-center text-gray-200">
          <MdLocationOn size={14} />
          1999 Avenue of the Stars, Suite 2400 Los Angeles, CA 90067
        </span>
      </div>
    </div>
  );
}
