import {client, urlForImage} from '@/lib/sanity'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

async function getAboutData() {
  // For now, we'll use placeholder data
  // In production, you would fetch this from Sanity
  return {
    name: 'Chris Brickley',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: "With over a decade of experience working with the best basketball players in the world, Chris Brickley has established himself as one of the most sought-after trainers in the NBA. His innovative techniques and relentless work ethic have helped transform countless players' games.",
          },
        ],
      },
    ],
  }
}

export default async function AboutPage() {
  const author = await getAboutData()

  const achievements = [
    'Worked with over 100 NBA players',
    'Trained 2022 NBA Champions',
    'Featured on ESPN, Bleacher Report, and Slam Magazine',
    'Over 3.5M followers on Instagram',
    'Created the BlackOps Basketball training program',
    'Official skills coach for 20+ All-Stars',
  ]

  const testimonials = [
    {
      quote:
        'Chris Brickley transformed my game. His attention to detail and innovative training methods took my skills to another level.',
      author: 'NBA All-Star',
      image: '/images/testimonial1.jpg',
    },
    {
      quote:
        'The best skills trainer in the game. Period. Brickley&apos;s workouts are like nothing else.',
      author: 'NBA MVP',
      image: '/images/testimonial2.jpg',
    },
    {
      quote:
        'Working with Chris was a game-changer. His knowledge of the game and ability to develop talent is unmatched.',
      author: 'Olympic Gold Medalist',
      image: '/images/testimonial3.jpg',
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {author?.name || 'Chris Brickley'}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Elite Basketball Trainer. Skills Coach to the NBA Elite. Creator of BlackOps
                Basketball.
              </p>

              {author?.bio ? (
                <div className="prose prose-invert prose-lg mb-8">
                  <PortableText value={author.bio} />
                </div>
              ) : (
                <p className="text-gray-400 mb-8">
                  With over a decade of experience working with the best basketball players in the
                  world, Chris Brickley has established himself as one of the most sought-after
                  trainers in the NBA. His innovative techniques and relentless work ethic have
                  helped transform countless players&apos; games.
                </p>
              )}

              <div className="flex gap-4">
                <Link
                  href="/videos"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Watch Training Videos
                </Link>
                <Link
                  href="/contact"
                  className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Contact for Training
                </Link>
              </div>
            </div>
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-black border-t border-b border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-900 rounded-lg">
                <div className="w-10 h-10 mr-4 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Philosophy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Training Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Skill Development</h3>
              <p className="text-gray-400">
                Focus on perfecting fundamental skills while developing advanced techniques that
                separate elite players from the rest.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mental Approach</h3>
              <p className="text-gray-400">
                Building mental toughness and basketball IQ to make better decisions under pressure
                and in critical game situations.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Physical Conditioning</h3>
              <p className="text-gray-400">
                Custom conditioning programs designed to improve athleticism, prevent injuries, and
                maximize performance longevity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-black border-t border-b border-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">What Players Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-8 rounded-lg">
                <div className="relative mb-6">
                  <svg
                    className="w-8 h-8 text-red-600 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-300 mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full mr-4 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">Professional Player</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Take Your Game to the Next Level?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re an aspiring player or a professional athlete, I can help you reach
            your full potential.
          </p>
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-medium transition inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </Layout>
  )
}
