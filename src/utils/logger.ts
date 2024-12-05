const logger = {
  info: (message: string) => {
    console.log(`[INFO] ${message}`)
  },
  error: (message: string, error?: Error) => {
    console.error(`[ERROR] ${message}`, error)
  },
  warn: (message: string) => {
    console.warn(`[WARN] ${message}`)
  }
}

export default logger 