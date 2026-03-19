export default function ContactButton() {
  return (
    <div className="fixed bottom-6 right-6 flex items-center gap-2 z-50">
      <span className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-md">
        Contact us
      </span>
      <a
        href="/contact"
        className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-md transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2z"/>
        </svg>
      </a>
    </div>
  )
}
