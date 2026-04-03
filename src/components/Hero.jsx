import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Img2 from "../assets/ImgSlide1.jpeg";
import Img1 from "../assets/Imageslide2.jpeg";
import Img3 from "../assets/ImgSlide3.jpeg";
import AnimatedSection from "./AnimatedSection";

const slides = [
  {
    img: Img1,
    subtitle: "JOSHUA M MILLER - Bank of America Broker",
    title: "Empower Your Finances",
  },
  {
    img: Img2,
    subtitle: "AWARD-WINNING FINANCIAL ADVISOR",
    title: "Navigate Markets with Confidence",
  },
  {
    img: Img3,
    subtitle: "TRUSTED BY 1,000+ CLIENTS GLOBALLY",
    title: "Your Financial Future Starts Here",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center text-white w-full px-4">
            <AnimatedSection key={current} animation="fade-in-up">
              <p className="text-sm tracking-[0.2em] mb-3 text-gray-200">
                {slide.subtitle}
              </p>
            </AnimatedSection>
            <AnimatedSection
              key={current + 1}
              animation="slide-in-up"
              delay={1}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase leading-tight">
                {slide.title}
              </h1>
            </AnimatedSection>
            <AnimatedSection key={current + 2} animation="fade-in-up" delay={2}>
              <a
                href="#services"
                className="inline-block mt-6 bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                Explore More
              </a>
            </AnimatedSection>
          </div>
        </div>
      ))}

      {/* Prev */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 rounded-full p-2 transition-colors z-10"
      >
        <FiChevronLeft size={22} />
      </button>

      {/* Next */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/60 rounded-full p-2 transition-colors z-10"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
