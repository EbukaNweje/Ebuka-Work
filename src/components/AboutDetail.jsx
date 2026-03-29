import brokerImg from "../assets/ImgSlide3.jpeg";

export default function AboutDetail() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left image */}
        <div className="relative flex-shrink-0 w-full md:w-[420px]">
          <img
            src={brokerImg}
            alt="JOSHUA M MILLER"
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
            Where Thoughtful Risk Management Drives Sustainable Financial Growth
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Joshua Miller is a licensed Financial Advisor based in Garden City,
            NY, with over 16 years of experience. He is currently affiliated
            with both Morgan Stanley Financial Advisory and Merrill Lynch,
            Pierce, Fenner & Smith Incorporated. He holds Series 7, Series 66,
            and SIE licenses and is authorized to serve clients across 37
            states.
          </p>
          <a
            href="https://brokercheck.finra.org/individual/summary/5166189"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  );
}
