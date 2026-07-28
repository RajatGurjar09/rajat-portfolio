import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="devops-grid">

        <section id="home">
          <Hero />
        </section>

        <About />

        <Projects />

        <Experience />

        <Skills />

        <Contact />

      </main>

      <Footer />
    </>
  );
}