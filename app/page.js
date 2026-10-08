import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Constellation from "./components/Constellation";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* GLOBAL CONSTELLATION BACKGROUND */}
      <Constellation />

      {/* WEBSITE CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <Contact />
      </div>

    </main>
  );
}