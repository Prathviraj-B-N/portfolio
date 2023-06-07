import { Header, Hero, About, Projects, Skills, Contact } from "../components";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-slate-300 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-slate-600/30 scrollbar-thumb-green-300/80">
      
      <Header />
      
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>
    
      <section id="skills" className="snap-center">
        <Skills/>
      </section>

      <section id="contact" className="snap-center">
        <Contact/>
      </section>

      
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-end p-10">
          <a href='#hero'><img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="/top.png" alt="" /> </a>
          </div>
        </footer>
    </div>
  );
}
