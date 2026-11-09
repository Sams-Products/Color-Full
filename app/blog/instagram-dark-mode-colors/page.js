import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import EnvatoAffiliateBanner from '../../components/EnvatoAffiliateBanner';
import { PaletteQuickAnswer, PaletteUiUsageSection } from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import AuthorByline from '../components/AuthorByline';
import AeoDirectAnswer from '../components/AeoDirectAnswer';
import CopyableHex from '../forest-green-hex-code/CopyableHex';
import { getContrastRatio } from '../../tools/color-palette-preview/lib/contrastUtils';

const LAST_MODIFIED = '2026-11-09T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/instagram-dark-mode-colors',
  title: 'Instagram Dark Mode Hex Code #000000 — All UI Colors, Gradient & Contrast',
  description:
    'Instagram dark mode hex codes: background #000000, surface #121212, elevated #262626, text #FFFFFF, blue #0095F6, and 5-stop gradient — with WCAG contrast ratios.',
  keywords: [
    'instagram dark mode colors',
    'instagram dark mode hex code',
    'instagram color palette',
    'instagram gradient hex codes',
    'instagram background color',
    'instagram UI colors',
    '#0095F6',
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
  'Instagram Dark Mode Hex Code #000000 — All UI Colors, Gradient & Contrast',
  'Instagram dark mode hex codes: background #000000, surface #121212, elevated #262626, text #FFFFFF, blue #0095F6, and 5-stop gradient — with WCAG contrast ratios.',
  'instagram-dark-mode-colors',
  getBlogArticleDatePublished('instagram-dark-mode-colors')
);

const MAIN_BG = '#000000';
const SURFACE_BG = '#121212';

const QUICK_ROWS = [
  { label: 'Main background (OLED)', value: '#000000' },
  { label: 'Surface / bottom sheet', value: '#121212' },
  { label: 'Elevated menu / pill', value: '#262626' },
  { label: 'Text primary', value: '#FFFFFF' },
  { label: 'Text secondary', value: '#A8A8A8' },
  { label: 'Instagram blue', value: '#0095F6' },
];

const FULL_INSTAGRAM_COLORS = [
  { name: 'Main background', hex: '#000000', kind: 'surface', role: 'True-black OLED feed, Reels, and Stories canvas' },
  { name: 'Surface / bottom sheet', hex: '#121212', kind: 'surface', role: 'Comment drawers, profile cards, modal sheets' },
  { name: 'Secondary surface', hex: '#1A1A1A', kind: 'surface', role: 'Search bar fill, grouped settings rows' },
  { name: 'Elevated surface', hex: '#262626', kind: 'surface', role: 'Action menus, secondary buttons ("Following", "Message")' },
  { name: 'Border / hairline divider', hex: '#363636', kind: 'surface', role: '1px post separators, avatar outlines' },
  { name: 'Text primary (mobile)', hex: '#FFFFFF', kind: 'text', role: 'Usernames, post copy, navigation icons' },
  { name: 'Text primary (web)', hex: '#F5F5F5', kind: 'text', role: 'Softened primary text on desktop web client' },
  { name: 'Text secondary', hex: '#A8A8A8', kind: 'text', role: 'Timestamps, "View all comments", follower labels' },
  { name: 'Text muted / hint', hex: '#737373', kind: 'text', role: 'Input placeholders, footer links, subtle metadata' },
  { name: 'Primary action blue', hex: '#0095F6', kind: 'accent', role: 'Follow button, inline @mentions & #hashtags', note: 'White #FFFFFF on #0095F6 button = 3.29:1 (AA Large)' },
  { name: 'Pressed / link blue', hex: '#1877F2', kind: 'accent', role: 'Pressed state on primary blue buttons', note: 'White #FFFFFF on #1877F2 = 4.15:1' },
  { name: 'Like / notification red', hex: '#ED4956', kind: 'accent', role: 'Heart double-tap, unread activity dot, destructive actions' },
  { name: 'Close Friends green', hex: '#1CD14F', kind: 'accent', role: 'Close Friends story ring & badge fill' },
];

