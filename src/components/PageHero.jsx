import { Link } from "react-router-dom";
const pageHeroBg =
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80";

export default function PageHero({ title }) {
  return (
    <div className="relative w-full h-52 md:h-64 overflow-hidden">
      <img
        src={pageHeroBg}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-900/60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            JOSHUA M MILLER
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-200">{title}</span>
        </div>
      </div>
    </div>
  );
}
