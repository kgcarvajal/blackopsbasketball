import { groq } from 'next-sanity';
import { client } from './sanity';

// Type definitions
interface SearchParams {
  searchTerm: string;
}

// Blog queries
export const allBlogPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    thumbnail,
    publishedAt,
    categories[]->{ title }
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    mainImage,
    body,
    publishedAt,
    categories[]->{ title },
    author->{
      name,
      image
    }
  }
`;

/**
 * Fetch all posts with pagination
 */
export const getAllPosts = async (limit = 10, skip = 0) => {
  return client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) [${skip}...${skip + limit}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "categories": categories[]->title
    }`
  );
};

/**
 * Fetch a single post by slug
 */
export const getPostBySlug = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      body,
      mainImage,
      publishedAt,
      "author": author->{name, image},
      "categories": categories[]->title
    }`,
    { slug }
  );
};

// Gallery queries
export const allGalleriesQuery = groq`
  *[_type == "photoGallery"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    mainImage,
    coverImage,
    publishedAt
  }
`;

export const galleryBySlugQuery = groq`
  *[_type == "photoGallery" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    mainImage,
    images[] {
      _key,
      asset->{
        _id,
        url,
        metadata {
          dimensions
        }
      },
      caption,
      alt
    },
    publishedAt
  }
`;

/**
 * Fetch gallery images
 */
export const getGalleryImages = async (limit = 20, skip = 0) => {
  return client.fetch(
    groq`*[_type == "galleryImage"] | order(publishedAt desc) [${skip}...${skip + limit}] {
      _id,
      title,
      image,
      publishedAt
    }`
  );
};

// Video queries
export const allVideosQuery = groq`
  *[_type == "video"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    excerpt,
    videoUrl,
    thumbnail,
    duration,
    publishedAt,
    categories[]->{ title }
  }
`;

export const videoBySlugQuery = groq`
  *[_type == "video" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    videoUrl,
    thumbnail,
    duration,
    publishedAt,
    categories[]->{ title },
    relatedVideos[]->{ 
      _id,
      title,
      slug,
      thumbnail,
      duration
    }
  }
`;

/**
 * Fetch all videos with pagination
 */
export const getAllVideos = async (limit = 10, skip = 0) => {
  return client.fetch(
    groq`*[_type == "video"] | order(publishedAt desc) [${skip}...${skip + limit}] {
      _id,
      title,
      slug,
      description,
      videoUrl,
      thumbnailImage,
      publishedAt,
      "categories": categories[]->title
    }`
  );
};

/**
 * Fetch a single video by slug
 */
export const getVideoBySlug = async (slug: string) => {
  return client.fetch(
    groq`*[_type == "video" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      videoUrl,
      thumbnailImage,
      publishedAt,
      "relatedVideos": relatedVideos[]->
    }`,
    { slug }
  );
};

// Search query
export const searchQuery = groq`
  {
    "videos": *[_type == "video" && (title match $searchTerm || description match $searchTerm)] {
      _id,
      _type,
      title,
      slug,
      excerpt,
      thumbnail,
      duration,
      publishedAt
    },
    "blogs": *[_type == "post" && (title match $searchTerm || excerpt match $searchTerm)] {
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
  }
`;

/**
 * Search for content matching a query string
 */
export const performSearch = async (searchTerm: string) => {
  const params: { searchTerm: string } = { searchTerm: `*${searchTerm}*` };
  return client.fetch(searchQuery, params);
};