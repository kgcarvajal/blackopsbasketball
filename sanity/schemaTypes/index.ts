import {type SchemaTypeDefinition} from 'sanity'
import {authorType} from './authorType'
import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'

// Import new schema types
import videoPost from './videoPost'
import blogPost from './blogPost'
import photoGallery from './photoGallery'
import homepage from './homepage'
import siteSettings from './siteSettings'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [
    // Existing types
    blockContentType, 
    categoryType, 
    postType, 
    authorType,
    
    // New types
    videoPost,
    blogPost,
    photoGallery,
    homepage,
    siteSettings
  ],
}