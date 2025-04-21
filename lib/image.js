import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from './sanity'

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source) => {
  if (!source) {
    return null
  }

  return imageBuilder.image(source)
}