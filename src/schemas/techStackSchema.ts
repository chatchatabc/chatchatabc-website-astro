import { z, defineCollection } from "astro:content";

export const techStackSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    id: z.string(),
    order: z.number().nullish(),
  }),
});
