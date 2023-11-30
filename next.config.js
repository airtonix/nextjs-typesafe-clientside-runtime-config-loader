const compose = require('next-compose-plugins');
const withZodConfig = require('./pkgs/next-config/withZodConfig');
const z = require('zod').z

/** @type {import('next').NextConfig} */
const BaseConfig = {};

module.exports = compose([withZodConfig(
    z.object({
      DISPLAY_NAME: z.string(),
      LOGO_URL: z.string(),
      LOCALSTORAGE_PREFIX: z.string(),
      INTERCOM_APPNAME: z.string(),
      APOLLO_CLIENT_NAME: z.string(),
      APOLLO_CLIENT_OPERATIONPREFIX_SHORTNAME: z.string(),
      GENERAL_HELPARTICLE_URL: z.string(),
    })
    .describe('Configuration as stored on disk')
)], BaseConfig);
