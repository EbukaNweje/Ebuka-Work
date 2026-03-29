import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function AnimatedSection({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}) {
  const [ref, isVisible] = useScrollAnimation(threshold);

  const animationClass = `animate-${animation}${delay > 0 ? ` animate-delay-${delay * 100}` : ""}`;

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
