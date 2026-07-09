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

const LAST_MODIFIED = '2026-07-09T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/slack-dark-mode-colors',
  title: 'Slack Dark Mode Hex Code #1A1D21 — All Colors (Copy)',
  description:
    'Slack dark mode hex codes: background #1A1D21, sidebar #22252A, hover #2C2D30, text #D1D2D3, blue #1D9BD1. Copy every Slack UI color instantly.',
  keywords: [
    'slack dark mode colors',
    'slack dark mode hex code',
    'slack background color',
    'slack color palette',
    'slack UI colors',
    '#1A1D21',
    '#1D9BD1',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-09T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Slack Dark Mode Hex Code #1A1D21 — All Colors (Copy)',
  'Slack dark mode hex codes: background #1A1D21, sidebar #22252A, hover #2C2D30, text #D1D2D3, blue #1D9BD1. Copy every Slack UI color instantly.',
  'slack-dark-mode-colors',
  getBlogArticleDatePublished('slack-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#1A1D21' },
  { label: 'Sidebar / panel', value: '#22252A' },
  { label: 'Hover / active', value: '#2C2D30' },
  { label: 'Border', value: '#383A3F' },
  { label: 'Text primary', value: '#FFFFFF' },
  { label: 'Slack blue', value: '#1D9BD1' },
];

const FULL_SLACK_COLORS = [
  { name: 'Main background', hex: '#1A1D21', role: 'Workspace canvas and message area' },
  { name: 'Sidebar / secondary', hex: '#22252A', role: 'Channel list, left rail' },
  { name: 'Hover surface', hex: '#2C2D30', role: 'Row hover, menu items' },
  { name: 'Elevated surface', hex: '#383A3F', role: 'Modals, popovers, dividers' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Messages, channel names' },
  { name: 'Text secondary', hex: '#D1D2D3', role: 'Timestamps, metadata' },
  { name: 'Text muted', hex: '#9B9B9B', role: 'Placeholders, hints' },
  { name: 'Slack blue', hex: '#1D9BD1', role: 'Links, info, primary actions' },
  { name: 'Success green', hex: '#007A5A', role: 'Success states, confirmations' },
  { name: 'Danger red', hex: '#E01E5A', role: 'Errors, mentions, alerts' },
  { name: 'Legacy aubergine', hex: '#350D36', role: 'Classic Slack sidebar (older theme)' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#1A1D21', colorName: 'Background', rgbCode: 'rgb(26, 29, 33)' },
  { hexCode: '#22252A', colorName: 'Sidebar', rgbCode: 'rgb(34, 37, 42)' },
  { hexCode: '#2C2D30', colorName: 'Hover', rgbCode: 'rgb(44, 45, 48)' },
  { hexCode: '#1D9BD1', colorName: 'Blue', rgbCode: 'rgb(29, 155, 209)' },
  { hexCode: '#D1D2D3', colorName: 'Text', rgbCode: 'rgb(209, 210, 211)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Slack dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Slack dark mode background is #1A1D21. Sidebar panels use #22252A, hover rows use #2C2D30, and primary text is #FFFFFF with secondary text at #D1D2D3.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Slack blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Slack blue for links and info accents is #1D9BD1 (rgb(29, 155, 209)). Success green is #007A5A and danger/mention red is #E01E5A.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Slack dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Slack dark uses #1A1D21 background, #22252A sidebar, #2C2D30 hover, #383A3F borders, #FFFFFF text, #D1D2D3 secondary text, #1D9BD1 blue, #007A5A green, and #E01E5A red.',
      },
    },
  ],
};

function SlackFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Slack Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, text, blue accent, and semantic status colors.</p>
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
            {FULL_SLACK_COLORS.map((row) => (
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

export default function SlackDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="slack-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f1012] via-[#1A1D21] to-[#1D9BD1] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Slack Dark Mode Colors: #1A1D21</h1>
            <AeoDirectAnswer
              question="What is the Slack dark mode hex code?"
              answer="Slack dark mode uses background #1A1D21, sidebar #22252A, hover #2C2D30, text #D1D2D3, and Slack blue #1D9BD1. Copy each hex below for chat-app UI inspiration."
              codes={[
                { label: 'Background', value: '#1A1D21' },
                { label: 'Blue', value: '#1D9BD1' },
                { label: 'Sidebar', value: '#22252A' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy Slack dark mode hex codes—background <strong className="text-white font-semibold">#1A1D21</strong>, sidebar{' '}
              <strong className="text-white font-semibold">#22252A</strong>, and Slack blue <strong className="text-white font-semibold">#1D9BD1</strong>—for team chat and workspace UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#1A1D21]" role="img" aria-label="Slack dark mode background 1A1D21" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
              <time dateTime="2026-07-09">Updated July 9, 2026</time>
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
                <PaletteQuickAnswer theme="navy" ariaLabel="Slack dark mode quick copy" headline="Slack Dark Mode — Quick Copy" subtext="Backgrounds, blue accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for Slack Dark Mode?</h2>
                  <p className="mb-6">
                    Slack&apos;s main dark background is <strong className="text-gray-900 dark:text-white">#1A1D21</strong>—a neutral charcoal that keeps message content readable for long work sessions. The channel sidebar uses <strong className="text-gray-900 dark:text-white">#22252A</strong>; hover and active rows use <strong className="text-gray-900 dark:text-white">#2C2D30</strong>. Links and info accents use Slack blue <strong className="text-gray-900 dark:text-white">#1D9BD1</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/notion-dark-mode-colors">Notion</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <SlackFullTable />

                <PaletteUiUsageSection title="Why Slack Dark Mode Works">
                  <p>
                    Slack layers near-neutral grays so channels and threads stay scannable, reserves blue for interactive elements, and uses green/red sparingly for semantic feedback. Team chat, dev tools, and internal dashboards borrow this hierarchy because users already understand it.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Slack dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Slack dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
