// Query TypeMap
import '@sanity/client'

/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type SiteSettings = {
  _id: string
  _type: 'siteSettings'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  description?: string
  logo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  mainNavigation?: Array<{
    title?: string
    link?: string
    _key: string
  }>
  socialLinks?: {
    instagram?: string
    twitter?: string
    youtube?: string
    facebook?: string
    tiktok?: string
  }
  footerText?: string
}

export type Homepage = {
  _id: string
  _type: 'homepage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  featuredHero?:
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'videoPost'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'blogPost'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'photoGallery'
      }
  featuredContent?: Array<
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'videoPost'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'blogPost'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'photoGallery'
      }
  >
  featuredVideosTitle?: string
  featuredBlogsTitle?: string
  featuredGalleriesTitle?: string
}

export type PhotoGallery = {
  _id: string
  _type: 'photoGallery'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
  images?: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    caption?: string
    alt?: string
    _type: 'image'
    _key: string
  }>
  coverImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  publishedAt?: string
  featured?: boolean
}

export type BlogPost = {
  _id: string
  _type: 'blogPost'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  excerpt?: string
  author?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'author'
  }
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  publishedAt?: string
  featured?: boolean
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
  >
}

export type VideoPost = {
  _id: string
  _type: 'videoPost'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  featuredVideo?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.fileAsset'
    }
    media?: unknown
    _type: 'file'
  }
  videoUrl?: string
  thumbnail?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  excerpt?: string
  author?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'author'
  }
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  publishedAt?: string
  featured?: boolean
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'blockquote'
        listItem?: 'bullet' | 'number'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        _type: 'image'
        _key: string
      }
  >
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type Post = {
  _id: string
  _type: 'post'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  author?: {
    _ref: string
    _type: 'reference'
    _weak?: boolean
    [internalGroqTypeReferenceTo]?: 'author'
  }
  mainImage?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    alt?: string
    _type: 'image'
  }
  categories?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'category'
  }>
  publishedAt?: string
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>
          text?: string
          _type: 'span'
          _key: string
        }>
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
        listItem?: 'bullet'
        markDefs?: Array<{
          href?: string
          _type: 'link'
          _key: string
        }>
        level?: number
        _type: 'block'
        _key: string
      }
    | {
        asset?: {
          _ref: string
          _type: 'reference'
          _weak?: boolean
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
        }
        media?: unknown
        hotspot?: SanityImageHotspot
        crop?: SanityImageCrop
        alt?: string
        _type: 'image'
        _key: string
      }
  >
}

export type Author = {
  _id: string
  _type: 'author'
  _createdAt: string
  _updatedAt: string
  _rev: string
  name?: string
  slug?: Slug
  image?: {
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
    }
    media?: unknown
    hotspot?: SanityImageHotspot
    crop?: SanityImageCrop
    _type: 'image'
  }
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: never
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type Category = {
  _id: string
  _type: 'category'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  slug?: Slug
  description?: string
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>
        text?: string
        _type: 'span'
        _key: string
      }>
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
      listItem?: 'bullet'
      markDefs?: Array<{
        href?: string
        _type: 'link'
        _key: string
      }>
      level?: number
      _type: 'block'
      _key: string
    }
  | {
      asset?: {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
      }
      media?: unknown
      hotspot?: SanityImageHotspot
      crop?: SanityImageCrop
      alt?: string
      _type: 'image'
      _key: string
    }
>

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | Geopoint
  | SiteSettings
  | Homepage
  | PhotoGallery
  | BlogPost
  | VideoPost
  | SanityFileAsset
  | Post
  | Author
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata
export declare const internalGroqTypeReferenceTo: unique symbol
// Source: ./sanity/lib/queries.ts
// Variable: homePageQuery
// Query: *[_type == "home"][0]{    _id,    _type,    overview,    showcaseProjects[]{      _key,      ...@->{        _id,        _type,        coverImage,        overview,        "slug": slug.current,        tags,        title,      }    },    title,  }
export type HomePageQueryResult = null
// Variable: pagesBySlugQuery
// Query: *[_type == "page" && slug.current == $slug][0] {    _id,    _type,    body,    overview,    title,    "slug": slug.current,  }
export type PagesBySlugQueryResult = null
// Variable: projectBySlugQuery
// Query: *[_type == "project" && slug.current == $slug][0] {    _id,    _type,    client,    coverImage,    description,    duration,    overview,    site,    "slug": slug.current,    tags,    title,  }
export type ProjectBySlugQueryResult = null
// Variable: settingsQuery
// Query: *[_type == "settings"][0]{    _id,    _type,    footer,    menuItems[]{      _key,      ...@->{        _type,        "slug": slug.current,        title      }    },    ogImage,  }
export type SettingsQueryResult = null
// Variable: slugsByTypeQuery
// Query: *[_type == $type && defined(slug.current)]{"slug": slug.current}
export type SlugsByTypeQueryResult = Array<{
  slug: string | null
}>

declare module '@sanity/client' {
  interface SanityQueries {
    '\n  *[_type == "home"][0]{\n    _id,\n    _type,\n    overview,\n    showcaseProjects[]{\n      _key,\n      ...@->{\n        _id,\n        _type,\n        coverImage,\n        overview,\n        "slug": slug.current,\n        tags,\n        title,\n      }\n    },\n    title,\n  }\n': HomePageQueryResult
    '\n  *[_type == "page" && slug.current == $slug][0] {\n    _id,\n    _type,\n    body,\n    overview,\n    title,\n    "slug": slug.current,\n  }\n': PagesBySlugQueryResult
    '\n  *[_type == "project" && slug.current == $slug][0] {\n    _id,\n    _type,\n    client,\n    coverImage,\n    description,\n    duration,\n    overview,\n    site,\n    "slug": slug.current,\n    tags,\n    title,\n  }\n': ProjectBySlugQueryResult
    '\n  *[_type == "settings"][0]{\n    _id,\n    _type,\n    footer,\n    menuItems[]{\n      _key,\n      ...@->{\n        _type,\n        "slug": slug.current,\n        title\n      }\n    },\n    ogImage,\n  }\n': SettingsQueryResult
    '\n  *[_type == $type && defined(slug.current)]{"slug": slug.current}\n': SlugsByTypeQueryResult
  }
}
