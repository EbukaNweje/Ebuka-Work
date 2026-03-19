const awardImg = 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&q=80'

const awards = [
  { title: 'MI Awards' },
  { title: '' },
  { title: 'WellsFargo Awards' },
  { title: 'General Securities Representative CERT' },
  { title: 'Securities Industry Essentials' },
  { title: 'Uniform Combined State Law CERT' },
]

export default function AwardsGrid() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {awards.map((a, i) => (
          <div key={i} className="border border-gray-100 shadow-sm rounded-sm p-8 flex flex-col items-center gap-4">
            <img src={awardImg} alt="award" className="w-16 h-10 object-contain opacity-60" />
            {a.title && (
              <p className="text-sm font-bold text-gray-900 text-center">{a.title}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
