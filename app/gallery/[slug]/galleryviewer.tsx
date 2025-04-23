'use client'

import {urlForImage} from '@/lib/sanity'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import Image from 'next/image'
import {useState} from 'react'

// Define interface for gallery images
interface GalleryImage {
  _key?: string
  asset?: {
    _id: string
    [key: string]: any
  }
  alt?: string
  caption?: string
  [key: string]: any
}

// Define props interface
interface GalleryViewerProps {
  images?: GalleryImage[] | null
}

export default function GalleryViewer({images}: GalleryViewerProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Add data validation
  if (!images || !Array.isArray(images) || images.length === 0) {
    return (
      <div className="text-center text-gray-400 py-8">
        <p>No images available in this gallery.</p>
      </div>
    )
  }

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return

    const newIndex =
      direction === 'next'
        ? (selectedImage + 1) % images.length
        : (selectedImage - 1 + images.length) % images.length

    setSelectedImage(newIndex)
  }

  // Helper function to safely get image URL
  const getImageUrl = (image: GalleryImage): string => {
    const imageBuilder = urlForImage(image?.asset)
    return imageBuilder ? imageBuilder.url() : '/placeholder.jpg'
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={image?.asset?._id || index}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {image?.asset ? (
              <Image
                src={getImageUrl(image)}
                alt={image.alt || `Gallery image ${index + 1}`}
                fill
                className="object-cover hover:opacity-75 transition"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">Image unavailable</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && images[selectedImage]?.asset && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-red-500"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('prev')
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="relative w-full h-[80vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={getImageUrl(images[selectedImage])}
              alt={images[selectedImage].alt || 'Gallery image'}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-red-500"
            onClick={(e) => {
              e.stopPropagation()
              navigateImage('next')
            }}
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {images[selectedImage].caption && (
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-lg">{images[selectedImage].caption}</p>
            </div>
          )}
        </div>
      )}
    </>
  )
}
