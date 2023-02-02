import { z, defineCollection } from "astro:content";

export const blogSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.string(),
    date: z.string(),
    author_name: z.string(),
    author_link: z.string(),
    author_image: z.string(),
    summary_image: z.string(),
    draft: z.boolean().optional()
  }),
});
