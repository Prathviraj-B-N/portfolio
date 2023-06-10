import { Skill, Project, Social, PageInfo } from "@/helper/typings";

//TODO: Implement caching

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/api/get-skills`,
    { next: { revalidate: 120 } }
  );

  const data = await res.json();
  const status: number = data.status;
  const skills: Skill[] = data.skills;

  return skills;
};

export const fetchSocials = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/api/get-socials`,
    { next: { revalidate: 120 } }
  );

  const data = await res.json();
  const status: number = data.status;
  const socials: Social[] = data.socials;

  return socials;
};

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/api/get-hero`,
    { next: { revalidate: 120 } }
  );

  const data = await res.json();
  const status: number = data.status;
  const skills: PageInfo[] = data.pageInfo;

  return skills;
};

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_DEV}/api/get-projects`,
    { next: { revalidate: 120 } }
  );

  const data = await res.json();
  const status: number = data.status;
  const projects: Project[] = data.projects;

  return projects;
};
