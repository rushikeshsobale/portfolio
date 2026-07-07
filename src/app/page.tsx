import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Stack />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
