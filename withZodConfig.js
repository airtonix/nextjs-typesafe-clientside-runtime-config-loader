
/** @param config {import('next').NextConfig} */
module.exports = async function (config) {
  const importer = await import('ts-import');
  const schema = await importer.load('./config/schema.ts');
  const generator = await importer.load('./pkgs/next-config/generate.ts');

  generator.generate(schema.ConfigurationSchema, process.cwd())
  return config;
};
