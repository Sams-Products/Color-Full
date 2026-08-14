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
  path: '/blog/linkedin-dark-mode-colors',
  title: 'LinkedIn Dark Mode Hex #000000 — All UI Colors (Copy)',
  description:
    'LinkedIn dark mode hex codes: background #000000, surface #1B1F23, text #FFFFFF, blue #70B5F9. Copy every LinkedIn dark theme color.',
  keywords: [
    'linkedin dark mode colors',
    'linkedin dark mode hex',
    'linkedin dark theme colors',
    'linkedin dark mode hex code',
    '#000000',
    '#70B5F9',
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
  'LinkedIn Dark Mode Hex #000000 — All UI Colors (Copy)',
  'LinkedIn dark mode hex codes: background #000000, surface #1B1F23, text #FFFFFF, blue #70B5F9. Copy every LinkedIn dark theme color.',
  'linkedin-dark-mode-colors',
  getBlogArticleDatePublished('linkedin-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Background', value: '#000000' },
  { label: 'Surface / card', value: '#1B1F23' },
  { label: 'Elevated fill', value: '#2A2E33' },
  { label: 'Primary text', value: '#FFFFFF' },
  { label: 'Secondary text', value: '#B0B0B0' },
  { label: 'LinkedIn blue', value: '#70B5F9' },
];

const FULL_LINKEDIN_COLORS = [
  { name: 'Background', hex: '#000000', role: 'Main canvas' },
  { name: 'Surface / card', hex: '#1B1F23', role: 'Feed cards, nav, panels' },
  { name: 'Elevated fill', hex: '#2A2E33', role: 'Hover, nested chips' },
  { name: 'Border / divider', hex: '#38434F', role: 'Card edges, separators' },
  { name: 'Primary text', hex: '#FFFFFF', role: 'Names, headlines, body' },
  { name: 'Secondary text', hex: '#B0B0B0', role: 'Meta, timestamps, muted' },
  { name: 'LinkedIn blue', hex: '#70B5F9', role: 'Links, primary actions' },
  { name: 'Brand blue (logo)', hex: '#0A66C2', role: 'Marketing / logo blue' },
  { name: 'Success green', hex: '#057642', role: 'Positive / open-to-work cues' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000000', colorName: 'Background', rgbCode: 'rgb(0, 0, 0)' },
  { hexCode: '#1B1F23', colorName: 'Surface', rgbCode: 'rgb(27, 31, 35)' },
  { hexCode: '#38434F', colorName: 'Border', rgbCode: 'rgb(56, 67, 79)' },
  { hexCode: '#70B5F9', colorName: 'Blue', rgbCode: 'rgb(112, 181, 249)' },
  { hexCode: '#FFFFFF', colorName: 'Text', rgbCode: 'rgb(255, 255, 255)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the LinkedIn dark mode background hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn dark mode uses background #000000 with card/surface color #1B1F23 and borders around #38434F.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the LinkedIn blue hex code in dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LinkedIn dark UI accent blue is typically #70B5F9. The classic brand logo blue is #0A66C2. Primary text is #FFFFFF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main LinkedIn dark mode UI colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Core LinkedIn dark tokens: #000000 background, #1B1F23 surfaces, #FFFFFF text, #B0B0B0 muted text, and #70B5F9 accent blue.',
      },
    },
  ],
};

function LinkedInFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full LinkedIn Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, cards, text, and LinkedIn blue accents.</p>
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
            {FULL_LINKEDIN_COLORS.map((row) => (
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

export default function LinkedInDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="linkedin-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#000000] via-[#1B1F23] to-[#0A66C2] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">LinkedIn Dark Mode Colors: #000000</h1>
            <AeoDirectAnswer
              question="What is the LinkedIn dark mode hex code?"
              answer="LinkedIn dark mode uses background #000000, card surfaces #1B1F23, primary text #FFFFFF, and accent blue #70B5F9. Copy each hex below for professional UI tokens."
              codes={[
                { label: 'Background', value: '#000000' },
                { label: 'Blue', value: '#70B5F9' },
                { label: 'Surface', value: '#1B1F23' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy LinkedIn dark mode hex codes—background <strong className="text-white font-semibold">#000000</strong>, surface{' '}
              <strong className="text-white font-semibold">#1B1F23</strong>, and blue <strong className="text-white font-semibold">#70B5F9</strong>—for professional feed UI.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#000000]" role="img" aria-label="LinkedIn dark mode background 000000" />
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
                <PaletteQuickAnswer theme="navy" ariaLabel="LinkedIn dark mode quick copy" headline="LinkedIn Dark Mode — Quick Copy" subtext="Canvas, cards, text, and LinkedIn blue. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for LinkedIn Dark Mode?</h2>
                  <p className="mb-6">
                    LinkedIn dark mode uses black <strong className="text-gray-900 dark:text-white">#000000</strong> as the canvas with feed cards on{' '}
                    <strong className="text-gray-900 dark:text-white">#1B1F23</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#FFFFFF</strong>; muted meta sits around{' '}
                    <strong className="text-gray-900 dark:text-white">#B0B0B0</strong>. Interactive blue in dark UI is typically{' '}
                    <strong className="text-gray-900 dark:text-white">#70B5F9</strong> (logo blue remains <strong className="text-gray-900 dark:text-white">#0A66C2</strong>).
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/slack-dark-mode-colors">Slack</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/notion-dark-mode-colors">Notion</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Preview professional layouts with our{' '}
                    <InlineTagLink href="/tools/color-palette-preview/dashboard">dashboard color preview</InlineTagLink>.
                  </p>
                </div>

                <LinkedInFullTable />

                <PaletteUiUsageSection title="Why LinkedIn Dark Mode Works">
                  <p>
                    LinkedIn keeps cards slightly lifted off pure black so the feed reads as a document stack, not a void. Cool blue accents stay reserved for actions, while gray meta text keeps hierarchy calm—ideal for professional dashboards and B2B product UI.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">LinkedIn dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="LinkedIn dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
