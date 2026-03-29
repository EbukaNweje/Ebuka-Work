import { useState } from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsSignal } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3 z-50">
      {open && (
        <div className="flex flex-col items-end gap-2 mb-2">
          <a
            href="tel:+1 (332) 699-0836"
            className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
            title="Call"
          >
            <FiPhone size={22} />
          </a>
          <a
            href="https://wa.me/+13326990836"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebe5b] transition-colors"
            title="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="mailto:info@joshuamiller.com"
            className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg hover:bg-red-600 transition-colors"
            title="Email"
          >
            <FiMail size={20} />
          </a>
          <a
            href="https://t.me/username"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
            title="Telegram"
          >
            <FaTelegramPlane size={20} />
          </a>
          <a
            href="https://signal.me/#p/+13326990836"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-full bg-[#3A76F0] text-white flex items-center justify-center shadow-lg hover:bg-[#2c5aa0] transition-colors"
            title="Signal"
          >
            <BsSignal size={20} />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg hover:bg-purple-600 transition-colors"
        aria-label="Toggle contact menu"
      >
        {open ? (
          <IoClose size={24} />
        ) : (
          <span className="text-2xl font-bold">
            <BsChatLeftDots />
          </span>
        )}
      </button>
    </div>
  );
}
