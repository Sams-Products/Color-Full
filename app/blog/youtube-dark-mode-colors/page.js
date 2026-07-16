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

const LAST_MODIFIED = '2026-07-16T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/youtube-dark-mode-colors',
  title: 'YouTube Dark Mode Hex Code #0F0F0F — All Colors (Copy)',
  description:
    'YouTube dark mode hex codes: background #0F0F0F, elevated #212121, text #FFFFFF, red #FF0000. Copy every YouTube dark theme color instantly.',
  keywords: [
    'youtube dark mode colors',
    'youtube dark mode hex code',
    'youtube background color',
    'youtube color palette',
    'youtube UI colors',
    '#0F0F0F',
    '#FF0000',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-16T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'YouTube Dark Mode Hex Code #0F0F0F — All Colors (Copy)',
  'YouTube dark mode hex codes: background #0F0F0F, elevated #212121, text #FFFFFF, red #FF0000. Copy every YouTube dark theme color instantly.',
  'youtube-dark-mode-colors',
  getBlogArticleDatePublished('youtube-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#0F0F0F' },
  { label: 'Elevated / menu', value: '#212121' },
  { label: 'Chip / hover', value: '#272727' },
  { label: 'Text primary', value: '#FFFFFF' },
  { label: 'Text secondary', value: '#AAAAAA' },
  { label: 'YouTube red', value: '#FF0000' },
];

const FULL_YOUTUBE_COLORS = [
  { name: 'Main background', hex: '#0F0F0F', role: 'App canvas behind video and feed' },
  { name: 'Elevated surface', hex: '#212121', role: 'Menus, dialogs, guide drawer' },
  { name: 'Chip / hover', hex: '#272727', role: 'Filter chips, row hover' },
  { name: 'Search field', hex: '#121212', role: 'Search bar fill' },
  { name: 'Border / divider', hex: '#303030', role: 'Separators between sections' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Titles, channel names' },
  { name: 'Text secondary', hex: '#AAAAAA', role: 'Views, dates, metadata' },
  { name: 'YouTube red', hex: '#FF0000', role: 'Subscribe, brand accent, live' },
  { name: 'Link blue', hex: '#3EA6FF', role: 'Links in descriptions' },
  { name: 'Verified badge', hex: '#AAAAAA', role: 'Checkmarks, muted icons' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#0F0F0F', colorName: 'Background', rgbCode: 'rgb(15, 15, 15)' },
  { hexCode: '#212121', colorName: 'Elevated', rgbCode: 'rgb(33, 33, 33)' },
  { hexCode: '#272727', colorName: 'Hover', rgbCode: 'rgb(39, 39, 39)' },
  { hexCode: '#FF0000', colorName: 'Red', rgbCode: 'rgb(255, 0, 0)' },
  { hexCode: '#AAAAAA', colorName: 'Text sub', rgbCode: 'rgb(170, 170, 170)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the YouTube dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube dark mode background is #0F0F0F. Elevated menus use #212121, hover chips use #272727, primary text is #FFFFFF, and secondary text is #AAAAAA.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the YouTube red hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube brand red is #FF0000 (rgb(255, 0, 0)). It appears on Subscribe buttons, live badges, and brand accents against the near-black canvas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the YouTube dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube dark uses #0F0F0F background, #212121 elevated surfaces, #272727 chips, #FFFFFF text, #AAAAAA secondary text, #FF0000 red, and #3EA6FF links.',
      },
    },
  ],
};

function YouTubeFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full YouTube Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, text, red accent, and link colors.</p>
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
            {FULL_YOUTUBE_COLORS.map((row) => (
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

export default function YouTubeDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="youtube-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#000000] via-[#0F0F0F] to-[#FF0000] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-red-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">YouTube Dark Mode Colors: #0F0F0F</h1>
            <AeoDirectAnswer
              question="What is the YouTube dark mode hex code?"
              answer="YouTube dark mode uses background #0F0F0F, elevated surfaces #212121, text #FFFFFF, secondary text #AAAAAA, and YouTube red #FF0000. Copy each hex below for video-app UI inspiration."
              codes={[
                { label: 'Background', value: '#0F0F0F' },
                { label: 'Red', value: '#FF0000' },
                { label: 'Elevated', value: '#212121' },
              ]}
            />
            <p className="text-red-100/95 text-lg max-w-3xl mb-6">
              Copy YouTube dark mode hex codes—background <strong className="text-white font-semibold">#0F0F0F</strong>, elevated{' '}
              <strong className="text-white font-semibold">#212121</strong>, and YouTube red <strong className="text-white font-semibold">#FF0000</strong>—for media and video UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#0F0F0F]" role="img" aria-label="YouTube dark mode background 0F0F0F" />
            <div className="flex items-center gap-4 text-red-200/90 text-sm">
              <time dateTime="2026-07-16">Updated July 16, 2026</time>
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
                <PaletteQuickAnswer theme="navy" ariaLabel="YouTube dark mode quick copy" headline="YouTube Dark Mode — Quick Copy" subtext="Backgrounds, red accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for YouTube Dark Mode?</h2>
                  <p className="mb-6">
                    YouTube&apos;s dark background is <strong className="text-gray-900 dark:text-white">#0F0F0F</strong>—near-black so video thumbnails stay vivid. Menus and drawers use <strong className="text-gray-900 dark:text-white">#212121</strong>; filter chips and hovers use <strong className="text-gray-900 dark:text-white">#272727</strong>. Brand red <strong className="text-gray-900 dark:text-white">#FF0000</strong> is reserved for Subscribe and live cues.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/spotify-dark-mode-colors">Spotify</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <YouTubeFullTable />

                <PaletteUiUsageSection title="Why YouTube Dark Mode Works">
                  <p>
                    YouTube keeps chrome nearly invisible so video content owns the screen. Near-black surfaces reduce eye strain during long sessions, red appears only on high-intent actions, and secondary gray (#AAAAAA) handles metadata without competing with titles.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">YouTube dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="YouTube dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
