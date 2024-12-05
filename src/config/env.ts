const requiredEnvVars = [
  'NEXT_PUBLIC_API_URL',
  'NEXT_PUBLIC_SITE_URL'
] as const

export function validateEnv() {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`)
    }
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  apiUrl: process.env.NEXT_PUBLIC_API_URL!,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL!,
} as const

validateEnv() 