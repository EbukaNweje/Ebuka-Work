import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import WhyChoose from "../components/WhyChoose";
import Transparency from "../components/Transparency";
import Testimonials from "../components/Testimonials";
import News from "../components/News";
import ContactSection from "../components/ContactSection";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AnimatedSection animation="fade-in-up">
        <Services />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left" delay={1}>
        <About />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-right" delay={2}>
        <WhyChoose />
      </AnimatedSection>
      <AnimatedSection animation="scale-in" delay={3}>
        <Transparency />
      </AnimatedSection>
      <AnimatedSection animation="slide-in-up" delay={4}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-up" delay={5}>
        <News />
      </AnimatedSection>
      <AnimatedSection animation="fade-in-left" delay={6}>
        <ContactSection />
      </AnimatedSection>
    </>
  );
}
