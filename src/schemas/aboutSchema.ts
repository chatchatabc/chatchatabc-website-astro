import { z, defineCollection } from "astro:content";

export const aboutSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});
