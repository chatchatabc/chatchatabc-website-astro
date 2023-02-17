import { miscSchema } from "../schemas/miscSchema";
import { jobSchema } from "../schemas/jobSchema";
import { blogSchema } from "../schemas/blogSchema";
import { techStackSchema } from "../schemas/techStackSchema";

export const collections = {
  services: jobSchema,
  about: miscSchema,
  misc: miscSchema,
  blogs: blogSchema,
  careers: jobSchema,
  technologies: techStackSchema,
};
