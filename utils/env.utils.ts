export function getRequiredEnvVar(envVar: string): string {
    if(typeof process.env[envVar] === 'undefined') {
        throw new Error(`EnvVar: ${envVar} is not defined`);
    }
    return process.env[envVar];
}