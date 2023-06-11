import { Project } from "@/helper/typings";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  // console.log(projects)
  return (
    <div className="h-screen flex flex-col relative text-center overflow-hidden md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-24 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-none scrollbar-track-slate-600/30 scrollbar-thumb-green-300/80">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
