const SITE_URL = 'https://themeandcolor.com';

/**
 * @deprecated Every post used to share this single "modified" date, which told search engines
 * that all articles changed on the same day. Each post now has its own date in
 * BLOG_ARTICLE_MODIFIED_DATES below. Still exported so existing imports keep working; it is ignored.
 */
export const BLOG_ARTICLE_DATE_MODIFIED = '2026-08-26';

/**
 * Publish date per post (YYYY-MM-DD). Single source of truth for the blog index, homepage cards
 * and Article JSON-LD. The site's first blog post went live on 2026-01-20, so no date is earlier.
 * Posts missing here have no reliable date and are published without one rather than a made-up one.
 * @type {Record<string, string>}
 */
export const BLOG_ARTICLE_PUBLISHED_DATES = {
  '10-color-trends-for-2025': '2026-01-20',
  '60-30-10-color-rule': '2026-05-13',
  'accessibility-color-contrast-checker': '2026-05-21',
  'accessible-dark-mode-color-palette': '2026-04-01',
  'app-dark-mode-colors': '2026-11-09',
  'best-neutral-colors-pair-with-brand': '2026-03-15',
  'burgundy-color-palette': '2026-05-30',
  'burgundy-hex-code': '2026-05-21',
  'c4b5fd-color': '2026-06-01',
  'charcoal-hex-code': '2026-06-11',
  'chrome-dark-mode-colors': '2026-07-30',
  'color-palette-ideas-for-small-business': '2026-02-08',
  'dark-mode-color-palette': '2026-05-30',
  'discord-dark-mode-colors': '2026-06-05',
  'dusty-rose-hex-code': '2026-06-11',
  'ecommerce-color-palettes-product-first-vs-brand-first': '2026-03-19',
  'figma-dark-mode-colors': '2026-07-23',
  'forest-green-hex-code': '2026-04-11',
  'github-dark-mode-colors': '2026-07-23',
  'how-to-check-color-contrast-accessibility': '2026-03-15',
  'instagram-dark-mode-colors': '2026-07-02',
  'ios-dark-mode-colors': '2026-08-06',
  'lavender-hex-code': '2026-06-05',
  'linkedin-dark-mode-colors': '2026-08-15',
  'mauve-color': '2026-06-11',
  'navy-blue-color-palette': '2026-05-21',
  'navy-blue-hex-code': '2026-05-21',
  'notion-dark-mode-colors': '2026-07-02',
  'ocean-breeze-hex-code': '2026-04-17',
  'olive-green-hex-code': '2026-05-21',
  'pink-purple-color-name': '2026-06-05',
  'purple-dream': '2026-02-10',
  'reddit-dark-mode-colors': '2026-08-06',
  'sage-green-hex-code': '2026-05-11',
  'slack-dark-mode-colors': '2026-07-09',
  'spotify-dark-mode-colors': '2026-07-02',
  'sunset-color-palette': '2026-06-01',
  'telegram-dark-mode-colors': '2026-07-30',
  'terracotta-color-palette': '2026-06-01',
  'terracotta-hex-code': '2026-05-12',
  'twitter-dark-mode-colors': '2026-08-15',
  'vscode-dark-mode-colors': '2026-07-16',
  'wcag-accessible-buttons-and-links': '2026-04-02',
  'what-color-does-blue-and-yellow-make': '2026-05-21',
  'what-color-does-pink-and-purple-make': '2026-06-05',
  'what-color-does-red-and-white-make': '2026-05-21',
  'what-color-does-red-and-yellow-make': '2026-05-21',
  'whatsapp-dark-mode-colors': '2026-07-09',
  'yellow-green-hex-code': '2026-05-30',
  'youtube-dark-mode-colors': '2026-07-16',
};

/**
 * Last meaningful content update per post (YYYY-MM-DD). Matches the "Updated" date shown on the page.
 * Bump a post's date here when you change its content, not for metadata or styling tweaks.
 * @type {Record<string, string>}
 */
