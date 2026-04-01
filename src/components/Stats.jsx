import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1500, suffix: "+", label: "HAPPY CLIENTS ALL OVER AMERICA" },
  { value: 16, suffix: "", label: "YEARS OF EXPERIENCE" },
  { value: 37, suffix: "", label: "STATES LICENSED TO PRACTICE" },
  { value: 10, suffix: "+", label: "Recognized Awards" },
];

function Counter({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span className="text-5xl font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-blue-600 py-16 px-4 text-white text-center overflow-hidden"
    >
      {/* diagonal lines overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <p className="text-xs font-semibold tracking-widest uppercase mb-2">
          JOSHUA M MILLER – AWARD WINNER AND LICENSED BROKER
        </p>
        <h2 className="text-3xl font-bold mb-12">Facts For Choosing Us</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <Counter target={s.value} suffix={s.suffix} start={started} />
              <p className="text-xs font-semibold tracking-widest uppercase leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
