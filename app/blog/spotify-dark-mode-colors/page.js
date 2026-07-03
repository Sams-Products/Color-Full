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
  path: '/blog/spotify-dark-mode-colors',
  title: 'Spotify Dark Mode Hex Code #121212 — All Colors (Copy)',
  description:
    'Spotify dark mode hex codes: background #121212, cards #181818, elevated #282828, green #1DB954, text #FFFFFF. Copy every Spotify UI color instantly.',
  keywords: [
    'spotify dark mode colors',
    'spotify dark mode hex code',
    'spotify green hex code',
    'spotify background color',
    'spotify color palette',
    'spotify UI colors',
    '#1DB954',
    '#121212',
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
  'Spotify Dark Mode Hex Code #121212 — All Colors (Copy)',
  'Spotify dark mode hex codes: background #121212, cards #181818, elevated #282828, green #1DB954, text #FFFFFF. Copy every Spotify UI color instantly.',
  'spotify-dark-mode-colors',
  getBlogArticleDatePublished('spotify-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#121212' },
  { label: 'Card / elevated base', value: '#181818' },
  { label: 'Highlight surface', value: '#282828' },
  { label: 'Spotify green', value: '#1DB954' },
  { label: 'Bright green', value: '#1ED760' },
  { label: 'Text secondary', value: '#B3B3B3' },
];

