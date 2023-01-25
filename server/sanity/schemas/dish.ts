import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of the Dish',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      type: 'string',
      title: 'short description',
      validation: (Rule: any) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price of the dish on USD',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image of the restaurnat',
      type: 'image',
    }),
  ],
})
