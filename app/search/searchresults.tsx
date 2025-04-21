import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/sanity'
import { searchQuery } from '@/lib/queries'

async function getSearchResults(searchTerm) {
  // Add wildcards to make the search more flexible
  const wildcard = `*${searchTerm}*`
  return await client.fetch(searchQuery, { searchTerm: wildcard })
}

export default async function SearchResults({ searchTerm }) {
  const { videos, blogs, galleries } = await getSearchResults(searchTerm)
  const totalResults = videos.length + blogs.length + galleries.length
  
  if (totalResults === 0) {
    return (
      <div className="text-center text-gray-400 py-16">
        <p className="mb-4">No results found for "{searchTerm}"</p>
        <p>Try a different search term or browse our content sections.</p>
      </div>
    )
  }
  
  return (
    <div>
      <p className="mb-8 text-gray-400">
        Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{searchTerm}"
      </p>
      
      {/* Videos Results */}
      {videos.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Videos ({videos.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video._id} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition">
                <Link href={`/videos/${video.slug.current}`}>
                  <div className="relative aspect-video">
                    {video.thumbnail ? (
                      <Image
                        src={urlForImage(video.thumbnail) ? urlForImage(video.thumbnail).url() : '/placeholder.jpg'}
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
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/videos/${video.slug.current}`} className="block">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                  </Link>
                  {video.excerpt && (
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{video.excerpt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Blog Results */}
      {blogs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Articles ({blogs.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition">
                <Link href={`/blog/${blog.slug.current}`}>
                  <div className="relative h-48">
                    {blog.mainImage ? (
                      <Image
                        src={urlForImage(blog.mainImage) ? urlForImage(blog.mainImage).url() : '/placeholder.jpg'}
                        alt={blog.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-6">
                  <Link href={`/blog/${blog.slug.current}`} className="block">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  </Link>
                  {blog.excerpt && (
                    <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Gallery Results */}
      {galleries.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Galleries ({galleries.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleries.map((gallery) => (
              <Link 
                key={gallery._id}
                href={`/gallery/${gallery.slug.current}`}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                {gallery.coverImage ? (
                  <Image
                    src={urlForImage(gallery.coverImage) ? urlForImage(gallery.coverImage).url() : '/placeholder.jpg'}
                    alt={gallery.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-300">
                    <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white">{gallery.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}