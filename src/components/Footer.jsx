import { MdOutlineCalendarToday } from "react-icons/md";

const post1Img =
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&q=80";
const post2Img =
  "https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=200&q=80";
const post3Img =
  "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=200&q=80";

const latestPosts = [
  {
    img: post1Img,
    title: "US economy defies recession fears",
    date: "August 18, 2024",
  },
  {
    img: post2Img,
    title:
      "Commodity Market Review: Record Gold, Surging Cocoa, and Volatile Oil",
    date: "July 1, 2024",
  },
  {
    img: post3Img,
    title: "US judge blocks Missouri rule curbing socially-conscious investing",
    date: "September 6, 2023",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700">
        {/* Col 1: Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-end gap-[2px]">
              {[3, 5, 7, 5, 3].map((h, i) => (
                <span
                  key={i}
                  className="bg-blue-500 w-[3px] rounded-sm"
                  style={{ height: `${h * 2}px` }}
                />
              ))}
            </div>
            <span className="text-xl font-bold tracking-widest text-white">
              Joshua
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            JOSHUA M MILLER is dedicated to building strong client relationships
            by deeply understanding your goals, addressing concerns with
            empathy, and providing tailored solutions to ensure you feel
            supported and confident in your financial decisions.
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-3 hover:bg-blue-700 transition-colors"
          >
            DISCOVER MORE
          </a>
        </div>

        {/* Col 2: Contact Info */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Contact Info</h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-3">
            1325 FRANKLIN AVE GARDEN CITY, NY 11530
          </p>
          <p className="text-sm text-gray-400 mb-3">+1 (332) 699-0836</p>
          <p className="text-sm text-gray-400">info@joshuamiller.com</p>
        </div>

        {/* Col 3: Latest Posts */}
        <div>
          <h4 className="text-white font-bold text-lg mb-5">Latest Posts</h4>
          <div className="flex flex-col gap-4">
            {latestPosts.map((p, i) => (
              <div key={i} className="flex items-start gap-3">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-14 h-12 object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-300 leading-snug mb-1 hover:text-white cursor-pointer">
                    {p.title}
                  </p>
                  <div className="flex items-center gap-1 text-blue-500 text-xs">
                    <MdOutlineCalendarToday size={11} />
                    <span>{p.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-xs text-gray-500">
        ©copyright {new Date().getFullYear()} JOSHUA M MILLER
      </div>
    </footer>
  );
}
