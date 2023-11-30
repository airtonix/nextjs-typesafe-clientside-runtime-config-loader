//TODO:
// 1. typesafe client 
// 2. break down an object into a deep object by splitting its key names by underscore
// 2. dot notated access
export async function client<TSchema> (envname: string) {
    const config = await fetch(`./public/config.${envname}.json`)
    const overrides = await fetch(`./public/config.overrides.json`)
    return {}
}