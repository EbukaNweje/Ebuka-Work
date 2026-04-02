const avatarImg =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-16 px-4 flex items-center justify-center">
      <div className="mx-auto w-full flex flex-col items-center gap-12 max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
          <div className="flex-1 text-center">
            <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex justify-center items-center gap-2 mb-3">
              REVIEWS <span className="block w-8 h-[2px] bg-blue-600" />
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Clients Testimonials
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed italic mb-8 max-w-md">
              Working with JOSHUA M MILLER has been a game-changer for my
              financial journey. Their expertise in financial management,
              advisory, tax strategies, and pension planning has provided me
              with peace of mind and a clear path to achieving my financial
              goals. JOSHUA M MILLER truly understands the complexities of
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
                John Doe
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
