import { useState } from "react";
import { MdOutlineContactSupport, MdOutlinePhone } from "react-icons/md";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    q: "What types of investments can I make through your brokerage?",
    a: "We offer a wide range of investment options including stocks, bonds, mutual funds, ETFs, Forex CFDs, cryptocurrency CFDs, and more — tailored to your financial goals.",
  },
  {
    q: "How often will we meet to review my financial plan?",
    a: "We recommend quarterly reviews, but we can schedule meetings as frequently as you need to ensure your plan stays aligned with your goals.",
  },
  {
    q: "What services do you offer?",
    a: "We offer financial planning, wealth coaching, pension consulting, portfolio management, reports analysis, and investment advisory services.",
  },
  {
    q: "What qualifications do Andrew have?",
    a: "Michael holds Series 7, Series 66, and SIE licenses, certifying him as both a securities agent and an investment advisor representative.",
  },
  {
    q: "Do you offer personalized investment advice?",
    a: "Yes, every client receives a customized investment strategy based on their unique financial situation, risk tolerance, and long-term objectives.",
  },
  {
    q: "What is your investment philosophy?",
    a: "We believe in disciplined, long-term investing with a focus on risk management, diversification, and aligning investments with each client's personal goals.",
  },
  {
    q: "Are my investments insured?",
    a: "Accounts held with SIPC-member firms are protected up to $500,000. We will walk you through all applicable protections during your onboarding.",
  },
  {
    q: "Can you assist with retirement planning?",
    a: "Absolutely. Retirement planning is one of our core services — we help you build a strategy to grow and protect your wealth for a secure retirement.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left: FAQ */}
        <div className="flex-1">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase mb-2">
            FEEL FREE TO CONTACT US
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Do You Have Any Questions?
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Find quick answers to common inquiries and get the information you
            need to make informed decisions.
          </p>

          <div className="flex flex-col gap-2">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-100 rounded-sm overflow-hidden"
              >
                <div
                  className="px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <MdOutlineContactSupport
                    size={18}
                    className="text-blue-500 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 flex-1">{item.q}</span>
                  {open === i ? (
                    <FiChevronUp
                      size={16}
                      className="text-blue-500 flex-shrink-0"
                    />
                  ) : (
                    <FiChevronDown
                      size={16}
                      className="text-gray-400 flex-shrink-0"
                    />
                  )}
                </div>
                {open === i && (
                  <div className="px-4 pb-4 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-100 bg-gray-50">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Contact + Call */}
        <div className="lg:w-72 flex flex-col gap-4">
          {/* Quick Contact form */}
          <div className="bg-blue-600 text-white p-6 rounded-sm">
            <h3 className="font-bold text-lg mb-4">Quick Contact !</h3>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
              <textarea
                placeholder="Enter Query Here"
                rows={3}
                className="bg-blue-500 border border-blue-400 text-white placeholder-blue-200 text-sm px-3 py-2 outline-none focus:border-white transition-colors resize-none"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 text-xs font-bold tracking-widest uppercase px-4 py-2 hover:bg-blue-50 transition-colors self-start"
              >
                SUBMIT NOW
              </button>
            </form>
          </div>

          {/* Call us card */}
          <div className="bg-blue-600 text-white p-6 rounded-sm flex flex-col items-center text-center gap-3">
            <div className="bg-white/20 rounded-full p-3">
              <MdOutlinePhone size={24} />
            </div>
            <p className="font-bold text-sm">
              Have any Questions? Call us Today!
            </p>
            <p className="text-xl font-bold">+1 (332) 699-0836</p>
          </div>
        </div>
      </div>
    </section>
  );
}
