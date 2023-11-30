
/**
 * @param schema {import('z').ZodObject}
 **/
module.exports = async function (schema) {
  const importer = await import('ts-import');
  const generator = await importer.load('./pkgs/next-config/generate.ts');
  generator.generate(schema, process.cwd())

  /**
   * noop on config.
   * @param config {import('next').NextConfig}
   **/
return (config) => config;
};
