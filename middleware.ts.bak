import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Redirect if there is no locale
  if (!pathnameHasLocale) {
    // Get locale from cookie or default
    const locale = request.cookies.get('locale')?.value || defaultLocale
    
    // Redirect to locale-prefixed path
    const response = NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
    // Set locale cookie
    response.cookies.set('locale', locale)
    return response
  }

  // Extract locale from pathname and set cookie
  const locale = pathname.split('/')[1] as string
  if (locales.includes(locale)) {
    const response = NextResponse.next()
    response.cookies.set('locale', locale)
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|assets|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|pdf|html)).*)',
  ],
}

