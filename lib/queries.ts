import { groq } from 'next-sanity'

// Query for all videos
export const allVideosQuery = groq`*[_type == "videoPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  thumbnail,
  publishedAt,
  "categories": categories[]->title
}`

// Query for a single video by slug
export const videoBySlugQuery = groq`*[_type == "videoPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  featuredVideo,
  videoUrl,
  thumbnail,
  excerpt,
  body,
  publishedAt,
  "categories": categories[]->title,
  "author": author->{
    name,
    slug,
    image
  },
  "relatedVideos": *[_type == "videoPost" && slug.current != $slug && count(categories[@._ref in ^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    thumbnail,
    excerpt,
    publishedAt
  }
}`

// Query for all blog posts
export const allBlogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  excerpt,
  mainImage,
  publishedAt,
  "categories": categories[]->title
}`

// Query for a single blog post by slug
export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  excerpt,
  body,
  publishedAt,
  "categories": categories[]->title,
  "author": author->{
    name,
    slug,
    image,
    bio
  },
  "relatedPosts": *[_type == "blogPost" && slug.current != $slug && count(categories[@._ref in ^.categories[]._ref]) > 0] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    excerpt,
    publishedAt
  }
}`

// Query for all galleries
export const allGalleriesQuery = groq`*[_type == "photoGallery"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  description,
  coverImage,
  publishedAt,
  "imageCount": count(images)
}`

// Query for a single gallery by slug
export const galleryBySlugQuery = groq`*[_type == "photoGallery" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  coverImage,
  publishedAt,
  images[] {
    asset->,
    caption,
    alt
  },
  "categories": categories[]->title
}`

// Query for homepage data
export const homePageQuery = groq`{
    "featuredHero": *[_type == "homepage"][0].featuredHero-> {
      _type,
      title,
      "slug": slug.current,
      excerpt,
      "thumbnail": select(
        _type == "videoPost" => thumbnail,
        _type == "blogPost" => mainImage,
        _type == "photoGallery" => coverImage
      )
    },
    "featuredContent": *[_type == "homepage"][0].featuredContent[]-> {
      _type,
      title,
      "slug": slug.current,
      excerpt,
      "thumbnail": select(
        _type == "videoPost" => thumbnail,
        _type == "blogPost" => mainImage,
        _type == "photoGallery" => coverImage
      )
    },
    "featuredVideos": *[_type == "videoPost" && featured == true] | order(publishedAt desc)[0...4],
    "latestBlogs": *[_type == "blogPost"] | order(publishedAt desc)[0...3],
    "photoGalleries": *[_type == "photoGallery"] | order(publishedAt desc)[0...6],
    "siteSettings": *[_type == "siteSettings"][0]
  }`

  // Query for about page
export const aboutPageQuery = groq`*[_type == "author" && name == "Chris Brickley"][0]{
    name,
    bio,
    image
  }`

 // Search query to find content across all types
export const searchQuery = groq`{
    "videos": *[_type == "videoPost" && (title match $searchTerm || excerpt match $searchTerm)] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      thumbnail,
      publishedAt
    },
    "blogs": *[_type == "blogPost" && (title match $searchTerm || excerpt match $searchTerm)] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    },
    "galleries": *[_type == "photoGallery" && (title match $searchTerm || description match $searchTerm)] {
      _id,
      _type,
      title,
      slug,
      description,
      coverImage,
      publishedAt
    }
  }`