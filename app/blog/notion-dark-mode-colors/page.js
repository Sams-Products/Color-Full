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

const LAST_MODIFIED = '2026-06-26T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/notion-dark-mode-colors',
  title: 'Notion Dark Mode Hex Code #191919 — All Colors (Copy)',
  description:
    'Notion dark mode hex codes: background #191919, sidebar #202020, hover #2F2F2F, text #E6E6E6, blue #2383E2. Copy every Notion dark theme color instantly.',
  keywords: [
    'notion dark mode colors',
    'notion dark mode hex code',
    'notion background color',
    'notion dark theme hex',
    'notion color palette',
    'notion UI colors',
    '#191919',
    '#2383E2',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-02T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Notion Dark Mode Hex Code #191919 — All Colors (Copy)',
  'Notion dark mode hex codes: background #191919, sidebar #202020, hover #2F2F2F, text #E6E6E6, blue #2383E2. Copy every Notion dark theme color instantly.',
  'notion-dark-mode-colors',
  getBlogArticleDatePublished('notion-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#191919' },
  { label: 'Sidebar', value: '#202020' },
  { label: 'Hover / elevated', value: '#2F2F2F' },
  { label: 'Border', value: '#373737' },
  { label: 'Text primary', value: '#E6E6E6' },
  { label: 'Blue accent', value: '#2383E2' },
];

const FULL_NOTION_COLORS = [
  { name: 'Main background', hex: '#191919', role: 'Page canvas and editor' },
  { name: 'Sidebar background', hex: '#202020', role: 'Left navigation rail' },
  { name: 'Hover surface', hex: '#2F2F2F', role: 'Row hover, menu items' },
  { name: 'Elevated / card', hex: '#252525', role: 'Popovers, cards, callouts' },
  { name: 'Border / divider', hex: '#373737', role: 'Table lines, separators' },
  { name: 'Text primary', hex: '#E6E6E6', role: 'Body text (white at ~90%)' },
  { name: 'Text secondary', hex: '#9B9B9B', role: 'Placeholders, captions' },
  { name: 'Text muted', hex: '#6F6F6F', role: 'Disabled, hints' },
  { name: 'Blue accent', hex: '#2383E2', role: 'Links, primary buttons' },
  { name: 'Blue text callout', hex: '#529CCA', role: 'Blue-colored text' },
  { name: 'Red callout', hex: '#FF7369', role: 'Red text / tags' },
  { name: 'Yellow callout', hex: '#FFDC49', role: 'Yellow highlight / tags' },
  { name: 'Green callout', hex: '#4DAB9A', role: 'Green text / tags' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#191919', colorName: 'Background', rgbCode: 'rgb(25, 25, 25)' },
  { hexCode: '#202020', colorName: 'Sidebar', rgbCode: 'rgb(32, 32, 32)' },
  { hexCode: '#2F2F2F', colorName: 'Hover', rgbCode: 'rgb(47, 47, 47)' },
  { hexCode: '#E6E6E6', colorName: 'Text', rgbCode: 'rgb(230, 230, 230)' },
  { hexCode: '#2383E2', colorName: 'Blue', rgbCode: 'rgb(35, 131, 226)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Notion-style docs / notes app',
    body: 'Mirror Notion layers: #191919 page canvas, #202020 sidebar, #2F2F2F hover rows, #E6E6E6 body text, #2383E2 links.',
    swatches: ['#191919', '#202020', '#2F2F2F', '#E6E6E6', '#2383E2'],
  },
  {
    title: 'Notion + brand accent',
    body: 'Keep the warm-neutral near-blacks for a calm reading surface; swap Notion blue for your brand link color on primary actions only.',
    swatches: ['#191919', '#202020', '#E6E6E6', '#6366F1', '#9B9B9B'],
  },
  {
    title: 'Notion-inspired knowledge base',
    body: 'Use #191919 canvas, #252525 cards, #373737 borders, and colored callouts (#4DAB9A, #FFDC49, #FF7369) for tags and status.',
    swatches: ['#191919', '#252525', '#4DAB9A', '#FFDC49', '#FF7369'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Notion dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Notion dark mode background hex code is #191919 for the main page, with the sidebar at #202020. Hover surfaces use #2F2F2F and body text is #E6E6E6 (white at about 90% opacity).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Notion blue accent hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notion’s blue accent for links and primary buttons is #2383E2. Blue-colored text in callouts uses a lighter #529CCA for readability on dark backgrounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Notion dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notion dark uses #191919 background, #202020 sidebar, #2F2F2F hover, #252525 cards, #373737 borders, #E6E6E6 text, #9B9B9B secondary text, and #2383E2 blue accent, plus colored callouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Notion colors in my own app design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notion hex values are widely referenced for calm, document-focused dark UI. For commercial products, treat them as a starting point—define your own tokens and verify WCAG contrast for body text.',
      },
    },
  ],
};

function NotionFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Notion Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Complete Notion dark theme hex list—backgrounds, text, borders, blue accent, and callout colors.
        </p>
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
            {FULL_NOTION_COLORS.map((row) => (
              <tr key={row.hex + row.name} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                <td className="px-4 py-3 sm:px-5 w-16">
                  <div
                    className="h-10 w-14 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner"
                    style={{ backgroundColor: row.hex }}
                    aria-hidden
                  />
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

function InspirationCard({ palette }) {
  return (
    <li className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-4 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{palette.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{palette.body}</p>
      <div className="flex gap-1 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600 h-10">
        {palette.swatches.map((hex) => (
          <div key={hex} className="flex-1 min-w-0" style={{ backgroundColor: hex }} title={hex} aria-hidden />
        ))}
      </div>
    </li>
  );
}

export default function NotionDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="notion-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0f0f0f] via-[#191919] to-[#2383E2] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Notion Dark Mode Colors: #191919
            </h1>
            <AeoDirectAnswer
              question="What is the Notion dark mode hex code?"
              answer="Notion dark mode uses background #191919, sidebar #202020, hover #2F2F2F, text #E6E6E6, and blue accent #2383E2. Copy each hex below for a calm, document-focused dark UI."
              codes={[
                { label: 'Background', value: '#191919' },
                { label: 'Sidebar', value: '#202020' },
                { label: 'Blue', value: '#2383E2' },
              ]}
            />
            <p className="text-blue-100/95 text-lg max-w-3xl mb-6">
              Copy Notion dark mode hex codes—background <strong className="text-white font-semibold">#191919</strong>, sidebar{' '}
              <strong className="text-white font-semibold">#202020</strong>, text <strong className="text-white font-semibold">#E6E6E6</strong>, and blue accent{' '}
              <strong className="text-white font-semibold">#2383E2</strong>—for UI inspiration and dark theme tokens.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#191919]"
              role="img"
              aria-label="Notion dark mode main background color 191919"
            />
            <div className="flex items-center gap-4 text-blue-200/90 text-sm">
              <time dateTime="2026-06-26">Updated June 26, 2026</time>
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
                <PaletteQuickAnswer
                  theme="navy"
                  ariaLabel="Notion dark mode quick copy colors"
                  headline="Notion Dark Mode — Quick Copy"
                  subtext="Backgrounds, blue accent, and text tokens from Notion dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    What is the Hex Code for Notion Dark Mode?
                  </h2>
                  <p className="mb-6">
                    The main Notion dark mode background is <strong className="text-gray-900 dark:text-white">#191919</strong>—a soft near-black that reads gently for long writing sessions. The sidebar uses <strong className="text-gray-900 dark:text-white">#202020</strong>; row hovers and menus use <strong className="text-gray-900 dark:text-white">#2F2F2F</strong>. Body text is <strong className="text-gray-900 dark:text-white">#E6E6E6</strong> (white at roughly 90% opacity), with secondary text around <strong className="text-gray-900 dark:text-white">#9B9B9B</strong>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Notion Dark Mode Background Colors
                  </h2>
                  <p className="mb-4">
                    Notion keeps its dark surfaces close in value so the interface stays calm and text-focused:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#191919</strong> — main page and editor canvas</li>
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#202020</strong> — sidebar navigation</li>
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#2F2F2F</strong> — hover rows and menu items</li>
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#252525</strong> — cards, popovers, and callouts</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Notion Blue &amp; Callout Colors
                  </h2>
                  <p className="mb-6">
                    Notion’s accent blue is <strong className="text-gray-900 dark:text-white">#2383E2</strong> for links and primary buttons. Colored text and tags use softer callout hues so they stay legible on dark backgrounds: blue <strong className="text-gray-900 dark:text-white">#529CCA</strong>, green <strong className="text-gray-900 dark:text-white">#4DAB9A</strong>, yellow <strong className="text-gray-900 dark:text-white">#FFDC49</strong>, and red <strong className="text-gray-900 dark:text-white">#FF7369</strong>.
                  </p>
                </div>

                <NotionFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Use Notion Colors in Your Design
                  </h2>
                  <p className="mb-4">
                    Map Notion’s roles to tokens:{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-canvas</code> = #191919,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-sidebar</code> = #202020,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-text</code> = #E6E6E6. The tight value range is intentional—keep contrast for text high but surface separation subtle.
                  </p>
                  <p className="mb-6">
                    Verify body text with a{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>, and compare with{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord dark mode colors</InlineTagLink> and the broader{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Notion Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt Notion dark mode colors for docs, notes, and knowledge-base products.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why Notion Dark Mode Works">
                  <p>
                    Notion optimizes for reading and writing: surfaces sit close in value so nothing competes with your content, text contrast stays high, and color is reserved for links and callout tags. Docs tools, wikis, and note apps borrow this restrained pattern because it reduces fatigue during long sessions.
                  </p>
                  <p>
                    For more dark UI theory and accessible token naming, see our{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette guide</InlineTagLink>.
                  </p>
                </PaletteUiUsageSection>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">FAQ</h2>
                  <dl className="space-y-6 not-prose mb-8">
                    {faqSchema.mainEntity.map((item) => (
                      <div key={item.name}>
                        <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                        <dd className="mt-1 text-gray-700 dark:text-gray-300">{item.acceptedAnswer.text}</dd>
                      </div>
                    ))}
                  </dl>

                  <section className="not-prose">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build your own dark palette</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5">
                        Start from Notion neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                        >
                          Color Palette Generator
                        </Link>
                        <Link
                          href="/blog/dark-mode-color-palette"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-indigo-400 hover:bg-white hover:text-indigo-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-indigo-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
                        >
                          Dark Mode Color Palette Guide
                        </Link>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Notion dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Notion dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
