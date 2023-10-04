import { z, defineCollection } from "astro:content";

const JobSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    imageUrl: z.string(),
  }),
});

const MiscSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

const BlogSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.string(),
    date: z.date(),
    author_name: z.string(),
    author_link: z.string(),
    author_image: z.string(),
    summary_image: z.string(),
    draft: z.boolean().optional(),
  }),
});

const TechStackSchema = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    icons: z.array(z.string()),
  }),
});

export const collections = {
  services: JobSchema,
  about: MiscSchema,
  misc: MiscSchema,
  blogs: BlogSchema,
  careers: JobSchema,
  technologies: TechStackSchema,
};
