import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration (using a simple in-memory store for demo)
const rateLimit = new Map<string, number[]>()

export async function middleware(request: NextRequest) {
  // Basic security headers
  const headers = new Headers(request.headers)
  
  // Security headers
  headers.set('X-DNS-Prefetch-Control', 'on')
  headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  headers.set('X-Frame-Options', 'SAMEORIGIN')
  headers.set('X-Content-Type-Options', 'nosniff')
  headers.set('Referrer-Policy', 'origin-when-cross-origin')
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Cache control for static assets
  const url = request.nextUrl.pathname
  if (url.match(/\.(css|js|jpg|png|gif|ico)$/)) {
    headers.set('Cache-Control', 'public, max-age=86400')
  }

  // Basic rate limiting
  const clientId = request.headers.get('x-forwarded-for') ?? 
    request.headers.get('x-real-ip') ?? 
    'unknown'
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 100

  const userRequests = rateLimit.get(clientId) ?? []
  const recentRequests = userRequests.filter(time => time > now - windowMs)
  
  if (recentRequests.length >= maxRequests) {
    return new NextResponse('Too Many Requests', { status: 429 })
  }
  
  rateLimit.set(clientId, [...recentRequests, now])

  // Return response with new headers
  const response = NextResponse.next({
    request: {
      headers,
    },
  })

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 