export const BLOG_ARTICLE_MODIFIED_DATES = {
  '10-color-trends-for-2025': '2026-01-20',
  '60-30-10-color-rule': '2026-05-13',
  'accessibility-color-contrast-checker': '2026-06-01',
  'accessible-dark-mode-color-palette': '2026-04-01',
  'app-dark-mode-colors': '2026-11-09',
  'best-neutral-colors-pair-with-brand': '2026-03-15',
  'burgundy-color-palette': '2026-05-30',
  'burgundy-hex-code': '2026-11-09',
  'c4b5fd-color': '2026-07-30',
  'charcoal-hex-code': '2026-06-11',
  'chrome-dark-mode-colors': '2026-07-30',
  'color-palette-ideas-for-small-business': '2026-02-08',
  'dark-mode-color-palette': '2026-05-30',
  'discord-dark-mode-colors': '2026-11-09',
  'dusty-rose-hex-code': '2026-06-11',
  'ecommerce-color-palettes-product-first-vs-brand-first': '2026-03-19',
  'figma-dark-mode-colors': '2026-07-23',
  'forest-green-hex-code': '2026-10-24',
  'github-dark-mode-colors': '2026-07-23',
  'how-to-check-color-contrast-accessibility': '2026-03-15',
  'instagram-dark-mode-colors': '2026-11-09',
  'ios-dark-mode-colors': '2026-08-06',
  'lavender-hex-code': '2026-06-11',
  'linkedin-dark-mode-colors': '2026-08-15',
  'mauve-color': '2026-06-26',
  'navy-blue-color-palette': '2026-06-11',
  'navy-blue-hex-code': '2026-11-09',
  'notion-dark-mode-colors': '2026-07-02',
  'ocean-breeze-hex-code': '2026-04-17',
  'olive-green-hex-code': '2026-06-11',
  'pink-purple-color-name': '2026-11-09',
  'purple-dream': '2026-02-10',
  'reddit-dark-mode-colors': '2026-08-06',
  'sage-green-hex-code': '2026-06-26',
  'slack-dark-mode-colors': '2026-07-09',
  'spotify-dark-mode-colors': '2026-07-02',
  'sunset-color-palette': '2026-06-26',
  'telegram-dark-mode-colors': '2026-07-30',
  'terracotta-color-palette': '2026-06-01',
  'terracotta-hex-code': '2026-11-09',
  'twitter-dark-mode-colors': '2026-08-15',
  'vscode-dark-mode-colors': '2026-07-16',
  'wcag-accessible-buttons-and-links': '2026-04-02',
  'what-color-does-blue-and-yellow-make': '2026-05-21',
  'what-color-does-pink-and-purple-make': '2026-06-05',
  'what-color-does-red-and-white-make': '2026-05-21',
  'what-color-does-red-and-yellow-make': '2026-05-21',
  'whatsapp-dark-mode-colors': '2026-11-09',
  'yellow-green-hex-code': '2026-05-30',
  'youtube-dark-mode-colors': '2026-11-09',
};

function cleanSlug(slug) {
  return slug.replace(/^\/blog\//, '').replace(/^\//, '');
}

/**
 * @param {string} slug - Blog post slug (e.g. "forest-green-hex-code")
 * @returns {string | undefined} ISO date string YYYY-MM-DD, or undefined when unknown
 */
export function getBlogArticleDatePublished(slug) {
  return BLOG_ARTICLE_PUBLISHED_DATES[cleanSlug(slug)];
}

/**
 * @param {string} slug
 * @returns {string | undefined} ISO date string YYYY-MM-DD, or undefined when unknown
 */
export function getBlogArticleDateModified(slug) {
  const clean = cleanSlug(slug);
  return BLOG_ARTICLE_MODIFIED_DATES[clean] ?? BLOG_ARTICLE_PUBLISHED_DATES[clean];
}

/**
 * Build JSON-LD Article schema for blog posts.
 * Dates always come from the per-post maps above; the legacy 5th argument is ignored.
 * @param {string} title - Article headline (without site suffix)
 * @param {string} description
 * @param {string} slug - Blog post slug or /blog/slug path
 * @param {string} [datePublished] - YYYY-MM-DD (falls back to the map)
 */
export function getBlogArticleSchema(title, description, slug, datePublished) {
  const slugClean = cleanSlug(slug);
  const published = datePublished ?? getBlogArticleDatePublished(slugClean);
  const modified = getBlogArticleDateModified(slugClean) ?? published;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}/blog/${slugClean}`,
    ...(published ? { datePublished: published } : {}),
    ...(modified ? { dateModified: modified } : {}),
    author: {
      '@type': 'Organization',
      name: 'Theme & Color',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Theme & Color',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-default.png`,
      },
    },
  };
}
