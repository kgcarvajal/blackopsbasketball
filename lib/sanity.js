// lib/sanity.js

import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'mu62rk8v', // Replace with your Sanity project ID
  dataset: 'production', // This should match the dataset you created
  apiVersion: '2021-10-21', // Latest API version
  useCdn: true // Use CDN for faster load times (default to true)
})
