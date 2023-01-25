import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule: any) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurnat',
      type: 'image',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of the restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of the restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter the rating from (1-5) stars',
      validation: (Rule: any) =>
        Rule.required().min(1).max(5).error('please enter a value between 1 to 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule: any) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
