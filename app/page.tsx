import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Layout'

// Placeholder data for the MVP
const featuredVideos = [
  {
    id: '1',
    title: 'Advanced Dribbling Techniques with NBA Stars',
    excerpt: 'Learn the pro-level dribbling moves I teach to NBA superstars.',
    slug: 'advanced-dribbling-techniques',
    thumbnail: '/images/placeholder-video1.jpg',
  },
  {
    id: '2',
    title: 'Shooting Workout: Perfect Your Form',
    excerpt: 'The complete shooting workout to improve accuracy and form.',
    slug: 'shooting-workout',
    thumbnail: '/images/placeholder-video2.jpg',
  },
  {
    id: '3',
    title: 'Off-Season Training with All-Stars',
    excerpt: 'Behind the scenes look at my offseason training with NBA All-Stars.',
    slug: 'offseason-training',
    thumbnail: '/images/placeholder-video3.jpg',
  },
  {
    id: '4',
    title: 'Explosive First Step: Speed Drills',
    excerpt: 'Develop an explosive first step with these specialized drills.',
    slug: 'explosive-first-step',
    thumbnail: '/images/placeholder-video4.jpg',
  },
]

const featuredBlogs = [
  {
    id: '1',
    title: 'Mental Preparation: The Key to Game Day Success',
    excerpt:
      'How the pros mentally prepare for big games and how you can apply the same techniques.',
    slug: 'mental-preparation',
    mainImage: '/images/placeholder-blog1.jpg',
  },
  {
    id: '2',
    title: 'Recovery Strategies Used by NBA Players',
    excerpt: 'The most effective recovery methods I recommend to professional players.',
    slug: 'recovery-strategies',
    mainImage: '/images/placeholder-blog2.jpg',
  },
  {
    id: '3',
    title: 'Building Basketball IQ: Film Study Tips',
    excerpt: 'How to study game film like a pro and elevate your basketball intelligence.',
    slug: 'basketball-iq',
    mainImage: '/images/placeholder-blog3.jpg',
  },
]

const photoGalleries = [
  {
    id: '1',
    title: 'Summer Workout Sessions',
    slug: 'summer-workouts',
    coverImage: '/images/placeholder-gallery1.jpg',
  },
  {
    id: '2',
    title: 'NBA Stars Training Camp',
    slug: 'nba-training-camp',
    coverImage: '/images/placeholder-gallery2.jpg',
  },
  {
    id: '3',
    title: 'BlackOps Basketball 2023',
    slug: 'blackops-2023',
    coverImage: '/images/placeholder-gallery3.jpg',
  },
  {
    id: '4',
    title: 'Behind the Scenes: Pro Workout',
    slug: 'behind-the-scenes',
    coverImage: '/images/placeholder-gallery4.jpg',
  },
  {
    id: '5',
    title: 'NYC Summer League Highlights',
    slug: 'nyc-summer-league',
    coverImage: '/images/placeholder-gallery5.jpg',
  },
  {
    id: '6',
    title: 'The Lab: Training Facility',
    slug: 'the-lab-facility',
    coverImage: '/images/placeholder-gallery6.jpg',
  },
]

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-black">
          {/* Replace with actual image once available */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        </div>

        <div className="container mx-auto h-full flex items-end py-12 px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600 px-3 py-1 mb-4 text-sm font-semibold uppercase tracking-wider">
              Featured
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Elite Basketball Training by Chris Brickley
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Train with the techniques I use with the world's best basketball players. Elevate your
              game with pro-level drills, workouts, and insights.
            </p>
            <Link
              href="/videos/advanced-techniques"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Watch Latest Training
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Content Grid */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Video */}
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="relative h-48">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-800">
                  {/* Placeholder for video thumbnail */}
                </div>
                <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wider">
                  Video
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Pro Handles: Mastering Ball Control</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  Advanced dribbling series with techniques used by NBA All-Stars.
                </p>
                <Link
                  href="/videos/pro-handles"
                  className="text-red-500 hover:text-red-400 font-medium flex items-center"
                >
                  Watch Video
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Featured Blog Post */}
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="relative h-48">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-800">
                  {/* Placeholder for blog image */}
                </div>
                <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wider">
                  Article
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">The Mental Game: Preparing Like a Pro</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  How NBA players mentally prepare for big games and clutch moments.
                </p>
                <Link
                  href="/blog/mental-game"
                  className="text-red-500 hover:text-red-400 font-medium flex items-center"
                >
                  Read Article
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Featured Gallery */}
            <div className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300">
              <div className="relative h-48">
                {/* Replace with actual image */}
                <div className="absolute inset-0 bg-gray-800">
                  {/* Placeholder for gallery image */}
                </div>
                <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 text-xs font-semibold uppercase tracking-wider">
                  Gallery
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">BlackOps Basketball Sessions</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  Photos from exclusive BlackOps Basketball training sessions with NBA stars.
                </p>
                <Link
                  href="/gallery/blackops-sessions"
                  className="text-red-500 hover:text-red-400 font-medium flex items-center"
                >
                  View Gallery
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="py-12 px-4 border-b border-gray-800 bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Videos</h2>
            <Link href="/videos" className="text-red-500 hover:text-red-400 flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                className="bg-gray-900 rounded-lg overflow-hidden group hover:bg-gray-800 transition"
              >
                <Link href={`/videos/${video.slug}`}>
                  <div className="relative aspect-video">
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      {/* Placeholder for video thumbnail */}
                      <svg
                        className="w-16 h-16 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition">
                      <div className="bg-red-600 rounded-full p-3">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/videos/${video.slug}`} className="block">
                    <h3 className="text-lg font-bold mb-2 line-clamp-2">{video.title}</h3>
                  </Link>
                  {video.excerpt && (
                    <p className="text-gray-400 text-sm line-clamp-2">{video.excerpt}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <Link href="/blog" className="text-red-500 hover:text-red-400 flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <div key={blog.id} className="bg-gray-900 rounded-lg overflow-hidden">
                <Link href={`/blog/${blog.slug}`}>
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                      {/* Placeholder for blog image */}
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
                          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
                <div className="p-4">
                  <Link href={`/blog/${blog.slug}`} className="block">
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                  </Link>
                  {blog.excerpt && (
                    <p className="text-gray-400 mb-4 line-clamp-3">{blog.excerpt}</p>
                  )}
                  <div className="flex justify-between items-center">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-red-500 hover:text-red-400 font-medium"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Galleries Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Photo Galleries</h2>
            <Link href="/gallery" className="text-red-500 hover:text-red-400 flex items-center">
              View All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoGalleries.map((gallery) => (
              <Link
                key={gallery.id}
                href={`/gallery/${gallery.slug}`}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group-hover:scale-110 transition duration-300">
                  {/* Placeholder for gallery image */}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-lg font-bold text-white">{gallery.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
