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
  path: '/blog/vscode-dark-mode-colors',
  title: 'VS Code Dark Mode Hex Code #1E1E1E — All Colors (Copy)',
  description:
    'VS Code dark mode hex codes: background #1E1E1E, sidebar #252526, activity bar #333333, blue #007ACC, text #D4D4D4. Copy every VS Code color.',
  keywords: [
    'vscode dark mode colors',
    'vs code dark theme hex',
    'vscode background color',
    'vscode color palette',
    'vscode UI colors',
    '#1E1E1E',
    '#007ACC',
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
  'VS Code Dark Mode Hex Code #1E1E1E — All Colors (Copy)',
  'VS Code dark mode hex codes: background #1E1E1E, sidebar #252526, activity bar #333333, blue #007ACC, text #D4D4D4. Copy every VS Code color.',
  'vscode-dark-mode-colors',
  getBlogArticleDatePublished('vscode-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Editor background', value: '#1E1E1E' },
  { label: 'Sidebar', value: '#252526' },
  { label: 'Activity bar', value: '#333333' },
  { label: 'Status bar blue', value: '#007ACC' },
  { label: 'Text primary', value: '#D4D4D4' },
  { label: 'Selection', value: '#264F78' },
];

const FULL_VSCODE_COLORS = [
  { name: 'Editor background', hex: '#1E1E1E', role: 'Main code canvas (Dark+)' },
  { name: 'Sidebar', hex: '#252526', role: 'File explorer, outline' },
  { name: 'Activity bar', hex: '#333333', role: 'Left icon rail' },
  { name: 'Title bar', hex: '#3C3C3C', role: 'Window chrome' },
  { name: 'Input / dropdown', hex: '#3C3C3C', role: 'Search, command palette' },
  { name: 'Border', hex: '#474747', role: 'Panel separators' },
  { name: 'Text primary', hex: '#D4D4D4', role: 'Editor foreground' },
  { name: 'Text muted', hex: '#808080', role: 'Comments-adjacent UI chrome' },
  { name: 'Status bar', hex: '#007ACC', role: 'Bottom bar (default blue)' },
  { name: 'Focus border', hex: '#007FD4', role: 'Focused inputs' },
  { name: 'Selection', hex: '#264F78', role: 'Selected text background' },
  { name: 'Line highlight', hex: '#2A2D2E', role: 'Current line' },
  { name: 'Error red', hex: '#F14C4C', role: 'Errors, delete actions' },
  { name: 'Warning yellow', hex: '#CCA700', role: 'Warnings' },
  { name: 'Git added green', hex: '#89D185', role: 'Added lines in SCM' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#1E1E1E', colorName: 'Editor', rgbCode: 'rgb(30, 30, 30)' },
  { hexCode: '#252526', colorName: 'Sidebar', rgbCode: 'rgb(37, 37, 38)' },
  { hexCode: '#333333', colorName: 'Activity', rgbCode: 'rgb(51, 51, 51)' },
  { hexCode: '#007ACC', colorName: 'Blue', rgbCode: 'rgb(0, 122, 204)' },
  { hexCode: '#D4D4D4', colorName: 'Text', rgbCode: 'rgb(212, 212, 212)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the VS Code dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VS Code Dark+ editor background is #1E1E1E. The sidebar uses #252526, the activity bar uses #333333, and primary editor text is #D4D4D4.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the VS Code blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VS Code status bar and accent blue is #007ACC (rgb(0, 122, 204)). Focus borders use a lighter #007FD4. Selection highlight is #264F78.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the VS Code dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VS Code Dark+ uses #1E1E1E editor, #252526 sidebar, #333333 activity bar, #D4D4D4 text, #007ACC status blue, #264F78 selection, plus error #F14C4C and warning #CCA700.',
      },
    },
  ],
};

function VSCodeFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full VS Code Dark+ Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Editor, sidebar, status blue, selection, and SCM colors.</p>
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
            {FULL_VSCODE_COLORS.map((row) => (
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

export default function VSCodeDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="vscode-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#151515] via-[#1E1E1E] to-[#007ACC] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">VS Code Dark Mode Colors: #1E1E1E</h1>
            <AeoDirectAnswer
              question="What is the VS Code dark mode hex code?"
              answer="VS Code Dark+ uses editor background #1E1E1E, sidebar #252526, activity bar #333333, text #D4D4D4, and status blue #007ACC. Copy each hex below for IDE and developer-tool UI."
              codes={[
                { label: 'Editor', value: '#1E1E1E' },
                { label: 'Blue', value: '#007ACC' },
                { label: 'Sidebar', value: '#252526' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy VS Code dark theme hex codes—editor <strong className="text-white font-semibold">#1E1E1E</strong>, sidebar{' '}
              <strong className="text-white font-semibold">#252526</strong>, and status blue <strong className="text-white font-semibold">#007ACC</strong>—for developer tools and IDE-inspired UIs.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#1E1E1E]" role="img" aria-label="VS Code dark mode editor background 1E1E1E" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
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
                <PaletteQuickAnswer theme="navy" ariaLabel="VS Code dark mode quick copy" headline="VS Code Dark+ — Quick Copy" subtext="Editor, sidebar, blue accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for VS Code Dark Mode?</h2>
                  <p className="mb-6">
                    The default VS Code Dark+ editor background is <strong className="text-gray-900 dark:text-white">#1E1E1E</strong>. The file explorer sidebar uses <strong className="text-gray-900 dark:text-white">#252526</strong>; the activity bar (left icons) uses <strong className="text-gray-900 dark:text-white">#333333</strong>. Editor foreground text is <strong className="text-gray-900 dark:text-white">#D4D4D4</strong>, and the status bar accent is <strong className="text-gray-900 dark:text-white">#007ACC</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/slack-dark-mode-colors">Slack</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Look up any hex with our{' '}
                    <InlineTagLink href="/tools/color-name-finder">hex to color name finder</InlineTagLink>.
                  </p>
                </div>

                <VSCodeFullTable />

                <PaletteUiUsageSection title="Why VS Code Dark Mode Works">
                  <p>
                    VS Code Dark+ is optimized for long coding sessions: mid-dark grays reduce glare, blue accents mark focus and status without saturating the editor, and semantic colors (red/yellow/green) stay reserved for diagnostics and git. Developer dashboards and IDEs borrow this hierarchy because millions of engineers already know it.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">VS Code dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="VS Code dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
