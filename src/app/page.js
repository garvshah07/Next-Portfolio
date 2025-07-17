import About from "@/components/manual/About/About";
import Hero from "@/components/manual/Hero/Hero";
import Skills from "@/components/manual/Skills/Skills";
import Career from "@/components/manual/Career/Career";
import Project from "@/components/manual/Project/Project";
import Contact from "@/components/manual/Contact/Contact";
import Footer from "@/components/manual/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Career />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}
