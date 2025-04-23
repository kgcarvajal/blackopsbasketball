import {galleryBySlugQuery} from '@/lib/queries'
import {client} from '@/lib/sanity'
import Link from 'next/link'
import Layout from '../../components/Layout'
import GalleryViewer from './galleryviewer'

async function getGallery(slug: string) {
  return await client.fetch(galleryBySlugQuery, {slug})
}

export default async function GalleryDetailPage({params}: {params: {slug: string}}) {
  const gallery = await getGallery(params.slug)

  if (!gallery) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">Gallery Not Found</h1>
          <p className="text-gray-400">
            The gallery you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/gallery"
            className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            Back to Gallery
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="mb-6">
          <Link href="/gallery" className="text-gray-400 hover:text-white flex items-center w-fit">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Gallery
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{gallery.title}</h1>
          {gallery.description && (
            <p className="text-xl text-gray-400 mb-4">{gallery.description}</p>
          )}
          {gallery.publishedAt && (
            <p className="text-gray-500">
              {new Date(gallery.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          )}
        </div>

        {gallery.images && gallery.images.length > 0 ? (
          <GalleryViewer images={gallery.images} />
        ) : (
          <div className="text-center text-gray-400 py-8">
            <p>This gallery doesn&apos;t have any images yet.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}
