import { NextResponse } from "next/server";
import {groq} from 'next-sanity';
import { SanityClientCached } from "../../../sanityHelper";
import { Skill } from "@/typings";

type responseData = {
    status: number;
    skills: Skill[];
}

export async function GET (request: Request){
    const skills: Skill[] = await SanityClientCached(groq`*[_type == "skill"]`);
    const response: responseData = {status : 200, skills: skills};
    return NextResponse.json(response);
}