import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div aria-hidden="true" className="fixed inset-0 -z-20 bg-hero-glow" />
      <div aria-hidden="true" className="fixed inset-0 -z-10 bg-radial-grid bg-[size:22px_22px] opacity-[0.18]" />
      <div aria-hidden="true" className="noise pointer-events-none fixed inset-0 -z-10 opacity-[0.045]" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
