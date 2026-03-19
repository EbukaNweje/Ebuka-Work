import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <section
      className="relative py-20 px-4 text-white text-center overflow-hidden bg-blue-600"
      style={{
        backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 60px)',
      }}
    >
      <p className="text-sm font-medium mb-3">Navigating Markets with Expertise</p>
      <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-8 max-w-2xl mx-auto">
        Building strong client relationships through understanding and strategy.
      </h2>
      <Link
        to="/contact"
        className="inline-block border border-white text-white text-xs font-bold tracking-widest uppercase px-8 py-3 hover:bg-white hover:text-blue-600 transition-colors"
      >
        GET STARTED
      </Link>
    </section>
  )
}
