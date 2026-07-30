import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import { PaletteQuickAnswer, PaletteUiUsageSection } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  BLOG_ARTICLE_DATE_MODIFIED,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import AeoDirectAnswer from '../components/AeoDirectAnswer';

const LAST_MODIFIED = '2026-07-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/chrome-dark-mode-colors',
  title: 'Chrome Dark Mode Hex Code #202124 — All Colors (Copy)',
  description:
    'Chrome dark mode hex codes: background #202124, toolbar #292A2D, text #E8EAED, blue #8AB4F8. Copy every Chrome dark theme color instantly.',
  keywords: [
    'chrome dark mode colors',
    'chrome dark mode hex code',
    'chrome background color',
    'chrome color palette',
    'chrome UI colors',
    '#202124',
    '#8AB4F8',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-30T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Chrome Dark Mode Hex Code #202124 — All Colors (Copy)',
  'Chrome dark mode hex codes: background #202124, toolbar #292A2D, text #E8EAED, blue #8AB4F8. Copy every Chrome dark theme color instantly.',
  'chrome-dark-mode-colors',
  getBlogArticleDatePublished('chrome-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#202124' },
  { label: 'Toolbar / NTP', value: '#292A2D' },
  { label: 'Surface / card', value: '#3C4043' },
  { label: 'Text primary', value: '#E8EAED' },
  { label: 'Text secondary', value: '#9AA0A6' },
  { label: 'Link blue', value: '#8AB4F8' },
];

const FULL_CHROME_COLORS = [
  { name: 'Main background', hex: '#202124', role: 'NTP and settings canvas' },
  { name: 'Toolbar', hex: '#292A2D', role: 'Top chrome / toolbar' },
  { name: 'Surface / card', hex: '#3C4043', role: 'Cards, menus, elevated panels' },
  { name: 'Hover', hex: '#5F6368', role: 'Hover states, inactive icons' },
  { name: 'Border', hex: '#5F6368', role: 'Dividers and outlines' },
  { name: 'Text primary', hex: '#E8EAED', role: 'Titles, primary labels' },
  { name: 'Text secondary', hex: '#9AA0A6', role: 'Captions, metadata' },
  { name: 'Link / accent blue', hex: '#8AB4F8', role: 'Links, selected tabs, focus' },
  { name: 'Google Blue', hex: '#1A73E8', role: 'Primary buttons (Material)' },
  { name: 'Error red', hex: '#F28B82', role: 'Errors, destructive hints' },
  { name: 'Success green', hex: '#81C995', role: 'Success states' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#202124', colorName: 'Background', rgbCode: 'rgb(32, 33, 36)' },
  { hexCode: '#292A2D', colorName: 'Toolbar', rgbCode: 'rgb(41, 42, 45)' },
  { hexCode: '#3C4043', colorName: 'Surface', rgbCode: 'rgb(60, 64, 67)' },
  { hexCode: '#8AB4F8', colorName: 'Blue', rgbCode: 'rgb(138, 180, 248)' },
  { hexCode: '#E8EAED', colorName: 'Text', rgbCode: 'rgb(232, 234, 237)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Chrome dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chrome dark mode background is commonly #202124. The toolbar sits around #292A2D, elevated surfaces use #3C4043, and primary text is #E8EAED.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Chrome dark mode blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chrome dark link and selection blue is #8AB4F8. Material-style primary buttons often use #1A73E8.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Chrome dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chrome dark uses #202124 background, #292A2D toolbar, #3C4043 surfaces, #E8EAED text, #9AA0A6 secondary text, and #8AB4F8 accent blue.',
      },
    },
  ],
};

function ChromeFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Chrome Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, toolbar, text, and accent blue.</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {FULL_CHROME_COLORS.map((row) => (
              <tr key={row.hex + row.name} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-4 py-3 sm:px-5 w-16">
                  <div className="h-10 w-14 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner" style={{ backgroundColor: row.hex }} aria-hidden />
                </td>
                <td className="px-4 py-3 sm:px-5 font-medium text-gray-900 dark:text-white">{row.name}</td>
                <td className="px-4 py-3 sm:px-5 font-mono text-gray-800 dark:text-gray-200">{row.hex}</td>
                <td className="px-4 py-3 sm:px-5 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ChromeDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="chrome-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#171717] via-[#202124] to-[#8AB4F8] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Chrome Dark Mode Colors: #202124</h1>
            <AeoDirectAnswer
              question="What is the Chrome dark mode hex code?"
              answer="Chrome dark mode uses background #202124, toolbar #292A2D, surfaces #3C4043, text #E8EAED, and link blue #8AB4F8. Copy each hex below for browser and Material-style UI."
              codes={[
                { label: 'Background', value: '#202124' },
                { label: 'Blue', value: '#8AB4F8' },
                { label: 'Toolbar', value: '#292A2D' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy Chrome dark mode hex codes—background <strong className="text-white font-semibold">#202124</strong>, toolbar{' '}
              <strong className="text-white font-semibold">#292A2D</strong>, and accent blue <strong className="text-white font-semibold">#8AB4F8</strong>—for browser chrome and Material dark UIs.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#202124]" role="img" aria-label="Chrome dark mode background 202124" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
              <time dateTime="2026-07-30">Updated July 30, 2026</time>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <PaletteQuickAnswer theme="navy" ariaLabel="Chrome dark mode quick copy" headline="Chrome Dark Mode — Quick Copy" subtext="Backgrounds, blue accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for Chrome Dark Mode?</h2>
                  <p className="mb-6">
                    Chrome&apos;s dark background is commonly <strong className="text-gray-900 dark:text-white">#202124</strong>. The toolbar sits near <strong className="text-gray-900 dark:text-white">#292A2D</strong>; cards and menus use <strong className="text-gray-900 dark:text-white">#3C4043</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#E8EAED</strong> with secondary labels at <strong className="text-gray-900 dark:text-white">#9AA0A6</strong>. Links and selected tabs use <strong className="text-gray-900 dark:text-white">#8AB4F8</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/github-dark-mode-colors">GitHub</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/vscode-dark-mode-colors">VS Code</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <ChromeFullTable />

                <PaletteUiUsageSection title="Why Chrome Dark Mode Works">
                  <p>
                    Chrome follows Material dark principles: cool mid-darks for long browsing sessions, blue reserved for interactive focus, and muted gray for secondary chrome so content stays primary. Browser UIs, settings apps, and Material-inspired dashboards borrow this hierarchy.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold mt-0 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Chrome dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Chrome dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
