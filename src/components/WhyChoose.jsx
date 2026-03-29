import {
  MdOutlineSettings,
  MdOutlineVerified,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

import whyImg from "../assets/downImage2.jpeg";

const reasons = [
  {
    icon: <MdOutlineSettings size={36} className="text-blue-500" />,
    label: "Licensed Broker",
  },
  {
    icon: <MdOutlineSupportAgent size={36} className="text-blue-500" />,
    label: "24/7 Support",
  },
  {
    icon: <MdOutlineVerified size={36} className="text-blue-500" />,
    label: "Award Winner",
  },
  {
    icon: <TbTargetArrow size={36} className="text-blue-500" />,
    label: "Friendly Expert",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-16 px-4 bg-white overflow-hidden">
      {/* faint background watermark */}
      <div className="absolute inset-0 opacity-5 bg-[url('/icons.svg')] bg-no-repeat bg-center bg-contain pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            CHOOSE US <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Joshua
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-md transition-shadow"
              >
                {r.icon}
                <span className="text-sm text-gray-700 font-medium">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0 w-full md:w-[380px]">
          <img
            src={whyImg}
            alt="JOSHUA M MILLER"
            className="w-full h-[360px] object-cover rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}
