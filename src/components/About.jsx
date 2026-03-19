const brokerImg =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80";

export default function About() {
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="relative flex-shrink-0 w-full md:w-[340px]">
          <img
            src={brokerImg}
            alt="Gregor Vankirk"
            className="w-full md:w-[340px] h-[380px] object-cover object-top"
          />
          <span className="absolute top-3 right-3 text-white text-[10px] font-bold tracking-widest">
            MATTBOYD
          </span>
        </div>

        <div className="flex-1">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            GREGOR VANKIRK – AWARD-WINNING LICENSED ADVISOR
            <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-5">
            Time to Make Your Finances Extraordinary
          </h2>
          <p className="text-gray-800 text-sm font-semibold mb-3">
            Letting losses run is the most serious mistake made by most
            investors.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            With over 10 years of experience and having served more than 1,000
            clients globally, Gregor is a renowned licensed broker recognized in
            both Asia and Europe. He is dedicated to empowering individuals of
            all backgrounds with essential financial knowledge and tools to make
            informed decisions for their financial well-being.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>
    </section>
  );
}
