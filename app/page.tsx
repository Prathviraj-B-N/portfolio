import { Header, Hero, About, Projects } from "./components";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-slate-300 h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="projects" className="snap-center">
        <Projects/>
      </section>
    </div>
  );
}
