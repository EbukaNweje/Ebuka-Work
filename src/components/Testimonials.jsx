const testimonialImg =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80";
const avatarImg =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";

const logos = [
  {
    name: "Cointelegraph",
    style: "text-yellow-600 text-sm font-semibold tracking-wide",
  },
  { name: "yahoo! finance", style: "text-purple-600 text-xl font-bold" },
  { name: "Forbes", style: "text-blue-900 text-2xl font-bold italic" },
  { name: "TED", style: "text-red-500 text-2xl font-bold" },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
          <div className="flex-1">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
              REVIEWS <span className="block w-8 h-[2px] bg-blue-600" />
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Clients Testimonials
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-8 max-w-md">
              Working with Gregor Vankirk has been a game-changer for my
              financial journey. Their expertise in financial management,
              advisory, tax strategies, and pension planning has provided me
              with peace of mind and a clear path to achieving my financial
              goals. Gregor Vankirk truly understands the complexities of
              personal finance and delivers personalized solutions that fit my
              unique needs.
            </p>
            <div className="flex items-center gap-3">
              <img
                src={avatarImg}
                alt="Avary Snowbell"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-semibold text-gray-800">
                Avary Snowbell
              </span>
            </div>
          </div>
          <div className="flex-shrink-0 w-full md:w-[380px]">
            <img
              src={testimonialImg}
              alt="Testimonial"
              className="w-full h-[320px] object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex flex-wrap items-center justify-around gap-6">
          {logos.map((l, i) => (
            <span key={i} className={l.style}>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
