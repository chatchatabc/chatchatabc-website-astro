import { miscSchema } from "../schemas/miscSchema";
import { jobSchema } from "../schemas/jobSchema";

export const collections = {
  jobs: jobSchema,
  about: miscSchema,
  misc: miscSchema,
};
