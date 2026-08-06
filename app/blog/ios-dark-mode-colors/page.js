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
  path: '/blog/ios-dark-mode-colors',
  title: 'iOS Dark Mode Hex Code #000000 — All System Colors (Copy)',
  description:
    'iOS dark mode hex codes: background #000000, secondary #1C1C1E, tertiary #2C2C2E, label #FFFFFF, blue #0A84FF. Copy every iOS system color.',
  keywords: [
    'ios dark mode colors',
    'ios dark mode hex code',
    'iphone dark mode colors',
    'apple dark mode hex',
    'ios system colors',
    '#000000',
    '#0A84FF',
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
  'iOS Dark Mode Hex Code #000000 — All System Colors (Copy)',
  'iOS dark mode hex codes: background #000000, secondary #1C1C1E, tertiary #2C2C2E, label #FFFFFF, blue #0A84FF. Copy every iOS system color.',
  'ios-dark-mode-colors',
  getBlogArticleDatePublished('ios-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'System background', value: '#000000' },
  { label: 'Secondary background', value: '#1C1C1E' },
  { label: 'Tertiary background', value: '#2C2C2E' },
  { label: 'Label (primary text)', value: '#FFFFFF' },
  { label: 'Secondary label', value: '#EBEBF5' },
  { label: 'System blue', value: '#0A84FF' },
];

const FULL_IOS_COLORS = [
  { name: 'System background', hex: '#000000', role: 'Base canvas (true black OLED)' },
  { name: 'Secondary background', hex: '#1C1C1E', role: 'Grouped lists, elevated base' },
  { name: 'Tertiary background', hex: '#2C2C2E', role: 'Cards inside secondary' },
  { name: 'Quaternary fill', hex: '#3A3A3C', role: 'Fill accents, separators adjacent' },
  { name: 'Label', hex: '#FFFFFF', role: 'Primary text' },
  { name: 'Secondary label', hex: '#EBEBF5', role: 'Secondary text (~60% opacity feel)' },
  { name: 'Tertiary label', hex: '#EBEBF5', role: 'Tertiary / placeholder text' },
  { name: 'System blue', hex: '#0A84FF', role: 'Tint, links, primary actions' },
  { name: 'System green', hex: '#30D158', role: 'Success, positive' },
  { name: 'System red', hex: '#FF453A', role: 'Destructive, errors' },
  { name: 'System orange', hex: '#FF9F0A', role: 'Warnings, accents' },
  { name: 'System indigo', hex: '#5E5CE6', role: 'Secondary brand tint' },
  { name: 'Separator', hex: '#38383A', role: 'Hairline dividers' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000000', colorName: 'Background', rgbCode: 'rgb(0, 0, 0)' },
  { hexCode: '#1C1C1E', colorName: 'Secondary', rgbCode: 'rgb(28, 28, 30)' },
  { hexCode: '#2C2C2E', colorName: 'Tertiary', rgbCode: 'rgb(44, 44, 46)' },
  { hexCode: '#0A84FF', colorName: 'Blue', rgbCode: 'rgb(10, 132, 255)' },
  { hexCode: '#FFFFFF', colorName: 'Label', rgbCode: 'rgb(255, 255, 255)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the iOS dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'iOS dark mode system background is #000000 (true black). Secondary background is #1C1C1E and tertiary is #2C2C2E. Primary label text is #FFFFFF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the iOS system blue hex code in dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'iOS dark mode system blue (tint) is #0A84FF. System green is #30D158 and system red is #FF453A.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the iOS dark mode system colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'iOS dark uses #000000 background, #1C1C1E secondary, #2C2C2E tertiary, #FFFFFF labels, #0A84FF blue, plus semantic greens and reds for status.',
      },
    },
  ],
};

function IosFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full iOS Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">System backgrounds, labels, tint blue, and semantic colors.</p>
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
            {FULL_IOS_COLORS.map((row) => (
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

export default function IosDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="ios-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#000000] via-[#1C1C1E] to-[#0A84FF] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">iOS Dark Mode Colors: #000000</h1>
            <AeoDirectAnswer
              question="What is the iOS dark mode hex code?"
              answer="iOS dark mode uses system background #000000, secondary #1C1C1E, tertiary #2C2C2E, label #FFFFFF, and system blue #0A84FF. Copy each hex below for iPhone and iPad UI tokens."
              codes={[
                { label: 'Background', value: '#000000' },
                { label: 'Blue', value: '#0A84FF' },
                { label: 'Secondary', value: '#1C1C1E' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy iOS dark mode hex codes—background <strong className="text-white font-semibold">#000000</strong>, secondary{' '}
              <strong className="text-white font-semibold">#1C1C1E</strong>, and system blue <strong className="text-white font-semibold">#0A84FF</strong>—for Apple-style mobile UI.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#000000]" role="img" aria-label="iOS dark mode background 000000" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
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
                <PaletteQuickAnswer theme="navy" ariaLabel="iOS dark mode quick copy" headline="iOS Dark Mode — Quick Copy" subtext="System backgrounds, labels, and tint blue. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for iOS Dark Mode?</h2>
                  <p className="mb-6">
                    iOS dark mode uses true black <strong className="text-gray-900 dark:text-white">#000000</strong> as the system background—ideal for OLED iPhones. Layered surfaces step up to <strong className="text-gray-900 dark:text-white">#1C1C1E</strong> (secondary) and <strong className="text-gray-900 dark:text-white">#2C2C2E</strong> (tertiary). Primary text (label) is <strong className="text-gray-900 dark:text-white">#FFFFFF</strong>; the default tint is system blue <strong className="text-gray-900 dark:text-white">#0A84FF</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/chrome-dark-mode-colors">Chrome</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Preview any palette on a phone mockup with our{' '}
                    <InlineTagLink href="/tools/color-palette-preview/mobile-app">mobile app color preview</InlineTagLink>.
                  </p>
                </div>

                <IosFullTable />

                <PaletteUiUsageSection title="Why iOS Dark Mode Works">
                  <p>
                    Apple stacks true black with two elevated gray surfaces so hierarchy is clear without shadows. Tint blue appears only on interactive elements, and semantic reds/greens stay reserved for status. Mobile apps that want an &ldquo;iPhone-native&rdquo; feel copy this layered system.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">iOS dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="iOS dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
