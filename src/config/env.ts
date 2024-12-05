const requiredEnvVars = [
  'NEXT_PUBLIC_API_URL',
  // Add other required env vars
]

export function validateEnv() {
  for (const envVar of requiredEnvVars) {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`)
    }
  }
}

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  // Add other env vars here
} as const

validateEnv() 