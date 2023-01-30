import { z, defineCollection } from "astro:content";

export const jobSchema = defineCollection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
    imageUrl: z.string(),
  }),
});
