import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/image'
import { allVideosQuery } from '@/lib/queries'

async function getVideos() {
  return await client.fetch(allVideosQuery)
}

export default async function VideosPage() {
  const videos = await getVideos()

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">Training Videos</h1>
        <p className="text-xl text-gray-400 mb-12">Professional basketball training techniques from Chris Brickley</p>
        
        {/* Category filter - placeholder for now */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">All</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Training</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Shooting</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Dribbling</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium">Pro Sessions</button>
        </div>
        
        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video._id} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition">
              <Link href={`/videos/${video.slug.current}`}>
                <div className="relative aspect-video">
                  {video.thumbnail ? (
                    <Image
                      src={urlForImage(video.thumbnail).url()}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      <svg className="w-16 h-16 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition">
                    <div className="bg-red-600 rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/videos/${video.slug.current}`} className="block">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                </Link>
                {video.excerpt && (
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">{video.excerpt}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {video.categories?.map((category, idx) => (
                    <span key={idx} className="bg-gray-800 text-xs text-gray-300 px-2 py-1 rounded">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}