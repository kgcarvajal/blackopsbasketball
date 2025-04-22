/**
 * Sanity configuration module
 */
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Environment variables
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

// Create a client for fetching data
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

// Set up the image URL builder
const builder = imageUrlBuilder({
  projectId,
  dataset,
});

/**
 * Generate image URLs from Sanity image records
 * @param source The Sanity image source to generate a URL for
 * @returns An image URL builder for the provided source, or null if no source
 */
export function urlForImage(source: SanityImageSource | null | undefined) {
  if (!source) {
    return null;
  }
  return builder.image(source);
}

// Export types for better type safety
export type SanityClient = typeof client;