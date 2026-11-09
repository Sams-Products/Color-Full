import { MetadataRoute } from 'next';
import { getBlogPostPathsForSitemap } from '../lib/blogSitemapSlugs';
import { getBlogArticleDateModified } from '../lib/getBlogArticleSchema';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://themeandcolor.com';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/tools',
    '/tools/color-mixer',
    '/tools/palette-generator',
    '/tools/contrast-checker',
    '/tools/color-name-finder',
    '/tools/tint-shade-generator',
    '/tools/color-palette-preview',
    '/tools/color-palette-preview/dashboard',
    '/tools/color-palette-preview/landing-page',
    '/tools/color-palette-preview/mobile-app',
    '/blog',
  ];

  const blogPosts = getBlogPostPathsForSitemap();
  const toolHighPriority = new Set([
    '/tools/color-name-finder',
    '/tools/tint-shade-generator',
    '/tools/color-palette-preview',
    '/tools/color-palette-preview/dashboard',
    '/tools/color-palette-preview/landing-page',
    '/tools/color-palette-preview/mobile-app',
  ]);

  // No lastModified on static pages: claiming "changed today" on every build is not true and gets ignored.
  const staticUrls = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : toolHighPriority.has(path) ? 0.9 : 0.8,
  }));

  const blogUrls = blogPosts.map((path) => {
    const modified = getBlogArticleDateModified(path);
    return {
      url: `${baseUrl}${path}`,
      ...(modified ? { lastModified: new Date(`${modified}T00:00:00.000Z`) } : {}),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    };
  });

  return [...staticUrls, ...blogUrls];
}
