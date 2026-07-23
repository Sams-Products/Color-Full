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
  path: '/blog/figma-dark-mode-colors',
  title: 'Figma Dark Mode Hex Code #2C2C2C — All Colors (Copy)',
  description:
    'Figma dark mode hex codes: background #2C2C2C, panel #1E1E1E, hover #383838, text #FFFFFF, blue #0D99FF. Copy every Figma UI color instantly.',
  keywords: [
    'figma dark mode colors',
    'figma dark mode hex code',
    'figma background color',
    'figma color palette',
    'figma UI colors',
    '#2C2C2C',
    '#0D99FF',
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
  'Figma Dark Mode Hex Code #2C2C2C — All Colors (Copy)',
  'Figma dark mode hex codes: background #2C2C2C, panel #1E1E1E, hover #383838, text #FFFFFF, blue #0D99FF. Copy every Figma UI color instantly.',
  'figma-dark-mode-colors',
  getBlogArticleDatePublished('figma-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Canvas / toolbar', value: '#2C2C2C' },
  { label: 'Panel background', value: '#1E1E1E' },
  { label: 'Hover / selected', value: '#383838' },
  { label: 'Border', value: '#444444' },
  { label: 'Text primary', value: '#FFFFFF' },
  { label: 'Figma blue', value: '#0D99FF' },
];

const FULL_FIGMA_COLORS = [
  { name: 'Toolbar / chrome', hex: '#2C2C2C', role: 'Top bar, tool rails' },
  { name: 'Panel background', hex: '#1E1E1E', role: 'Layers, properties, left/right panels' },
  { name: 'Canvas (artboard area)', hex: '#1E1E1E', role: 'Dark canvas behind frames' },
  { name: 'Hover / selected row', hex: '#383838', role: 'Layer hover, menu highlight' },
  { name: 'Border / divider', hex: '#444444', role: 'Panel separators' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Labels, layer names' },
  { name: 'Text secondary', hex: '#B3B3B3', role: 'Hints, secondary labels' },
  { name: 'Text muted', hex: '#8C8C8C', role: 'Disabled, captions' },
  { name: 'Figma blue', hex: '#0D99FF', role: 'Selection, primary actions, links' },
  { name: 'Component purple', hex: '#9747FF', role: 'Components, instances' },
  { name: 'Prototype purple', hex: '#A259FF', role: 'Prototype connectors (brand-adjacent)' },
  { name: 'Error red', hex: '#F24822', role: 'Errors, destructive' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#2C2C2C', colorName: 'Toolbar', rgbCode: 'rgb(44, 44, 44)' },
  { hexCode: '#1E1E1E', colorName: 'Panel', rgbCode: 'rgb(30, 30, 30)' },
  { hexCode: '#383838', colorName: 'Hover', rgbCode: 'rgb(56, 56, 56)' },
  { hexCode: '#0D99FF', colorName: 'Blue', rgbCode: 'rgb(13, 153, 255)' },
  { hexCode: '#9747FF', colorName: 'Component', rgbCode: 'rgb(151, 71, 255)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Figma dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Figma dark UI chrome/toolbar is commonly #2C2C2C, with panels and canvas around #1E1E1E. Hover rows use #383838 and primary text is #FFFFFF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Figma blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Figma selection and primary action blue is #0D99FF. Component purple is #9747FF. Use blue for selection/focus and purple for component semantics.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Figma dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Figma dark uses #2C2C2C toolbar, #1E1E1E panels, #383838 hover, #444444 borders, #FFFFFF text, #0D99FF blue, and #9747FF component purple.',
      },
    },
  ],
};

function FigmaFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Figma Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Toolbar, panels, selection blue, and component purple.</p>
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
            {FULL_FIGMA_COLORS.map((row) => (
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

export default function FigmaDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="figma-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#1E1E1E] via-[#2C2C2C] to-[#0D99FF] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Figma Dark Mode Colors: #2C2C2C</h1>
            <AeoDirectAnswer
              question="What is the Figma dark mode hex code?"
              answer="Figma dark mode uses toolbar #2C2C2C, panels #1E1E1E, hover #383838, text #FFFFFF, and selection blue #0D99FF. Copy each hex below for design-tool UI inspiration."
              codes={[
                { label: 'Toolbar', value: '#2C2C2C' },
                { label: 'Blue', value: '#0D99FF' },
                { label: 'Panel', value: '#1E1E1E' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy Figma dark mode hex codes—toolbar <strong className="text-white font-semibold">#2C2C2C</strong>, panels{' '}
              <strong className="text-white font-semibold">#1E1E1E</strong>, and Figma blue <strong className="text-white font-semibold">#0D99FF</strong>—for design-tool and creative UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#2C2C2C]" role="img" aria-label="Figma dark mode toolbar color 2C2C2C" />
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
                <PaletteQuickAnswer theme="navy" ariaLabel="Figma dark mode quick copy" headline="Figma Dark Mode — Quick Copy" subtext="Toolbar, panels, blue accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for Figma Dark Mode?</h2>
                  <p className="mb-6">
                    Figma&apos;s dark toolbar and chrome commonly use <strong className="text-gray-900 dark:text-white">#2C2C2C</strong>. Layers and properties panels sit on <strong className="text-gray-900 dark:text-white">#1E1E1E</strong>; hover and selected rows use <strong className="text-gray-900 dark:text-white">#383838</strong>. Selection and primary actions use Figma blue <strong className="text-gray-900 dark:text-white">#0D99FF</strong>, with component purple <strong className="text-gray-900 dark:text-white">#9747FF</strong> for component semantics.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/notion-dark-mode-colors">Notion</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/github-dark-mode-colors">GitHub</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Preview any palette on a real UI with our{' '}
                    <InlineTagLink href="/tools/color-palette-preview">color palette preview</InlineTagLink> tool.
                  </p>
                </div>

                <FigmaFullTable />

                <PaletteUiUsageSection title="Why Figma Dark Mode Works">
                  <p>
                    Figma keeps chrome mid-dark so frames and colors on the canvas stay the focus. Blue marks selection without flooding the UI, and purple is reserved for components—a semantic split designers learn quickly. Creative tools and design systems borrow this restraint so content, not chrome, leads.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Figma dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Figma dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
