import { z, defineCollection } from "astro:content";

export const jobSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    imageUrl: z.string(),
  }),
});