const FULL_SPOTIFY_COLORS = [
  { name: 'Main background', hex: '#121212', role: 'App canvas behind everything' },
  { name: 'Card base', hex: '#181818', role: 'Album cards, playlist tiles' },
  { name: 'Card hover', hex: '#1A1A1A', role: 'Card hover state' },
  { name: 'Elevated surface', hex: '#282828', role: 'Now-playing bar, menus, modals' },
  { name: 'Highlight / active', hex: '#333333', role: 'Active rows, pressed states' },
  { name: 'Border / divider', hex: '#292929', role: 'Subtle separators' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Track titles, headings' },
  { name: 'Text subdued', hex: '#B3B3B3', role: 'Artist names, metadata' },
  { name: 'Text muted', hex: '#A7A7A7', role: 'Timestamps, captions' },
  { name: 'Spotify green', hex: '#1DB954', role: 'Brand accent, primary buttons' },
  { name: 'Bright green', hex: '#1ED760', role: 'Play button, hover accent' },
  { name: 'Green pressed', hex: '#1AA34A', role: 'Pressed accent state' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#121212', colorName: 'Background', rgbCode: 'rgb(18, 18, 18)' },
  { hexCode: '#181818', colorName: 'Card', rgbCode: 'rgb(24, 24, 24)' },
  { hexCode: '#282828', colorName: 'Elevated', rgbCode: 'rgb(40, 40, 40)' },
  { hexCode: '#1DB954', colorName: 'Green', rgbCode: 'rgb(29, 185, 84)' },
  { hexCode: '#B3B3B3', colorName: 'Text sub', rgbCode: 'rgb(179, 179, 179)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Spotify-style music app',
    body: 'Mirror Spotify layers: #121212 canvas, #181818 cards, #282828 now-playing bar, #1DB954 play button, #B3B3B3 metadata.',
    swatches: ['#121212', '#181818', '#282828', '#1DB954', '#B3B3B3'],
  },
  {
    title: 'Spotify + custom brand accent',
    body: 'Keep the near-black neutrals for depth; swap Spotify green for your brand hue (e.g. #F59E0B amber or #6366F1 indigo) on primary actions only.',
    swatches: ['#121212', '#181818', '#FFFFFF', '#6366F1', '#B3B3B3'],
  },
  {
    title: 'Spotify-inspired dashboard',
    body: 'Use #121212 canvas, #181818 cards, #282828 panels, #1DB954 for positive KPIs, and #B3B3B3 chart labels for a calm, focused data UI.',
    swatches: ['#121212', '#181818', '#282828', '#1DB954', '#B3B3B3'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Spotify dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Spotify dark mode background hex code is #121212 — a near-black gray. Cards use #181818, elevated surfaces like the now-playing bar use #282828, and primary text is #FFFFFF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Spotify green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Spotify green hex code is #1DB954 (rgb(29, 185, 84)). A brighter variant #1ED760 is used on the play button and hover states, with #1AA34A for pressed states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Spotify dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spotify dark UI uses #121212 background, #181818 cards, #282828 elevated surfaces, #FFFFFF primary text, #B3B3B3 secondary text, and #1DB954 green accent. Copy each from the table on this page.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Spotify colors in my own app design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spotify hex values are widely referenced for dark UI inspiration. For commercial products, treat them as a starting point—define your own tokens, swap the green for your brand accent, and verify WCAG contrast.',
      },
    },
  ],
};

function SpotifyFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Spotify Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Complete Spotify dark theme hex list—backgrounds, cards, text, and the signature green accent.
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
            {FULL_SPOTIFY_COLORS.map((row) => (
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

export default function SpotifyDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="spotify-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1DB954] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Spotify Dark Mode Colors: #121212
            </h1>
            <AeoDirectAnswer
              question="What is the Spotify dark mode hex code?"
              answer="Spotify dark mode uses background #121212, cards #181818, elevated surfaces #282828, and the signature Spotify green #1DB954 with #FFFFFF text. Copy each hex below for your own dark UI."
              codes={[
                { label: 'Background', value: '#121212' },
                { label: 'Green', value: '#1DB954' },
                { label: 'Text', value: '#B3B3B3' },
              ]}
            />
            <p className="text-green-100/95 text-lg max-w-3xl mb-6">
              Copy Spotify dark mode hex codes—background <strong className="text-white font-semibold">#121212</strong>, cards{' '}
              <strong className="text-white font-semibold">#181818</strong>, elevated <strong className="text-white font-semibold">#282828</strong>, and Spotify green{' '}
              <strong className="text-white font-semibold">#1DB954</strong>—for UI inspiration and dark theme tokens.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#121212]"
              role="img"
              aria-label="Spotify dark mode main background color 121212"
            />
            <div className="flex items-center gap-4 text-green-200/90 text-sm">
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
                  theme="forest"
                  ariaLabel="Spotify dark mode quick copy colors"
                  headline="Spotify Dark Mode — Quick Copy"
                  subtext="Main backgrounds, green accent, and text tokens from Spotify dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    What is the Hex Code for Spotify Dark Mode?
                  </h2>
                  <p className="mb-6">
                    The main Spotify dark mode background is <strong className="text-gray-900 dark:text-white">#121212</strong>—a near-black gray that keeps album art vivid without harsh pure-black contrast. Cards and tiles use <strong className="text-gray-900 dark:text-white">#181818</strong>; elevated surfaces like the now-playing bar and menus use <strong className="text-gray-900 dark:text-white">#282828</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#FFFFFF</strong> with secondary metadata in <strong className="text-gray-900 dark:text-white">#B3B3B3</strong>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Spotify Green Hex Code
                  </h2>
                  <p className="mb-6">
                    The signature <strong className="text-gray-900 dark:text-white">Spotify green is #1DB954</strong> (rgb(29, 185, 84)). A brighter <strong className="text-gray-900 dark:text-white">#1ED760</strong> appears on the play button and hover states, and <strong className="text-gray-900 dark:text-white">#1AA34A</strong> is used for the pressed state. Reserve the green for primary actions—play, follow, and brand moments—so it keeps its meaning against the neutral grays.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Spotify Dark Mode Background Colors
                  </h2>
                  <p className="mb-4">
                    Spotify layers three near-black surfaces so depth reads clearly without heavy shadows:
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#121212</strong> — main app canvas</li>
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#181818</strong> — album cards and playlist tiles</li>
                    <li className="pl-1"><strong className="text-gray-900 dark:text-white">#282828</strong> — now-playing bar, menus, and modals</li>
                  </ul>
                  <p className="mb-6">
                    Copy any value from the quick-answer box above or the full table below.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    What Color is Spotify Dark Mode?
                  </h2>
                  <p className="mb-6">
                    Spotify dark mode is a <strong className="text-gray-900 dark:text-white">near-black gray (#121212)</strong>, not pure black. This keeps colorful album artwork the visual hero while reducing eye strain, and lets card layers (#181818) and elevated surfaces (#282828) separate with only a few percent luminance difference.
                  </p>
                </div>

                <SpotifyFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Use Spotify Colors in Your Design
                  </h2>
                  <p className="mb-4">
                    Treat Spotify hex codes as a reference architecture, not a brand kit. Map roles to tokens:{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-canvas</code> = #121212,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-surface</code> = #181818,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-accent</code> = #1DB954. Swap the green for your own accent while keeping the near-black layering intact.
                  </p>
                  <p className="mb-6">
                    Always run text pairs through a{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>: #B3B3B3 on #121212 passes for large labels but check small body copy. Compare with{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord dark mode colors</InlineTagLink> and the broader{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Spotify Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt Spotify dark mode colors for music apps, dashboards, and media products—without cloning the brand.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why Spotify Dark Mode Works">
                  <p>
                    Spotify optimizes for content: near-black neutrals let album art and playlists pop, the green accent appears only on interactive elements, and three layered surfaces create depth without shadows. Media, audio, and entertainment apps borrow this pattern because it keeps colorful content the focus.
                  </p>
                  <p>
                    For more dark UI theory—including Material #121212 and accessible token naming—see our{' '}
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
                        Start from Spotify neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-green-400 hover:bg-white hover:text-green-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-green-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
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
                    Spotify dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Spotify dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
