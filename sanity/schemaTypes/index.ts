import {type SchemaTypeDefinition} from 'sanity'
import {authorType} from './authorType'
import {blockContentType} from './blockContentType'
import blogPost from './blogPost'
import {categoryType} from './categoryType'
import homepage from './homepage'
import photoGallery from './photoGallery'
import {postType} from './postType'
import siteSettings from './siteSettings'
// Import new schema types
import videoPost from './videoPost'

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
    siteSettings,
  ],
}
