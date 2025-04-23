import imageUrlBuilder from '@sanity/image-url'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {createClient} from 'next-sanity'
// Import your Sanity client configuration
import {client} from './sanity'

// Create an image URL builder using the Sanity client
const builder = imageUrlBuilder(client)

/**
 * Generate image URLs from Sanity image records
 * @param source The Sanity image source to generate a URL for
 * @returns An image URL builder for the provided source
 */
export function urlForImage(source: SanityImageSource) {
  return builder.image(source)
}
