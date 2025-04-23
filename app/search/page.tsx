import {urlForImage} from '@/lib/image' // Updated import path
import {searchQuery} from '@/lib/queries'
import {client} from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import {Suspense} from 'react'
import Layout from '../components/Layout'
import SearchForm from '../components/searchform'
import SearchResults from './searchresults'

// Define types for the search params
type SearchParams = {
  q?: string
}

// Updated search page component with TypeScript typing
export default function SearchPage({searchParams}: {searchParams: SearchParams}) {
  const searchTerm = searchParams.q || ''

  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6">Search</h1>

        <div className="mb-12">
          <SearchForm initialQuery={searchTerm} />
        </div>

        {searchTerm ? (
          <Suspense fallback={<div className="text-center py-8">Loading results...</div>}>
            <SearchResults searchTerm={searchTerm} />
          </Suspense>
        ) : (
          <div className="text-center text-gray-400 py-16">
            <p className="mb-4">Enter a search term to find videos, articles, and galleries.</p>
          </div>
        )}
      </div>
    </Layout>
  )
}