const IG_GRADIENT = [
  { name: 'Gradient stop 1 — Warm Yellow', hex: '#FEDA77', kind: 'accent', role: '0% stop (bottom-left of story ring)' },
  { name: 'Gradient stop 2 — Sunset Orange', hex: '#F58529', kind: 'accent', role: '25% stop (warm lower-mid transition)' },
  { name: 'Gradient stop 3 — Brand Magenta', hex: '#DD2A7B', kind: 'accent', role: '50% stop (center signature pink-magenta)' },
  { name: 'Gradient stop 4 — Royal Purple', hex: '#8134AF', kind: 'accent', role: '75% stop (upper-right violet transition)' },
  { name: 'Gradient stop 5 — Deep Indigo Blue', hex: '#515BD4', kind: 'accent', role: '100% stop (top-right cool anchor)' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#000000', colorName: 'Background', rgbCode: 'rgb(0, 0, 0)' },
  { hexCode: '#121212', colorName: 'Surface', rgbCode: 'rgb(18, 18, 18)' },
  { hexCode: '#262626', colorName: 'Elevated', rgbCode: 'rgb(38, 38, 38)' },
  { hexCode: '#0095F6', colorName: 'Blue', rgbCode: 'rgb(0, 149, 246)' },
  { hexCode: '#DD2A7B', colorName: 'Magenta', rgbCode: 'rgb(221, 42, 123)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'True-black photo & video feed',
    body: 'Mirror Instagram’s zero-hue neutral stack (#000000 canvas, #121212 sheets, #262626 secondary pills) so user photography and video grading never pick up a color cast from surrounding UI.',
    swatches: ['#000000', '#121212', '#262626', '#0095F6', '#A8A8A8'],
  },
  {
    title: 'Story-ring gradient accent system',
    body: 'Keep 95% of the interface achromatic (#000000 to #262626), then apply the 5-stop gradient (#FEDA77 → #DD2A7B → #515BD4) exclusively to unread avatar rings, live badges, and primary launch CTAs.',
    swatches: ['#FEDA77', '#F58529', '#DD2A7B', '#8134AF', '#515BD4'],
  },
  {
    title: 'Creator analytics & engagement dashboard',
    body: 'Use #000000 for the outer frame, #121212 for metric cards, #0095F6 for reach/growth series, #ED4956 for likes/alerts, and #1CD14F for positive conversion deltas.',
    swatches: ['#000000', '#121212', '#0095F6', '#ED4956', '#1CD14F'],
  },
];

const CSS_GRADIENT_SNIPPET = `:root[data-theme="instagram-dark"] {
  --ig-bg-canvas: #000000;
  --ig-bg-surface: #121212;
  --ig-bg-input: #1a1a1a;
  --ig-bg-elevated: #262626;
  --ig-border: #363636;

  --ig-text-primary: #f5f5f5;   /* 19.26:1 on #000000 (AAA) */
  --ig-text-secondary: #a8a8a8; /* 8.94:1 on #000000 (AAA) */
  --ig-text-muted: #737373;     /* 4.44:1 on #000000 */

  --ig-blue: #0095f6;           /* 6.38:1 as link text on #000000 (AA) */
  --ig-like-red: #ed4956;       /* 5.21:1 on #000000 (AA) */
  --ig-story-gradient: linear-gradient(
    45deg,
    #feda77 0%,
    #f58529 25%,
    #dd2a7b 50%,
    #8134af 75%,
    #515bd4 100%
  );
}

/* Dark-mode story ring with #000000 inner cutout */
.story-avatar-ring {
  padding: 2px;
  border-radius: 9999px;
  background: var(--ig-story-gradient);
}
.story-avatar-ring > img {
  border: 2px solid var(--ig-bg-canvas);
  border-radius: 9999px;
}`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Instagram dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram dark mode uses true black #000000 for the main feed and Stories canvas, #121212 for bottom sheets and cards, #1A1A1A for search inputs, and #262626 for elevated menus and secondary buttons ("Following", "Message").',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Instagram blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram’s primary action blue (Follow button, inline @mentions, and active links) is #0095F6 (rgb(0, 149, 246)), which achieves a 6.38:1 WCAG AA contrast ratio as text on #000000. Pressed states use #1877F2.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Instagram gradient hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 5-stop Instagram story-ring gradient runs at a 45-degree angle from #FEDA77 (yellow) → #F58529 (orange) → #DD2A7B (magenta) → #8134AF (purple) → #515BD4 (indigo blue). Close Friends story rings use solid green #1CD14F.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does Instagram use pure black #000000 instead of dark gray?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unlike text-heavy chat apps that use tinted grays (#313338), Instagram is a visual media platform. Achromatic true black (#000000) turns off OLED pixels completely, eliminates bezel boundaries around 4:5 photos and 9:16 Reels, and prevents simultaneous-contrast color casts from shifting skin tones in user photography.',
      },
    },
  ],
};

