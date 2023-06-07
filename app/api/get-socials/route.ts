import { NextResponse } from "next/server";
import {groq} from 'next-sanity';
import { SanityClientCached } from "../../../sanity";
import { Social } from "@/typings";

type responseData = {
    status: number;
    socials: Social[];
}

export async function GET (request: Request){
    const socials: Social[] = await SanityClientCached(groq`*[_type == "social"]`);
    const response: responseData = {status : 200, socials: socials};
    return NextResponse.json(response);
}