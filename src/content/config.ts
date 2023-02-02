import { miscSchema } from "../schemas/miscSchema";
import { jobSchema } from "../schemas/jobSchema";
import { blogSchema } from "../schemas/blogSchema";
import { techStackSchema } from "../schemas/techStackSchema";

export const collections = {
  jobs: jobSchema,
  about: miscSchema,
  misc: miscSchema,
  blogs: blogSchema,
  "tech-stack": techStackSchema,
};
