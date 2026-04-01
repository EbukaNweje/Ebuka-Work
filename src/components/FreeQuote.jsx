import quoteImg from "../assets/ImgWork.jpeg";

export default function FreeQuote() {
  return (
    <section className="flex flex-col md:flex-row min-h-[400px]">
      {/* Left: image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img
          src={quoteImg}
          alt="JOSHUA M MILLER"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: form on blue bg */}
      <div className="w-full md:w-1/2 bg-blue-600 text-white px-8 py-12">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2">
          LET'S TALK
        </p>
        <h2 className="text-3xl font-bold mb-8">Request a Free Quote</h2>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 bg-blue-500 placeholder-blue-100 text-white text-sm px-4 py-3 outline-none border border-blue-400 focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="flex-1 bg-blue-500 placeholder-blue-100 text-white text-sm px-4 py-3 outline-none border border-blue-400 focus:border-white transition-colors"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 bg-blue-500 placeholder-blue-100 text-white text-sm px-4 py-3 outline-none border border-blue-400 focus:border-white transition-colors"
            />
            <input
              type="url"
              placeholder="Your Website"
              className="flex-1 bg-blue-500 placeholder-blue-100 text-white text-sm px-4 py-3 outline-none border border-blue-400 focus:border-white transition-colors"
            />
          </div>
          <textarea
            placeholder="Your Message Here"
            rows={5}
            className="bg-blue-500 placeholder-blue-100 text-white text-sm px-4 py-3 outline-none border border-blue-400 focus:border-white transition-colors resize-y"
          />
          <div>
            <button
              type="submit"
              className="bg-white text-blue-600 text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-50 transition-colors"
            >
              SUBMIT NOW
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
