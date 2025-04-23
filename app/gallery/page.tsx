import {urlForImage} from '@/lib/image' // Updated import path
import {allGalleriesQuery} from '@/lib/queries'
import {client} from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

// Define gallery interface
interface Gallery {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  coverImage?: any
  mainImage?: any
  imageCount?: number
}

async function getGalleries(): Promise<Gallery[]> {
  return await client.fetch(allGalleriesQuery)
}

// Helper function to safely get image URL
function getImageUrl(source: any, fallback: string = '/placeholder-gallery.jpg'): string {
  const imageBuilder = urlForImage(source)
  return imageBuilder ? imageBuilder.url() : fallback
}

export default async function GalleryPage() {
  const galleries = await getGalleries()

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">Photo Gallery</h1>
        <p className="text-xl text-gray-400 mb-12">
          Behind the scenes of elite basketball training
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery) => (
            <Link
              key={gallery._id}
              href={`/gallery/${gallery.slug.current}`}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              {gallery.coverImage ? (
                <Image
                  src={getImageUrl(gallery.coverImage)}
                  alt={gallery.title || 'Gallery image'}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              ) : gallery.mainImage ? (
                <Image
                  src={getImageUrl(gallery.mainImage)}
                  alt={gallery.title || 'Gallery image'}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  <svg
                    className="w-12 h-12 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {gallery.title || 'Untitled Gallery'}
                </h3>
                {gallery.description && (
                  <p className="text-gray-300 text-sm mb-2">{gallery.description}</p>
                )}
                {gallery.imageCount && (
                  <span className="text-gray-400 text-sm">{gallery.imageCount} photos</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}
