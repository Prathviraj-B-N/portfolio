import { Header, Hero, About, Projects, Skills, Contact } from "../components";
import { PageInfo,Project,Skill,Social } from "@/helper/typings";
import { fetchPageInfo, fetchProjects, fetchSkills, fetchSocials } from "@/helper/fetchData";

type Data = {
    pageInfo:PageInfo[];
    projects: Project[];
    skills: Skill[];
    socials: Social[];
}

const getData = async ():Promise<Data> =>{
  const pageInfo: PageInfo[] = await fetchPageInfo();
  const socials: Social[] = await fetchSocials();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();

  return (
      {
        pageInfo,
        socials,
        projects,
        skills
      }
  );
};

export default async function  Home() {
  const data = await getData();
  const {pageInfo,
    socials,
    projects,
    skills} = data;

  return (
    <div className="bg-[rgb(36,36,36)] text-slate-300 h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-slate-600/30 scrollbar-thumb-green-300/80">
      
      <Header socials={socials}/>
      
      <section id="me" className="snap-center">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="projects" className="snap-center">
        <Projects projects={projects}/>
      </section>
    
      <section id="skills" className="snap-center">
        <Skills skills={skills}/>
      </section>

      <section id="contact" className="snap-center">
        <Contact/>
      </section>

      
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex flex-row-reverse items-end p-5">
          <a href='/#me'><img className="h-8 w-8 animate-pulse hover:grayscale-0 cursor-pointer z-20" src="/top.png" alt="" /> </a>
          </div>
        </footer>
    </div>
  );
}