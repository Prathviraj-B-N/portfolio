import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Role",
      name: "role",
      type: "string",
    }),
    defineField({
      title: "Image",
      name: "heroImage",
      type: "image",
      options:{
        hotspot: true
      }
    }),
    defineField({
      title: "BackgroundInformation",
      name: "backgroundInformation",
      type: "string",
    }),
    defineField({
      title: "ProfilePic",
      name: "profilePic",
      type: "image",
      options:{
        hotspot: true
      }
    }),
    defineField({
      title: "PhoneNumber",
      name: "phoneNumber",
      type: "string",
    }),
    defineField({
      title: "Email",
      name: "email",
      type: "string",
    }),
    defineField({
      title: "Address",
      name: "address",
      type: "string",
    }),
    defineField({
      title: "Socials",
      name: "socials",
      type: "array",
      of: [{
        type: "reference",
        to: { type: "social"}
      }]
    }),


  ],
})
