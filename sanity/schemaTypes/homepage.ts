export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'featuredHero',
      title: 'Featured Hero',
      type: 'reference',
      to: [{type: 'videoPost'}, {type: 'blogPost'}, {type: 'photoGallery'}],
      description: 'Main featured content for the hero section',
    },
    {
      name: 'featuredContent',
      title: 'Featured Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'videoPost'}, {type: 'blogPost'}, {type: 'photoGallery'}],
        },
      ],
      description: 'Content to feature on the homepage below the hero',
      validation: (Rule) => Rule.max(6),
    },
    {
      name: 'featuredVideosTitle',
      title: 'Featured Videos Section Title',
      type: 'string',
      initialValue: 'Featured Videos',
    },
    {
      name: 'featuredBlogsTitle',
      title: 'Featured Blogs Section Title',
      type: 'string',
      initialValue: 'Latest Articles',
    },
    {
      name: 'featuredGalleriesTitle',
      title: 'Featured Galleries Section Title',
      type: 'string',
      initialValue: 'Photo Galleries',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
}
