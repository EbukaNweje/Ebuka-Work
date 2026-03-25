import contactImg from "../assets/instagram3.jpg";

export default function ContactMRG() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Left: image */}
        <div className="w-full md:w-1/2">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-full min-h-[420px] object-cover object-top"
          />
        </div>

        {/* Right: blue form */}
        <div className="w-full md:w-1/2 bg-blue-600 text-white px-8 py-10">
          <p className="text-xs font-semibold tracking-widest uppercase mb-1">
            LET'S TALK
          </p>
          <h2 className="text-2xl font-bold mb-6">Contact MRG</h2>

          <form className="flex flex-col gap-4">
            <div>
              <label className="text-xs text-blue-100 mb-1 block">
                Your name
              </label>
              <input
                type="text"
                className="w-full bg-blue-500 border border-blue-400 text-white text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-blue-100 mb-1 block">
                Your email
              </label>
              <input
                type="email"
                className="w-full bg-blue-500 border border-blue-400 text-white text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-blue-100 mb-1 block">
                Subject
              </label>
              <input
                type="text"
                className="w-full bg-blue-500 border border-blue-400 text-white text-sm px-3 py-2 outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label className="text-xs text-blue-100 mb-1 block">
                Your message (optional)
              </label>
              <textarea
                rows={4}
                className="w-full bg-blue-500 border border-blue-400 text-white text-sm px-3 py-2 outline-none focus:border-white transition-colors resize-y"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-white text-blue-600 text-sm font-semibold px-6 py-2 hover:bg-blue-50 transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
