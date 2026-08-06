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

const LAST_MODIFIED = '2026-08-06T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/reddit-dark-mode-colors',
  title: 'Reddit Dark Mode Hex Code #0B1416 — All Colors (Copy)',
  description:
    'Reddit dark mode hex codes: background #0B1416, card #1A1A1B, elevated #272729, orange #FF4500, text #D7DADC. Copy every Reddit UI color.',
  keywords: [
    'reddit dark mode colors',
    'reddit dark mode hex code',
    'reddit background color',
    'reddit orange hex',
    'reddit color palette',
    '#0B1416',
    '#FF4500',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-08-06T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Reddit Dark Mode Hex Code #0B1416 — All Colors (Copy)',
  'Reddit dark mode hex codes: background #0B1416, card #1A1A1B, elevated #272729, orange #FF4500, text #D7DADC. Copy every Reddit UI color.',
  'reddit-dark-mode-colors',
  getBlogArticleDatePublished('reddit-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#0B1416' },
  { label: 'Card / post', value: '#1A1A1B' },
  { label: 'Elevated / menu', value: '#272729' },
  { label: 'Text primary', value: '#D7DADC' },
  { label: 'Text muted', value: '#818384' },
  { label: 'Reddit orange', value: '#FF4500' },
];

const FULL_REDDIT_COLORS = [
  { name: 'Main background', hex: '#0B1416', role: 'App canvas (new Reddit dark)' },
  { name: 'Card / post surface', hex: '#1A1A1B', role: 'Posts, sidebars, panels' },
  { name: 'Elevated surface', hex: '#272729', role: 'Menus, hover cards' },
  { name: 'Border / divider', hex: '#343536', role: 'Separators between posts' },
  { name: 'Text primary', hex: '#D7DADC', role: 'Post titles, body' },
  { name: 'Text muted', hex: '#818384', role: 'Metadata, timestamps' },
  { name: 'Reddit orange', hex: '#FF4500', role: 'Brand accent, upvote active' },
  { name: 'Upvote orange', hex: '#FF4500', role: 'Active upvote' },
  { name: 'Downvote blue', hex: '#7193FF', role: 'Active downvote' },
  { name: 'Link blue', hex: '#4FBCFF', role: 'Links in posts' },
  { name: 'NSFW pink', hex: '#FF66AC', role: 'NSFW / spoiler accents' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#0B1416', colorName: 'Background', rgbCode: 'rgb(11, 20, 22)' },
  { hexCode: '#1A1A1B', colorName: 'Card', rgbCode: 'rgb(26, 26, 27)' },
  { hexCode: '#272729', colorName: 'Elevated', rgbCode: 'rgb(39, 39, 41)' },
  { hexCode: '#FF4500', colorName: 'Orange', rgbCode: 'rgb(255, 69, 0)' },
  { hexCode: '#D7DADC', colorName: 'Text', rgbCode: 'rgb(215, 218, 220)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Reddit dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reddit dark mode background is commonly #0B1416. Post cards use #1A1A1B, elevated menus use #272729, and primary text is #D7DADC.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Reddit orange hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reddit brand orange (upvote/accent) is #FF4500, rgb(255, 69, 0). Downvote blue is commonly #7193FF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Reddit dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Reddit dark uses #0B1416 background, #1A1A1B cards, #272729 elevated surfaces, #D7DADC text, #818384 muted text, and #FF4500 orange accent.',
      },
    },
  ],
};

function RedditFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Reddit Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, cards, orange accent, and vote colors.</p>
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
            {FULL_REDDIT_COLORS.map((row) => (
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

export default function RedditDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="reddit-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#05090A] via-[#0B1416] to-[#FF4500] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-orange-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Reddit Dark Mode Colors: #0B1416</h1>
            <AeoDirectAnswer
              question="What is the Reddit dark mode hex code?"
              answer="Reddit dark mode uses background #0B1416, post cards #1A1A1B, elevated menus #272729, text #D7DADC, and Reddit orange #FF4500. Copy each hex below for community-app UI."
              codes={[
                { label: 'Background', value: '#0B1416' },
                { label: 'Orange', value: '#FF4500' },
                { label: 'Card', value: '#1A1A1B' },
              ]}
            />
            <p className="text-orange-100/95 text-lg max-w-3xl mb-6">
              Copy Reddit dark mode hex codes—background <strong className="text-white font-semibold">#0B1416</strong>, cards{' '}
              <strong className="text-white font-semibold">#1A1A1B</strong>, and Reddit orange <strong className="text-white font-semibold">#FF4500</strong>—for feed and community UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#0B1416]" role="img" aria-label="Reddit dark mode background 0B1416" />
            <div className="flex items-center gap-4 text-orange-200/90 text-sm">
              <time dateTime="2026-08-06">Updated August 6, 2026</time>
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
                <PaletteQuickAnswer theme="terracotta" ariaLabel="Reddit dark mode quick copy" headline="Reddit Dark Mode — Quick Copy" subtext="Backgrounds, orange accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for Reddit Dark Mode?</h2>
                  <p className="mb-6">
                    Reddit&apos;s dark background is commonly <strong className="text-gray-900 dark:text-white">#0B1416</strong>. Post cards and panels use <strong className="text-gray-900 dark:text-white">#1A1A1B</strong>; elevated menus sit on <strong className="text-gray-900 dark:text-white">#272729</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#D7DADC</strong>. Brand and upvote accent is Reddit orange <strong className="text-gray-900 dark:text-white">#FF4500</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/telegram-dark-mode-colors">Telegram</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <RedditFullTable />

                <PaletteUiUsageSection title="Why Reddit Dark Mode Works">
                  <p>
                    Reddit keeps feeds scannable with near-black cards, reserves orange for brand and vote actions, and uses muted gray for metadata so titles stay primary. Community and social feed products borrow this structure because users already know upvote orange and card rhythm.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Reddit dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Reddit dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
