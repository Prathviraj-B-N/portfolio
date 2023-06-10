import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { SanityClientCached } from "../../../helper/sanityHelper";
import { Project } from "@/helper/typings";

type responseData = {
  status: number;
  projects: Project[];
};

export async function GET(request: Request) {
  const projects: Project[] = await SanityClientCached(
    groq`*[_type == "projects"]{ ..., techStack[]->}`
  );
  const response: responseData = { status: 200, projects: projects };
  return NextResponse.json(response);
}
