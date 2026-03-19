import {
  MdOutlineLocationOn,
  MdOutlinePhone,
  MdOutlineEmail,
  MdOutlineAccessTime,
} from "react-icons/md";

export default function ContactSection() {
  return (
    <section className="bg-slate-100 py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row shadow-md">
        {/* Left: form */}
        <div className="flex-1 bg-white p-8">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            CONTACT US
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="flex-1 bg-gray-100 text-sm px-4 py-3 outline-none placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="flex-1 bg-gray-100 text-sm px-4 py-3 outline-none placeholder-gray-400"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 bg-gray-100 text-sm px-4 py-3 outline-none placeholder-gray-400"
              />
              <input
                type="url"
                placeholder="Your Website"
                className="flex-1 bg-gray-100 text-sm px-4 py-3 outline-none placeholder-gray-400"
              />
            </div>
            <textarea
              placeholder="Your Message Here"
              rows={5}
              className="bg-gray-100 text-sm px-4 py-3 outline-none placeholder-gray-400 resize-y"
            />
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
              >
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>

        {/* Right: info */}
        <div className="bg-blue-600 text-white p-8 md:w-64 flex flex-col gap-6">
          <h3 className="text-lg font-bold">Contact Info</h3>

          <div>
            <div className="flex items-start gap-3 mb-1">
              <MdOutlineLocationOn size={18} className="mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold mb-1">Office Address</p>
                <p className="text-xs leading-relaxed text-blue-100">
                  1999 Avenue of the Stars, Suite 2400 Los Angeles, CA 90067
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdOutlinePhone size={18} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold mb-1">Telephone</p>
              <p className="text-xs text-blue-100">+1 (332) 699-0836</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdOutlineEmail size={18} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold mb-1">Mail Us</p>
              <p className="text-xs text-blue-100">info@gregorvankirk.com</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MdOutlineAccessTime size={18} className="mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold mb-1">Opening Hours</p>
              <p className="text-xs text-blue-100">Mon-Fri: 09:00-18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
