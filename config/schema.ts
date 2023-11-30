import z from 'zod';

export const ConfigurationSchema = z
  .object({
    DISPLAY_NAME: z.string(),
    LOGO_URL: z.string(),
    LOCALSTORAGE_PREFIX: z.string(),
    INTERCOM_APPNAME: z.string(),
    APOLLO_CLIENT_NAME: z.string(),
    APOLLO_CLIENT_OPERATIONPREFIX_SHORTNAME: z.string(),
    GENERAL_HELPARTICLE_URL: z.string(),
  })
  .describe('Configuration as stored on disk');
