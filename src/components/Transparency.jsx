import transparencyImg from "../assets/Imageslide2.jpeg";

const skills = [
  { label: "Forex CFDs", value: 94 },
  { label: "Cryptocurrency CFD", value: 85 },
  { label: "Share CFDs", value: 85 },
  { label: "Index CFDs", value: 91 },
  { label: "Treasury CFDs", value: 79 },
  { label: "Commodity CFDs", value: 98 },
];

export default function Transparency() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left image */}
        <div className="flex-shrink-0 w-full md:w-[380px]">
          <img
            src={transparencyImg}
            alt="JOSHUA M MILLER"
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>

        {/* Right content */}
        <div className="flex-1">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            AWARD WINNER AND LICENSED BROKER
            <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
            For Investors who Value Transparency
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Over the years of working closely with clients, JOSHUA M MILLER
            noticed a concerning trend—many individuals were not sufficiently
            involved in their own financial planning. Joshua is committed to
            empowering people of all ages and backgrounds with the tools to take
            charge of their financial well-being.
          </p>

          {/* Skill bars */}
          <div className="flex flex-col gap-4 mb-8">
            {skills.map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm text-gray-700 mb-1">
                  <span>{s.label}</span>
                  <span>{s.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-[6px]">
                  <div
                    className="bg-blue-600 h-[6px] rounded-full"
                    style={{ width: `${s.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>
    </section>
  );
}
