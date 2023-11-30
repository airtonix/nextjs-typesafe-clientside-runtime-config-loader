import z from 'zod';

export const GeneratedConfigurationSchema = z
  .object({
    VERSION: z.string(),
    ENV: z.string(),
    GIT_HASH: z.string(),
    GIT_COMMIT: z.string(),
    GIT_DATE: z.string(),
    GIT_TAG: z.string(),
  })
  .describe('Configuration as generated at build time');