function formatRatio(value) {
  return `${value.toFixed(2)}:1`;
}

function wcagLevel(value) {
  if (value >= 7) return { label: 'AAA', tone: 'good' };
  if (value >= 4.5) return { label: 'AA', tone: 'good' };
  if (value >= 3) return { label: 'AA Large', tone: 'warn' };
  return { label: 'Step / Fill', tone: 'neutral' };
}

const TONE_CLASSES = {
  good: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
  warn: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
  neutral: 'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700',
};

function LevelBadge({ value }) {
  const level = wcagLevel(value);
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold whitespace-nowrap ${TONE_CLASSES[level.tone]}`}>
      {level.label}
    </span>
  );
}

function ColorTable({ title, description, rows, showSurfaceColumn = false }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">On #000000</th>
              {showSurfaceColumn ? (
                <th className="px-4 py-2.5 sm:px-5 font-semibold hidden md:table-cell">On #121212</th>
              ) : null}
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const onBlack = getContrastRatio(row.hex, MAIN_BG);
              const onSurface = getContrastRatio(row.hex, SURFACE_BG);
              const isRated = row.kind === 'text' || row.kind === 'accent';
              return (
                <tr key={row.hex + row.name} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40 align-top">
                  <td className="px-4 py-3 sm:px-5 w-16">
                    <div
                      className="h-9 w-12 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner"
                      style={{ backgroundColor: row.hex }}
                      aria-hidden
                    />
                  </td>
                  <td className="px-4 py-3 sm:px-5 font-medium text-gray-900 dark:text-white">
                    {row.name}
                    {row.note ? <div className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-0.5">{row.note}</div> : null}
                  </td>
                  <td className="px-4 py-3 sm:px-5 text-gray-800 dark:text-gray-200 whitespace-nowrap">
                    <CopyableHex hex={row.hex} />
                  </td>
                  <td className="px-4 py-3 sm:px-5 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {row.hex === MAIN_BG ? (
                      <span className="text-gray-400 dark:text-gray-500">base</span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="font-mono">{formatRatio(onBlack)}</span>
                        {isRated ? <LevelBadge value={onBlack} /> : null}
                      </span>
                    )}
                  </td>
                  {showSurfaceColumn ? (
                    <td className="px-4 py-3 sm:px-5 whitespace-nowrap text-gray-700 dark:text-gray-300 hidden md:table-cell">
                      {row.hex === SURFACE_BG ? (
                        <span className="text-gray-400 dark:text-gray-500">base</span>
                      ) : (
                        <span className="font-mono">{formatRatio(onSurface)}</span>
                      )}
                    </td>
                  ) : null}
                  <td className="px-4 py-3 sm:px-5 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{row.role}</td>
                </tr>
              );
            })}
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

export default function InstagramDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="instagram-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-pink-100 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Instagram Dark Mode Colors: #000000 Canvas, #0095F6 Blue &amp; Story Gradient
            </h1>
            <AeoDirectAnswer
              question="What is the Instagram dark mode hex code?"
              answer="Instagram dark mode uses a true-black #000000 background, #121212 sheets, #262626 elevated buttons/menus, #FFFFFF/#F5F5F5 primary text, #A8A8A8 secondary text, and #0095F6 action blue. The story-ring gradient runs #FEDA77 → #F58529 → #DD2A7B → #8134AF → #515BD4."
              codes={[
                { label: 'Background', value: '#000000' },
                { label: 'Blue', value: '#0095F6' },
                { label: 'Magenta', value: '#DD2A7B' },
              ]}
            />
            <p className="text-white/95 text-lg max-w-3xl mb-6">
              Copy every Instagram dark mode hex code—true-black canvas <strong className="text-white font-semibold">#000000</strong>, elevated surfaces{' '}
              <strong className="text-white font-semibold">#121212</strong> and <strong className="text-white font-semibold">#262626</strong>, action blue{' '}
              <strong className="text-white font-semibold">#0095F6</strong>, and the 5-stop <strong className="text-white font-semibold">Story ring gradient</strong>—with WCAG 2.1 contrast ratios.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#000000]"
              role="img"
              aria-label="Instagram dark mode true black background color 000000"
            />
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap text-white/90 text-sm">
              <AuthorByline />
              <time dateTime="2026-11-09">Updated November 9, 2026</time>
              <span>•</span>
              <span>6 min read</span>
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
                  theme="purple"
                  ariaLabel="Instagram dark mode quick copy colors"
                  headline="Instagram Dark Mode — Quick Copy"
                  subtext="Backgrounds, blue accent, and text tokens from Instagram dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    Why Instagram Uses True Black (#000000) Instead of Dark Gray
                  </h2>
                  <p className="mb-4">
                    While workspace apps like Discord (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#313338</code>) and Slack (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#1A1D21</code>) use tinted grays to soften long-form text reading, Instagram builds its dark theme on <strong className="text-gray-900 dark:text-white">pure achromatic black (#000000)</strong> for two optical reasons:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Zero simultaneous-contrast color cast:</strong> Every surface in Instagram&apos;s dark palette is strictly achromatic (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">R = G = B</code>: <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#121212</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#1A1A1A</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#262626</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#363636</code>). A blue-gray or warm-gray background would shift how human eyes perceive skin tones and white balance in photographers&apos; 4:5 portraits and 9:16 Reels.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Frameless OLED immersion:</strong> On iPhone and Android OLED panels, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code> switches pixels completely off. Letterboxed videos and carousel frames merge seamlessly into the physical hardware bezel rather than sitting inside a glowing gray rectangle.
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Surface Elevation Steps on a #000000 Canvas
                  </h2>
                  <p className="mb-6">
                    Because you cannot cast a visible dark drop shadow onto <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code>, Instagram separates overlays and interactive controls using larger luminance jumps than gray-based apps: bottom sheets and comment drawers step up to <strong className="text-gray-900 dark:text-white">#121212</strong> (1.13:1 against black), search bars use <strong className="text-gray-900 dark:text-white">#1A1A1A</strong> (1.24:1), secondary action pills (&ldquo;Following&rdquo;, &ldquo;Message&rdquo;) and popovers jump to <strong className="text-gray-900 dark:text-white">#262626</strong> (1.43:1), and 1px structural dividers sit at <strong className="text-gray-900 dark:text-white">#363636</strong> (1.77:1).
                  </p>
                </div>

                <ColorTable
                  title="Full Instagram Dark Mode UI Palette + WCAG Contrast"
                  description="All neutral surfaces, typography tokens, and action colors measured against #000000 (feed canvas) and #121212 (sheets/cards)."
                  rows={FULL_INSTAGRAM_COLORS}
                  showSurfaceColumn
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    WCAG Contrast Analysis: Why #0095F6 Works as a Link Yet Needs Care on Buttons
                  </h2>
                  <p className="mb-4">
                    Inspecting the contrast table above highlights an important distinction for UI engineers borrowing Instagram&apos;s action blue (<strong className="text-gray-900 dark:text-white">#0095F6</strong>):
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">As text on dark surfaces (Passes AA):</strong> When <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0095F6</code> is used for inline <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">@mentions</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#hashtags</code>, or text-only &ldquo;Follow&rdquo; links, it achieves <strong className="text-gray-900 dark:text-white">6.38:1</strong> on <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code> and <strong className="text-gray-900 dark:text-white">5.64:1</strong> on <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#121212</code>—comfortably passing the 4.5:1 WCAG AA requirement for normal body text.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">As a filled button background with white text (3.29:1):</strong> Because <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0095F6</code> is bright enough to read against black, placing white <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FFFFFF</code> text inside a solid <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0095F6</code> Follow button yields <strong className="text-gray-900 dark:text-white">3.29:1</strong> (passing only the 3:1 large/bold threshold). If your product requires strict 4.5:1 AA on 14px button labels, use <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0095F6</code> for links on dark backgrounds and darken solid button fills to <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0074CC</code> (5.01:1 with white text).
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Desktop Web vs. Mobile App primary text:</strong> On iOS and Android, Instagram uses pure <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FFFFFF</code> (21:1) for usernames and captions, while the desktop web client softens primary text to <strong className="text-gray-900 dark:text-white">#F5F5F5</strong> (19.26:1) to reduce halation on large desktop monitors. Secondary text <strong className="text-gray-900 dark:text-white">#A8A8A8</strong> clears WCAG AAA on both canvas (<strong className="text-gray-900 dark:text-white">8.94:1</strong>) and sheets (<strong className="text-gray-900 dark:text-white">7.91:1</strong>).
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Instagram Story-Ring Gradient Hex Codes &amp; CSS Implementation
                  </h2>
                  <p className="mb-6">
                    Because Instagram&apos;s dark UI is otherwise completely achromatic, the 5-stop Story ring gradient carries nearly all of the brand&apos;s warmth. It transitions at a 45° angle from lower-left warm yellow (<strong className="text-gray-900 dark:text-white">#FEDA77</strong>) through sunset orange (<strong className="text-gray-900 dark:text-white">#F58529</strong>), signature magenta (<strong className="text-gray-900 dark:text-white">#DD2A7B</strong>), and royal purple (<strong className="text-gray-900 dark:text-white">#8134AF</strong>) to cool indigo (<strong className="text-gray-900 dark:text-white">#515BD4</strong>).
                  </p>
                </div>

                <ColorTable
                  title="Instagram 5-Stop Story Gradient Hex Codes"
                  description="Ordered from 0% (bottom-left warm yellow) to 100% (top-right indigo blue) along a 45-degree axis."
                  rows={IG_GRADIENT}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Copy-Ready CSS Tokens &amp; Dark-Mode Avatar Ring
                  </h2>
                  <p className="mb-4">
                    A common mistake when implementing Instagram-style story rings in dark mode is leaving a white inner gap border around the avatar image. In dark mode, the inner separator border must switch to <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">var(--ig-bg-canvas)</code> (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code>) so the cutout blends into the feed background:
                  </p>
                  <pre className="not-prose rounded-xl bg-gray-900 text-gray-100 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto border border-gray-700 mb-6">
                    <code>{CSS_GRADIENT_SNIPPET}</code>
                  </pre>
                  <p className="mb-6">
                    True black saves battery on OLED phones, though some web teams prefer starting at <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#121212</code> on desktop to avoid black smearing during fast scroll. Verify any custom text pairs with our{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>, and compare with{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/whatsapp-dark-mode-colors">WhatsApp</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/youtube-dark-mode-colors">YouTube</InlineTagLink>, and our{' '}
                    <InlineTagLink href="/blog/app-dark-mode-colors">12-app dark mode comparison</InlineTagLink>.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Instagram Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt Instagram dark mode colors for social, media, and creator products.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why Instagram Dark Mode Works">
                  <p>
                    Instagram uses strictly achromatic black and gray surfaces (#000000, #121212, #262626) so user photos and videos become the entire color experience, with UI chrome receding into the OLED bezel. Reserving #0095F6 blue for primary actions and the 5-stop gradient for active Stories gives those two cues instant visual priority.
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
                        Start from Instagram neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-pink-400 hover:bg-white hover:text-pink-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-pink-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
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

                  <EnvatoAffiliateBanner
                    variant="uiKits"
                    title="Building a social app or dark UI?"
                    description="Save weeks of design work. Download 10,000+ social media Figma kits, mobile app design systems, and dark theme components on Envato Elements."
                    ctaText="Explore Mobile & UI Kits on Envato"
                  />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Instagram dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Instagram dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
