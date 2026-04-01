import contactPageImg from "../assets/ImgWorkk.jpeg";
import {
  MdOutlinePhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";

const info = [
  {
    icon: <MdOutlinePhone size={32} className="text-blue-500" />,
    label: "Phone Number",
    value: "+1 (332) 699-0836",
  },
  {
    icon: <MdOutlineEmail size={32} className="text-blue-500" />,
    label: "Email Address",
    value: "info@joshuamiller.com",
  },
  {
    icon: <MdOutlineLocationOn size={32} className="text-blue-500" />,
    label: "Office Address",
    value: "1325 FRANKLIN AVE GARDEN CITY, NY 11530",
  },
];

export default function ContactPage() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col gap-8">
        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {info.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-gray-100 rounded-sm p-6 flex flex-col items-center text-center gap-2"
            >
              {item.icon}
              <p className="text-sm font-semibold text-gray-800">
                {item.label}
              </p>
              <p className="text-sm text-gray-500 whitespace-pre-line">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Form section */}
        <div className="flex flex-col md:flex-row">
          {/* Left image */}
          <div className="w-full md:w-1/2">
            <img
              src={contactPageImg}
              alt="Contact"
              className="w-full h-full min-h-[300px] object-cover"
            />
          </div>

          {/* Right blue form */}
          <div className="w-full md:w-1/2 min-w-0 bg-blue-600 text-white px-7 py-8 overflow-hidden">
            <p className="text-xs font-semibold tracking-widest uppercase mb-1">
              LET'S TALK
            </p>
            <h2 className="text-2xl font-bold mb-5">Get In Touch</h2>
            <form className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="flex-1 min-w-0 bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="flex-1 min-w-0 bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
                />
              </div>
              <div className="flex gap-3">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 min-w-0 bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
                />
                <input
                  type="url"
                  placeholder="Your Website"
                  className="flex-1 min-w-0 bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
                />
              </div>
              <textarea
                placeholder="Your Message Here"
                rows={4}
                className="bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors resize-none"
              />
              <div>
                <button
                  type="submit"
                  className="bg-white text-blue-600 text-xs font-bold tracking-widest uppercase px-5 py-2 hover:bg-blue-50 transition-colors"
                >
                  SUBMIT NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
