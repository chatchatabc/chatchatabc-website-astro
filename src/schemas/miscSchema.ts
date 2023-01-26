import { z, defineCollection } from "astro:content";

export const miscSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    id: z.string(),
  }),
});
