import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import { client } from '@/lib/sanity'
import { urlForImage } from '@/lib/sanity'
import { allBlogPostsQuery } from '@/lib/queries'

async function getBlogPosts() {
  return await client.fetch(allBlogPostsQuery)
}

export default async function BlogPage() {
  const blogs = await getBlogPosts()

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-2">Basketball Insights</h1>
        <p className="text-xl text-gray-400 mb-12">Expert analysis and training tips from Chris Brickley</p>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition">
              <Link href={`/blog/${blog.slug.current}`}>
                <div className="relative h-48">
                  {blog.mainImage ? (
                    <Image
                      src={urlForImage(blog.mainImage).url()}
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
                <div className="flex justify-between items-center">
                  <Link 
                    href={`/blog/${blog.slug.current}`} 
                    className="text-red-500 hover:text-red-400 font-medium"
                  >
                    Read More
                  </Link>
                  {blog.publishedAt && (
                    <span className="text-gray-500 text-sm">
                      {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}