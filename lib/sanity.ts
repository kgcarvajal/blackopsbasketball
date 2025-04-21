import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Helper function for generating image URLs
const builder = imageUrlBuilder(client)

export function urlForImage(source: any) {
  return builder.image(source)
}

// Search queries
export async function searchVideos(query: string) {
  return client.fetch(`
    *[_type == "video" && (title match "*${query}*" || description match "*${query}*" || categories[]->title match "*${query}*")] {
      _id,
      title,
      slug,
      "excerpt": coalesce(excerpt, description)[0..150] + "...",
      mainImage,
      publishedAt
    } | order(publishedAt desc)
  `)
}

export async function searchPosts(query: string) {
  return client.fetch(`
    *[_type == "post" && (title match "*${query}*" || body match "*${query}*" || categories[]->title match "*${query}*")] {
      _id,
      title,
      slug,
      "excerpt": coalesce(excerpt, body[0].children[0].text)[0..150] + "...",
      mainImage,
      publishedAt
    } | order(publishedAt desc)
  `)
}

export async function searchGallery(query: string) {
  return client.fetch(`
    *[_type == "gallery" && (title match "*${query}*" || description match "*${query}*")] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt
    } | order(publishedAt desc)
  `)
}