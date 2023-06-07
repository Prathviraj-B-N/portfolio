import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({
            name: "projectTitle",
            title: "ProjectTitle",
            type: "string",
          }),
          defineField({
            name: "technology",
            title: "Technology",
            type: "text",
          }),
          defineField({
            name: "projectImage",
            title: "ProjectImage",
            type: "image",
            options: {
                hotspot: true,
            }
          }),
          defineField({
            name: "dateStarted",
            title: "DateStarted",
            type: "date",
          }),
          defineField({
            name: "dateEnded",
            title: "DateEnded",
            type: "date",
          }),
          defineField({
            name: "isOngoing",
            title: "IsOngoing",
            type: "boolean",
          }),
          defineField({
            name: "techStack",
            title: "TechStack",
            type: "array",
            of: [{ 
                    type: "reference",
                    to: { type: "skill"}
                }]
          }),
          defineField({
            name: "points",
            title: "Points",
            type: "array",
            of: [{type: "string"}]
          }),
          defineField({
            name: "description",
            title: "Description",
            type: "text",
          }),
    ]
})