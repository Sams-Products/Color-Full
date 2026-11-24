import { NextResponse } from 'next/server';

/** Apex host for production (matches app/layout.js SITE_URL). */
const CANONICAL_HOST = 'themeandcolor.com';

/**
 * Pages removed during the AdSense "low-value content" cleanup (Nov 2026).
 * They had no close equivalent to redirect to, so they answer 410 Gone, which tells Google
 * to drop them from the index faster than a 404. Pages that do have a close equivalent are
 * 301-redirected in next.config.mjs instead.
 * The source files for these routes can be deleted; this list keeps the URLs gone either way.
 */
const GONE_PATHS = new Set([
  '/blog/ocean-breeze',
  '/blog/ocean-breeze-hex-code',
  '/blog/10-color-trends-for-2025',
  '/use-cases/colors-for-automotive-design',
  '/use-cases/colors-for-fashion-design',
  '/use-cases/colors-for-industrial-products',
  '/use-cases/colors-for-ui-and-web-design',
  '/palettes/black-and-gold',
  '/palettes/luxury-automotive-color-palettes',
]);

const GONE_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Page removed | Theme &amp; Color</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="font-family:system-ui,sans-serif;max-width:560px;margin:80px auto;padding:0 20px;color:#111827"><h1>This page has been removed</h1><p>We retired this article while tidying up the site. You can still browse every current guide on the <a href="/blog">blog</a> or use the free <a href="/tools">color tools</a>.</p></body></html>`;

/**
 * - Removed pages → 410 Gone
 * Production URL normalization (Vercel: uses `host` + `x-forwarded-proto`):
 * - HTTP → HTTPS (301)
 * - www → apex (301)
 * - `http://www…` → one 301 to `https://` apex (path + query preserved)
 * Host normalization is skipped in development so localhost works over HTTP.
 */
export function middleware(request) {
  const path = request.nextUrl.pathname.replace(/\/+$/, '') || '/';
  if (GONE_PATHS.has(path)) {
    return new NextResponse(GONE_HTML, {
      status: 410,
      headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex' },
    });
  }

  if (process.env.NODE_ENV === 'development') {
    return NextResponse.next();
  }

  const host = request.headers.get('host')?.split(':')[0]?.toLowerCase() ?? '';
  const proto = request.headers.get('x-forwarded-proto');
  const isInsecure = proto === 'http';
  const isWwwCanonical = host === `www.${CANONICAL_HOST}`;

  if (!isInsecure && !isWwwCanonical) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  if (isInsecure) {
    url.protocol = 'https:';
  }
  if (isWwwCanonical) {
    url.hostname = CANONICAL_HOST;
  }
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico)$).*)',
};
