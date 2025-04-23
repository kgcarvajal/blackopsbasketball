import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function ContactPage() {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-gray-400 mb-12">
            Interested in training opportunities or business inquiries? Get in touch below.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="training">Training Inquiry</option>
                <option value="business">Business Opportunity</option>
                <option value="media">Media Request</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Contact Information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Business Inquiries</h3>
              <p className="text-gray-400 mb-2">For business and sponsorship opportunities</p>
              <a
                href="mailto:business@chrisbrickley.com"
                className="text-red-500 hover:text-red-400"
              >
                business@chrisbrickley.com
              </a>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Media & Press</h3>
              <p className="text-gray-400 mb-2">For media requests and interviews</p>
              <a href="mailto:media@chrisbrickley.com" className="text-red-500 hover:text-red-400">
                media@chrisbrickley.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
