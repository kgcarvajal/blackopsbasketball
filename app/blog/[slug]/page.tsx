import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Placeholder data - in production, this would fetch from Sanity
  const blog = {
    title: 'Mental Preparation: The Key to Game Day Success',
    content: `
      <p>Mental preparation is just as crucial as physical training when it comes to game day success. NBA players spend countless hours developing mental routines that help them perform under pressure.</p>
      
      <h2>The Visualization Technique</h2>
      <p>One of the most effective mental preparation techniques is visualization. Before every game, I have my players visualize themselves successfully executing plays, making shots, and winning key moments.</p>
      
      <h2>Pre-Game Routine</h2>
      <p>Establishing a consistent pre-game routine helps players enter the right mental state. This might include listening to specific music, reviewing game plans, or practicing breathing exercises.</p>
      
      <h2>Dealing with Pressure</h2>
      <p>Pressure is inevitable in basketball, especially at the elite level. Teaching players how to embrace pressure rather than fear it is essential for peak performance.</p>
    `,
    publishedAt: '2024-03-15',
    categories: ['Mental Game'],
    author: {
      name: 'Chris Brickley',
      image: '/images/chris-brickley.jpg'
    }
  }

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="mb-6">
          <Link href="/blog" className="text-gray-400 hover:text-white flex items-center w-fit">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
        
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex gap-2 mb-4">
              {blog.categories.map((category, index) => (
                <span key={index} className="bg-gray-800 text-white px-3 py-1 text-sm font-bold rounded">
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
              <div>
                <p className="font-bold">{blog.author.name}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </header>
          
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          {/* Share buttons - placeholder */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4">Share this article</p>
            <div className="flex gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  )
}