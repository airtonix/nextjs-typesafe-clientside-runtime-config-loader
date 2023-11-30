import path from 'path';
import write from 'write';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { z } from 'zod';
const StoredConfgurationBaseSchema = z.object({
    "$schema": z.literal("_generated/config-schema.json")
});
export async function generate(schema, destination) {
    if (!schema) {
        throw new Error('missing schema');
    }
    const output = zodToJsonSchema(StoredConfgurationBaseSchema.merge(schema.partial()));
    const outputString = JSON.stringify(output, null, 2);
    const pathname = path.join(destination, '_generated', 'config-schema.json');
    await write(pathname, outputString);
}
