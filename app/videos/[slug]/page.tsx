import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/image'
import { videoBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

// Components for rendering PortableText
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-6 relative w-full h-96">
          <Image
            src={urlForImage(value).url()}
            alt={value.alt || ' '}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )
    }
  }
}

async function getVideo(slug: string) {
  return await client.fetch(videoBySlugQuery, { slug })
}

export default async function VideoPage({ params }: { params: { slug: string } }) {
  const video = await getVideo(params.slug)

  if (!video) {
    return (
      <Layout>
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-3xl font-bold mb-4">Video Not Found</h1>
          <p className="text-gray-400">The video you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/videos" className="mt-6 inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition">
            Back to Videos
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="container mx-auto py-8 px-4">
        <div className="mb-6">
          <Link href="/videos" className="text-gray-400 hover:text-white flex items-center w-fit">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Videos
          </Link>
        </div>
        
        {/* Video Player */}
        <div className="aspect-video w-full bg-gray-900 mb-8 rounded-lg overflow-hidden">
          {video.videoUrl ? (
            <iframe 
              src={video.videoUrl}
              className="w-full h-full"
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : video.featuredVideo ? (
            <video 
              src={video.featuredVideo.url} 
              className="w-full h-full object-cover" 
              controls
            ></video>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p>Video is currently unavailable</p>
            </div>
          )}
        </div>
        
        {/* Video Info */}
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{video.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {video.publishedAt && (
              <span className="text-gray-400">
                {new Date(video.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            )}
            {video.categories?.map((category, index) => (
              <span key={index} className="bg-gray-800 text-white px-2 py-1 text-xs font-bold rounded">
                {category}
              </span>
            ))}
          </div>
          
          {video.excerpt && (
            <p className="text-lg text-gray-300 mb-8">{video.excerpt}</p>
          )}
          
          {video.body && (
            <div className="prose prose-invert max-w-none">
              <PortableText value={video.body} components={ptComponents} />
            </div>
          )}
        </div>
        
        {/* Related Videos */}
        {video.relatedVideos && video.relatedVideos.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Videos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {video.relatedVideos.map((related) => (
                <div key={related._id} className="bg-gray-900 rounded-lg overflow-hidden">
                  <Link href={`/videos/${related.slug.current}`}>
                    <div className="aspect-video relative">
                      {related.thumbnail ? (
                        <Image
                          src={urlForImage(related.thumbnail).url()}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">{related.title}</h3>
                    {related.excerpt && (
                      <p className="text-gray-400 text-sm line-clamp-2">{related.excerpt}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}