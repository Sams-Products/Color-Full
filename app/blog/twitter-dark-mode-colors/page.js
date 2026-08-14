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

const LAST_MODIFIED = '2026-08-15T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/twitter-dark-mode-colors',
  title: 'X (Twitter) Dark Mode Hex #000000 — All UI Colors (Copy)',
  description:
    'X (Twitter) dark mode hex codes: Lights Out #000000, surfaces #16181C, text #E7E9EA, blue #1D9BF0. Copy every X dark theme color.',
  keywords: [
    'twitter dark mode colors',
    'x dark mode hex',
    'twitter dark mode hex code',
    'x twitter dark theme colors',
    '#000000',
    '#1D9BF0',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-08-15T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});

const articleSchema = getBlogArticleSchema(
  'X (Twitter) Dark Mode Hex #000000 — All UI Colors (Copy)',
  'X (Twitter) dark mode hex codes: Lights Out #000000, surfaces #16181C, text #E7E9EA, blue #1D9BF0. Copy every X dark theme color.',
  'twitter-dark-mode-colors',
  getBlogArticleDatePublished('twitter-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Lights Out background', value: '#000000' },
  { label: 'Elevated surface', value: '#16181C' },
  { label: 'Primary text', value: '#E7E9EA' },
  { label: 'Secondary text', value: '#71767B' },
  { label: 'Border / divider', value: '#2F3336' },
  { label: 'X blue (links)', value: '#1D9BF0' },
];

const FULL_X_COLORS = [
  { name: 'Lights Out background', hex: '#000000', role: 'Main canvas (OLED black)' },
  { name: 'Elevated surface', hex: '#16181C', role: 'Modals, menus, sticky bars' },
  { name: 'Hover / soft fill', hex: '#1D1F23', role: 'Row hover, subtle chips' },
  { name: 'Border / divider', hex: '#2F3336', role: 'Hairlines, card edges' },
  { name: 'Primary text', hex: '#E7E9EA', role: 'Tweets, names, body copy' },
  { name: 'Secondary text', hex: '#71767B', role: 'Handles, timestamps, meta' },
  { name: 'X blue', hex: '#1D9BF0', role: 'Links, buttons, follow CTA' },
  { name: 'Like / accent pink', hex: '#F91880', role: 'Likes, heart states' },
  { name: 'Success green', hex: '#00BA7C', role: 'Repost / positive states' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000000', colorName: 'Background', rgbCode: 'rgb(0, 0, 0)' },
  { hexCode: '#16181C', colorName: 'Surface', rgbCode: 'rgb(22, 24, 28)' },
  { hexCode: '#2F3336', colorName: 'Border', rgbCode: 'rgb(47, 51, 54)' },
  { hexCode: '#1D9BF0', colorName: 'Blue', rgbCode: 'rgb(29, 155, 240)' },
  { hexCode: '#E7E9EA', colorName: 'Text', rgbCode: 'rgb(231, 233, 234)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the X (Twitter) dark mode background hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'X Lights Out dark mode uses background #000000. Elevated surfaces are typically #16181C, with borders around #2F3336.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the X (Twitter) blue hex code in dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'X dark mode blue (links and primary buttons) is #1D9BF0. Primary text is #E7E9EA and secondary text is #71767B.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main X dark mode UI colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core X dark tokens: #000000 background, #16181C surfaces, #E7E9EA text, #71767B muted text, #2F3336 borders, and #1D9BF0 blue.',
      },
    },
  ],
};

function XFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full X (Twitter) Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Lights Out backgrounds, text, borders, and accent blue.</p>
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
            {FULL_X_COLORS.map((row) => (
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

export default function TwitterDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="twitter-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#000000] via-[#16181C] to-[#1D9BF0] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">X (Twitter) Dark Mode Colors: #000000</h1>
            <AeoDirectAnswer
              question="What is the X (Twitter) dark mode hex code?"
              answer="X Lights Out dark mode uses background #000000, elevated surfaces #16181C, primary text #E7E9EA, and blue #1D9BF0. Copy each hex below for Twitter/X-style UI."
              codes={[
                { label: 'Background', value: '#000000' },
                { label: 'Blue', value: '#1D9BF0' },
                { label: 'Surface', value: '#16181C' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy X (Twitter) dark mode hex codes—Lights Out <strong className="text-white font-semibold">#000000</strong>, surface{' '}
              <strong className="text-white font-semibold">#16181C</strong>, and blue <strong className="text-white font-semibold">#1D9BF0</strong>—for social UI kits.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#000000]" role="img" aria-label="X Twitter dark mode background 000000" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
              <time dateTime="2026-08-15">Updated August 15, 2026</time>
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
                <PaletteQuickAnswer theme="navy" ariaLabel="X dark mode quick copy" headline="X Dark Mode — Quick Copy" subtext="Lights Out canvas, text, borders, and blue. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for X (Twitter) Dark Mode?</h2>
                  <p className="mb-6">
                    X Lights Out dark mode uses true black <strong className="text-gray-900 dark:text-white">#000000</strong> as the main canvas. Elevated chrome sits on{' '}
                    <strong className="text-gray-900 dark:text-white">#16181C</strong> with borders near <strong className="text-gray-900 dark:text-white">#2F3336</strong>. Body text is{' '}
                    <strong className="text-gray-900 dark:text-white">#E7E9EA</strong>; muted meta text is <strong className="text-gray-900 dark:text-white">#71767B</strong>. The signature link blue is{' '}
                    <strong className="text-gray-900 dark:text-white">#1D9BF0</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/reddit-dark-mode-colors">Reddit</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Preview feeds on a phone mockup with our{' '}
                    <InlineTagLink href="/tools/color-palette-preview/mobile-app">mobile app color preview</InlineTagLink>.
                  </p>
                </div>

                <XFullTable />

                <PaletteUiUsageSection title="Why X Dark Mode Works">
                  <p>
                    Lights Out keeps the feed on true black so media and blue CTAs pop. Surfaces lift just enough for menus without gray mush, and secondary gray text keeps timestamps quiet. Social apps that want an &ldquo;X-native&rdquo; feel copy this high-contrast black + #1D9BF0 system.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">X dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="X dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
