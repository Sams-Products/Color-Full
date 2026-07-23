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

const LAST_MODIFIED = '2026-07-23T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/github-dark-mode-colors',
  title: 'GitHub Dark Mode Hex Code #0D1117 — All Colors (Copy)',
  description:
    'GitHub dark mode hex codes: background #0D1117, canvas #161B22, border #30363D, text #E6EDF3, accent #2F81F7. Copy every GitHub dark theme color.',
  keywords: [
    'github dark mode colors',
    'github dark mode hex code',
    'github background color',
    'github color palette',
    'github UI colors',
    '#0D1117',
    '#2F81F7',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-23T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'GitHub Dark Mode Hex Code #0D1117 — All Colors (Copy)',
  'GitHub dark mode hex codes: background #0D1117, canvas #161B22, border #30363D, text #E6EDF3, accent #2F81F7. Copy every GitHub dark theme color.',
  'github-dark-mode-colors',
  getBlogArticleDatePublished('github-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Page background', value: '#0D1117' },
  { label: 'Canvas / box', value: '#161B22' },
  { label: 'Border', value: '#30363D' },
  { label: 'Text primary', value: '#E6EDF3' },
  { label: 'Text muted', value: '#8B949E' },
  { label: 'Accent blue', value: '#2F81F7' },
];

const FULL_GITHUB_COLORS = [
  { name: 'Page background', hex: '#0D1117', role: 'Default dark canvas' },
  { name: 'Canvas / elevated', hex: '#161B22', role: 'Cards, boxes, sidebars' },
  { name: 'Overlay / menu', hex: '#1C2128', role: 'Dropdowns, popovers' },
  { name: 'Border default', hex: '#30363D', role: 'Rules, table borders' },
  { name: 'Border muted', hex: '#21262D', role: 'Subtle separators' },
  { name: 'Text primary', hex: '#E6EDF3', role: 'Body, headings' },
  { name: 'Text secondary', hex: '#8B949E', role: 'Meta, captions' },
  { name: 'Accent blue', hex: '#2F81F7', role: 'Links, focus, primary actions' },
  { name: 'Success green', hex: '#3FB950', role: 'Open PRs, success' },
  { name: 'Danger red', hex: '#F85149', role: 'Closed, errors, delete' },
  { name: 'Attention yellow', hex: '#D29922', role: 'Warnings, draft' },
  { name: 'Done purple', hex: '#A371F7', role: 'Merged, done states' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#0D1117', colorName: 'Background', rgbCode: 'rgb(13, 17, 23)' },
  { hexCode: '#161B22', colorName: 'Canvas', rgbCode: 'rgb(22, 27, 34)' },
  { hexCode: '#30363D', colorName: 'Border', rgbCode: 'rgb(48, 54, 61)' },
  { hexCode: '#2F81F7', colorName: 'Blue', rgbCode: 'rgb(47, 129, 247)' },
  { hexCode: '#E6EDF3', colorName: 'Text', rgbCode: 'rgb(230, 237, 243)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the GitHub dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GitHub dark mode page background is #0D1117. Elevated canvases and boxes use #161B22, borders use #30363D, and primary text is #E6EDF3.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the GitHub accent blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GitHub dark accent blue for links and primary actions is #2F81F7. Success green is #3FB950, danger red is #F85149, and merged purple is #A371F7.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the GitHub dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GitHub dark uses #0D1117 background, #161B22 canvas, #30363D border, #E6EDF3 text, #8B949E muted text, #2F81F7 blue, plus green/red/yellow/purple semantic colors.',
      },
    },
  ],
};

function GitHubFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full GitHub Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, borders, text, accent blue, and PR status colors.</p>
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
            {FULL_GITHUB_COLORS.map((row) => (
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

export default function GitHubDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="github-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#010409] via-[#0D1117] to-[#2F81F7] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">GitHub Dark Mode Colors: #0D1117</h1>
            <AeoDirectAnswer
              question="What is the GitHub dark mode hex code?"
              answer="GitHub dark mode uses background #0D1117, canvas #161B22, border #30363D, text #E6EDF3, and accent blue #2F81F7. Copy each hex below for developer-tool UI inspiration."
              codes={[
                { label: 'Background', value: '#0D1117' },
                { label: 'Blue', value: '#2F81F7' },
                { label: 'Canvas', value: '#161B22' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy GitHub dark mode hex codes—background <strong className="text-white font-semibold">#0D1117</strong>, canvas{' '}
              <strong className="text-white font-semibold">#161B22</strong>, and accent blue <strong className="text-white font-semibold">#2F81F7</strong>—for repos, dashboards, and developer UIs.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#0D1117]" role="img" aria-label="GitHub dark mode background 0D1117" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
              <time dateTime="2026-07-23">Updated July 23, 2026</time>
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
                <PaletteQuickAnswer theme="navy" ariaLabel="GitHub dark mode quick copy" headline="GitHub Dark Mode — Quick Copy" subtext="Backgrounds, borders, blue accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for GitHub Dark Mode?</h2>
                  <p className="mb-6">
                    GitHub&apos;s dark page background is <strong className="text-gray-900 dark:text-white">#0D1117</strong>. Elevated boxes and sidebars use <strong className="text-gray-900 dark:text-white">#161B22</strong>; default borders are <strong className="text-gray-900 dark:text-white">#30363D</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#E6EDF3</strong> with muted meta at <strong className="text-gray-900 dark:text-white">#8B949E</strong>. Links and focus use accent blue <strong className="text-gray-900 dark:text-white">#2F81F7</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/vscode-dark-mode-colors">VS Code</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/slack-dark-mode-colors">Slack</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <GitHubFullTable />

                <PaletteUiUsageSection title="Why GitHub Dark Mode Works">
                  <p>
                    GitHub layers cool near-black surfaces so code and diffs stay readable, reserves blue for navigation and links, and uses green/red/yellow/purple only for PR and issue semantics. Developer tools and internal dashboards borrow this system because millions of engineers already understand it.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">GitHub dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="GitHub dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
