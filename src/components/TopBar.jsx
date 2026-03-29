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
    <div className="bg-blue-600 text-white text-sm h-25">
      {/* Top row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-center sm:justify-between ">
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:info@joshuamiller.com"
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <MdEmail size={15} />
            <span>info@joshuamiller.com</span>
          </a>
          <span className="hidden sm:block border-l border-blue-400 h-4" />
          <a
            href="tel:+13326990836"
            className="flex items-center gap-1 hover:text-blue-200"
          >
            <BsTelephone size={13} />
            <span>+1 (332) 699-0836</span>
          </a>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <span className="flex items-center gap-1">
            <MdAccessTime size={15} className="hidden md:inline" />
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
      <div className="max-w-7xl mx-auto px-4 pb-3 mt-1 md:mt-5">
        <span className="flex gap-1 text-xs text-center text-gray-200">
          <MdLocationOn size={14} />
          1325 FRANKLIN AVE GARDEN CITY, NY 11530
        </span>
      </div>
    </div>
  );
}
