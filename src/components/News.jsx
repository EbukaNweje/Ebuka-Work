import { MdOutlineCalendarToday } from 'react-icons/md'

const post1Img = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'
const post2Img = 'https://images.unsplash.com/photo-1642790551116-18e150f248e3?w=600&q=80'
const authorImg = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80'

const posts = [
  {
    img: post1Img,
    tags: ['FINANCIAL ADVISOR', 'FINANCIAL MANAGEMENT', 'RETIREMENT PLAN'],
    title: 'US economy defies recession fears',
    excerpt: 'The American economy is not in, nor heading for, a recession, no matter what the naysayers in...',
    author: 'admin',
    date: '10 Aug 2024',
  },
  {
    img: post2Img,
    tags: ['FINANCIAL ADVISOR', 'FINANCIAL MANAGEMENT', 'RETIREMENT PLAN'],
    title: 'Commodity Market Review: Record Gold, Surging Cocoa, and Volatile Oil',
    excerpt: 'Gold dominated, reaching a record $US2,454 an ounce on Comex in May, closing the month, quarter,...',
    author: 'admin',
    date: '01 Jul 2024',
  },
]

export default function News() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Left */}
        <div className="lg:w-1/3 flex-shrink-0 lg:pt-40">
          <p className="text-blue-600 text-xs font-semibold tracking-widest uppercase flex items-center gap-2 mb-3">
            INSIGHTS <span className="block w-8 h-[2px] bg-blue-600" />
          </p>
          <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4">
            Latest Updates & News Over World
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            In today's financial landscape, staying ahead requires a strategic approach to asset management that aligns with your long-term goals.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 hover:bg-blue-700 transition-colors"
          >
            LATEST NEWS
          </a>
        </div>

        {/* Right: cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {posts.map((p, i) => (
            <div key={i} className="border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-blue-600 text-[10px] font-semibold tracking-wide">
                      {t}{j < p.tags.length - 1 && <span className="text-gray-300 mx-1">|</span>}
                    </span>
                  ))}
                </div>
                <h3 className="text-gray-900 font-bold text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{p.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-2">
                    <img src={authorImg} alt="admin" className="w-6 h-6 rounded-full object-cover" />
                    <span>{p.author}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-500">
                    <MdOutlineCalendarToday size={12} />
                    <span>{p.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
