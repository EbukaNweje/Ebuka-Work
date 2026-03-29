import {
  MdOutlineBarChart,
  MdOutlineAssessment,
  MdOutlineCloud,
  MdOutlineShield,
} from "react-icons/md";

const services = [
  {
    icon: <MdOutlineBarChart size={40} className="text-blue-500" />,
    title: "Financial Planning Services & Wealth Coach",
    desc: "Providing tailored financial planning and wealth coaching to achieve and sustain your financial goals.",
    large: true,
  },
  {
    icon: <MdOutlineAssessment size={40} className="text-blue-500" />,
    title: "Reports Analysis",
    desc: "Personalized portfolio management to optimize your investments and achieve your financial objectives.",
    large: false,
  },
  {
    icon: <MdOutlineCloud size={40} className="text-blue-500" />,
    title: "Pension Consulting Services",
    desc: "Expert pension consulting to ensure your retirement plans are effective and secure.",
    large: true,
  },
  {
    icon: <MdOutlineShield size={40} className="text-blue-500" />,
    title: "Portfolio Management for Investment Companies",
    desc: "Strategic portfolio management tailored for investment companies to optimize returns and manage risk effectively.",
    large: false,
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left text */}
        <div className="lg:w-1/3 flex-shrink-0">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            SERVICES <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-5">
            Navigate Rapid Markets with Joshua's Expertise
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Joshua M Miller is a licensed Financial Advisor based in Garden
            City, NY, with over 16 years of experience. He is currently
            affiliated with both Morgan Stanley Financial Advisory and Merrill
            Lynch, Pierce, Fenner & Smith Incorporated. He holds Series 7,
            Series 66, and SIE licenses and is authorized to serve clients
            across 37 states.
          </p>
          <a
            href="https://brokercheck.finra.org/individual/summary/5166189"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            CHECK BROKER
          </a>
        </div>

        {/* Right grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div>{s.icon}</div>
              <h3 className="text-gray-900 font-semibold text-sm leading-snug">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
