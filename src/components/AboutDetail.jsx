const brokerImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";

export default function AboutDetail() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left image */}
        <div className="relative flex-shrink-0 w-full md:w-[420px]">
          <img
            src={brokerImg}
            alt="Gregor Vankirk"
            className="w-full h-[480px] object-cover object-top"
          />
          <span className="absolute top-3 right-3 text-white text-[10px] font-bold tracking-widest leading-tight text-right">
            MATTBOYD
            <br />
            <span className="text-[8px] font-normal">PHOTOGRAPHY</span>
          </span>
        </div>

        {/* Right content */}
        <div className="flex-1">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            ABOUT US <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug mb-5">
            Time to Make Your Finances Magical
          </h2>
          <p className="text-gray-900 text-sm font-bold mb-4">
            Letting losses run is the most serious mistake made by most
            investors.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Gregor Vankirk is a licensed financial advisor based in Chandler,
            AZ, with 16 years of industry experience. He is currently affiliated
            with Wells Fargo Financial Advisory, following his previous roles at
            Merrill Lynch, Pierce, Fenner & Smith Incorporated, and Waddell &
            Reed, Inc. Michael holds Series 7, Series 66, and SIE licenses,
            certifying him as both a securities agent and an investment advisor
            representative, with authorization to operate in 52 states.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  );
}
