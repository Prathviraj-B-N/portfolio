import { NextResponse } from "next/server";
import {groq} from 'next-sanity';
import { SanityClientCached } from "../../../sanity";
import { PageInfo } from "@/typings";

type responseData = {
    status: number;
    pageInfo: PageInfo[];
}

export async function GET (request: Request){
    const pageInfo: PageInfo[] = await SanityClientCached(groq`*[_type == "pageInfo"]`);
    const response: responseData = {status : 200, pageInfo: pageInfo};
    return NextResponse.json(response);
}