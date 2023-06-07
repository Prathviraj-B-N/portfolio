import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import {cache} from 'react'

export const config = {
    dataset:  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    apiVersion: '2023-06-07',
    useCdn: true
}
const client = createClient(config);
export const SanityClientCached = cache(client.fetch.bind(client))

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);