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
  path: '/blog/youtube-dark-mode-colors',
  title: 'YouTube Dark Mode Hex Codes: #0F0F0F, #272727 & UI Contrast Ratios',
  description:
    'YouTube dark mode hex codes: background #0F0F0F, elevated #212121, pill chips #272727, text #F1F1F1/#AAAAAA, and YouTube red #FF0000 — with WCAG contrast & CSS tokens.',
  keywords: [
    'youtube dark mode colors',
    'youtube dark mode hex code',
    'youtube background color',
    'youtube dark theme hex',
    'youtube color palette',
    'youtube UI colors',
    '#0F0F0F',
    '#272727',
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
  'YouTube Dark Mode Hex Codes: #0F0F0F, #272727 & UI Contrast Ratios',
  'YouTube dark mode hex codes: background #0F0F0F, elevated #212121, pill chips #272727, text #F1F1F1/#AAAAAA, and YouTube red #FF0000 — with WCAG contrast & CSS tokens.',
  'youtube-dark-mode-colors',
  getBlogArticleDatePublished('youtube-dark-mode-colors')
);

const MAIN_BG = '#0F0F0F';
const CHIP_BG = '#272727';

const QUICK_ROWS = [
  { label: 'Main background', value: '#0F0F0F' },
  { label: 'Drawer / menu surface', value: '#212121' },
  { label: 'Action pill / chip', value: '#272727' },
  { label: 'Text primary', value: '#F1F1F1' },
  { label: 'Text secondary', value: '#AAAAAA' },
  { label: 'YouTube brand red', value: '#FF0000' },
];

const FULL_YOUTUBE_COLORS = [
  { name: 'Video letterbox black', hex: '#000000', kind: 'surface', role: 'Player cinema bars & OLED fullscreen backdrop' },
  { name: 'Main background', hex: '#0F0F0F', kind: 'surface', role: 'Primary watch page & home feed canvas (base)' },
  { name: 'Search input well', hex: '#121212', kind: 'surface', role: 'Recessed search bar fill inside top masthead' },
  { name: 'Elevated menu / drawer', hex: '#212121', kind: 'surface', role: 'Left guide drawer, dropdown menus, modal dialogs' },
  { name: 'Pill button / filter chip', hex: '#272727', kind: 'surface', role: 'Like/Share pills, description box, unselected category chips' },
  { name: 'Chip hover / active surface', hex: '#3F3F3F', kind: 'surface', role: 'Hovered action pills & pressed surface states' },
  { name: 'Border / divider', hex: '#303030', kind: 'surface', role: 'Search bar outline, 1px section dividers' },
  { name: 'Text primary (pure)', hex: '#FFFFFF', kind: 'text', role: 'Active chip label, modal titles, player controls' },
  { name: 'Text primary (body)', hex: '#F1F1F1', kind: 'text', role: 'Video titles, channel names, comment copy, Subscribe pill fill', note: '#0F0F0F text on #F1F1F1 Subscribe pill = 17.16:1 (AAA)' },
  { name: 'Text secondary', hex: '#AAAAAA', kind: 'text', role: 'View counts, upload timestamps, subscriber counts' },
  { name: 'Text disabled / icon muted', hex: '#717171', kind: 'text', role: 'Inactive icons, subtle metadata hints' },
  { name: 'YouTube brand red', hex: '#FF0000', kind: 'accent', role: 'Logo icon, video progress scrubber, notification badge', note: 'White #FFFFFF on #FF0000 = 4.00:1 (AA Large only)' },
  { name: 'Live badge crimson', hex: '#CC0000', kind: 'accent', role: 'Solid LIVE stream pill background', note: 'White #FFFFFF on #CC0000 = 5.89:1 (AA)' },
  { name: 'Link / hashtag blue', hex: '#3EA6FF', kind: 'text', role: 'Description links, timestamps (02:15), and #hashtags' },
];

const LEGACY_VS_CURRENT = [
  { role: 'Main page background', legacy: '#181818', current: '#0F0F0F', shift: 'Darkened (-3.5% L) so Ambient Mode video glow stands out' },
  { role: 'Top masthead & sidebar', legacy: '#202020', current: '#0F0F0F', shift: 'Unified with main canvas for a borderless cinema feel' },
  { role: 'Action buttons & chips', legacy: '#373737', current: '#272727', shift: 'Rounded into pill shapes with #3F3F3F hover state' },
  { role: 'Subscribe button (dark mode)', legacy: '#CC0000', current: '#F1F1F1', shift: 'Switched from red fill to high-contrast off-white pill (#0F0F0F text)' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#0F0F0F', colorName: 'Background', rgbCode: 'rgb(15, 15, 15)' },
  { hexCode: '#212121', colorName: 'Elevated', rgbCode: 'rgb(33, 33, 33)' },
  { hexCode: '#272727', colorName: 'Pill / Chip', rgbCode: 'rgb(39, 39, 39)' },
  { hexCode: '#FF0000', colorName: 'Brand Red', rgbCode: 'rgb(255, 0, 0)' },
  { hexCode: '#F1F1F1', colorName: 'Primary Text', rgbCode: 'rgb(241, 241, 241)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Cinema streaming & VOD platform',
    body: 'Use #000000 for the video viewport, #0F0F0F for the surrounding watch page, #272727 for metadata drawers and action pills, #F1F1F1 for high-contrast titles, and #FF0000 strictly for the playback scrubber.',
    swatches: ['#000000', '#0F0F0F', '#272727', '#F1F1F1', '#FF0000'],
  },
  {
    title: 'Creator studio & video analytics',
    body: 'Pair #0F0F0F background and #212121 metric cards with #3EA6FF for interactive chart lines, #AAAAAA for axis labels, and #CC0000 for live-stream status alerts.',
    swatches: ['#0F0F0F', '#212121', '#AAAAAA', '#3EA6FF', '#CC0000'],
  },
  {
    title: 'High-contrast pill navigation system',
    body: 'Replicate YouTube’s filter bar: unselected chips use #272727 with #F1F1F1 text (11.75:1), hovered chips step to #3F3F3F, and the selected chip inverts to #F1F1F1 fill with #0F0F0F text (17.16:1).',
    swatches: ['#0F0F0F', '#272727', '#3F3F3F', '#AAAAAA', '#F1F1F1'],
  },
];

const CSS_TOKENS_SNIPPET = `:root[data-theme="youtube-dark"] {
  /* Strictly achromatic neutral ramp (R = G = B) */
  --yt-bg-player: #000000;
  --yt-bg-base: #0f0f0f;
  --yt-bg-search: #121212;
  --yt-bg-elevated: #212121;    /* Guide drawer & menus */
  --yt-bg-chip: #272727;        /* Like/Share pills & description card */
  --yt-bg-chip-hover: #3f3f3f;
  --yt-border: #303030;

  /* Typography */
  --yt-text-primary: #f1f1f1;   /* 17.16:1 on #0f0f0f (AAA) */
  --yt-text-secondary: #aaaaaa; /* 8.33:1 on #0f0f0f, 5.71:1 on #272727 (AA) */
  --yt-text-disabled: #717171;  /* 3.99:1 on #0f0f0f (icons/large only) */
  --yt-text-link: #3ea6ff;      /* 7.52:1 on #0f0f0f (AAA) */

  /* Brand & live accents */
  --yt-red-brand: #ff0000;      /* Scrubber & logo (4.81:1 on #0f0f0f) */
  --yt-red-live: #cc0000;       /* LIVE badge fill (5.89:1 with #ffffff text) */
}`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the YouTube dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube’s dark mode background is #0F0F0F (rgb(15, 15, 15)). Elevated drawers and menus use #212121, interactive pill buttons and description cards use #272727 (with #3F3F3F on hover), and the recessed search bar uses #121212.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did YouTube change its dark mode color from #181818 to #0F0F0F?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. YouTube replaced its legacy #181818/#202020 dark theme with #0F0F0F alongside the rollout of Ambient Mode. The deeper #0F0F0F canvas lets radial colors sampled from the video player glow softly without washing out thumbnail contrast.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the YouTube red hex code and why is the Subscribe button white in dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube’s brand red is #FF0000 (rgb(255, 0, 0)), while solid LIVE badges use darker #CC0000 so white text passes WCAG AA (5.89:1 vs 4.00:1 on #FF0000). In dark mode, the Subscribe button uses a high-contrast #F1F1F1 off-white pill with #0F0F0F text (17.16:1 AAA) so #FF0000 stays reserved for the logo and video scrubber.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the YouTube dark mode text colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'YouTube dark mode uses #F1F1F1 for primary video titles and comments (17.16:1 on #0F0F0F), #FFFFFF for active chip labels, #AAAAAA for secondary view counts and timestamps (8.33:1 on #0F0F0F and 5.71:1 on #272727), and #3EA6FF for description links and clickable video chapters.',
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

function YouTubeFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full YouTube Dark Mode Color Palette + WCAG Contrast</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Every surface, pill chip, text token, and red/blue accent measured against the main canvas (#0F0F0F) and pill chip surface (#272727).
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">On #0F0F0F</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden md:table-cell">On #272727</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {FULL_YOUTUBE_COLORS.map((row) => {
              const onMain = getContrastRatio(row.hex, MAIN_BG);
              const onChip = getContrastRatio(row.hex, CHIP_BG);
              const isRated = row.kind === 'text' || row.kind === 'accent';
              return (
                <tr key={row.hex + row.name} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40 align-top">
                  <td className="px-4 py-3 sm:px-5 w-16">
                    <div className="h-9 w-12 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner" style={{ backgroundColor: row.hex }} aria-hidden />
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
                        <span className="font-mono">{formatRatio(onMain)}</span>
                        {isRated ? <LevelBadge value={onMain} /> : null}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 sm:px-5 whitespace-nowrap text-gray-700 dark:text-gray-300 hidden md:table-cell">
                    {row.hex === CHIP_BG ? (
                      <span className="text-gray-400 dark:text-gray-500">base</span>
                    ) : (
                      <span className="font-mono">{formatRatio(onChip)}</span>
                    )}
                  </td>
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

function LegacyYouTubeTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">Legacy YouTube Dark (#181818) vs. Ambient-Era Dark (#0F0F0F)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          How YouTube darkened its surface tokens to support Ambient Mode and pill-shaped UI controls.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">UI Component</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Legacy Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Current Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Why It Changed</th>
            </tr>
          </thead>
          <tbody>
            {LEGACY_VS_CURRENT.map((item) => (
              <tr key={item.role} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0">
                <td className="px-4 py-3 sm:px-5 font-medium text-gray-900 dark:text-white">{item.role}</td>
                <td className="px-4 py-3 sm:px-5 whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border border-gray-300 dark:border-gray-600" style={{ backgroundColor: item.legacy }} aria-hidden />
                    <CopyableHex hex={item.legacy} />
                  </span>
                </td>
                <td className="px-4 py-3 sm:px-5 whitespace-nowrap">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-4 w-4 rounded border border-gray-300 dark:border-gray-600" style={{ backgroundColor: item.current }} aria-hidden />
                    <CopyableHex hex={item.current} />
                  </span>
                </td>
                <td className="px-4 py-3 sm:px-5 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{item.shift}</td>
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              YouTube Dark Mode Colors: #0F0F0F Canvas, #272727 Pills &amp; Contrast Ratios
            </h1>
            <AeoDirectAnswer
              question="What is the YouTube dark mode hex code?"
              answer="YouTube dark mode uses achromatic near-black #0F0F0F for the main background, #212121 for drawers/menus, #272727 for action pills and filter chips, #F1F1F1 for primary titles, #AAAAAA for view counts/dates, #3EA6FF for description links, and #FF0000 for YouTube red."
              codes={[
                { label: 'Background', value: '#0F0F0F' },
                { label: 'Pill / Chip', value: '#272727' },
                { label: 'YouTube Red', value: '#FF0000' },
              ]}
            />
            <p className="text-red-100/95 text-lg max-w-3xl mb-6">
              Copy every YouTube dark mode hex code—cinema canvas <strong className="text-white font-semibold">#0F0F0F</strong>, elevated drawer{' '}
              <strong className="text-white font-semibold">#212121</strong>, pill chip <strong className="text-white font-semibold">#272727</strong>, and YouTube red{' '}
              <strong className="text-white font-semibold">#FF0000</strong>—with full WCAG 2.1 contrast analysis for video and media UIs.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#0F0F0F]" role="img" aria-label="YouTube dark mode background 0F0F0F" />
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap text-red-200/90 text-sm">
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
                  theme="navy"
                  ariaLabel="YouTube dark mode quick copy"
                  headline="YouTube Dark Mode — Quick Copy"
                  subtext="Backgrounds, pill chips, red accent, and text tokens. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for YouTube Dark Mode?</h2>
                  <p className="mb-4">
                    YouTube&apos;s primary dark mode background is <strong className="text-gray-900 dark:text-white">#0F0F0F</strong> (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">rgb(15, 15, 15)</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">hsl(0°, 0%, 6%)</code>)—an achromatic near-black that sits just 6% above pure black (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code>). Unlike Discord (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#313338</code>) or WhatsApp (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#111B21</code>), every neutral surface in YouTube&apos;s dark palette has <strong className="text-gray-900 dark:text-white">0% saturation (R = G = B)</strong>.
                  </p>
                  <p className="mb-6">
                    Why strictly zero hue bias? Because YouTube is a color-critical video player and Ambient Mode canvas. When Ambient Mode samples subtle warm or cool light from the outer edges of a video frame and diffuses it onto the watch page backdrop, an underlying blue or warm tint in the base gray would muddy the ambient light and distort color grading inside thumbnails.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Why YouTube Darkened Its Background from #181818 to #0F0F0F
                  </h2>
                  <p className="mb-6">
                    From 2017 to late 2022, YouTube&apos;s dark theme used <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#181818</code> for the feed background and <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#202020</code> for the top navigation bar. During the Ambient Mode redesign, YouTube unified the masthead, sidebar, and watch canvas into a single <strong className="text-gray-900 dark:text-white">#0F0F0F</strong> plane and introduced rounded <strong className="text-gray-900 dark:text-white">#272727</strong> pill containers for Like, Share, Download, and description cards. Stepping directly from <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0F0F0F</code> to <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#272727</code> creates a 1.32:1 surface contrast—strong enough that pill buttons need no borders or shadows.
                  </p>
                </div>

                <YouTubeFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    WCAG Contrast Audit: Why the Subscribe Button Turned White (#F1F1F1) in Dark Mode
                  </h2>
                  <p className="mb-4">
                    Examining the contrast ratios in the table above explains two major color engineering decisions in YouTube&apos;s current dark UI:
                  </p>
                  <ul className="list-disc pl-6 space-y-2.5 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Why #FF0000 isn&apos;t used for small button text:</strong> Pure YouTube Red (<strong className="text-gray-900 dark:text-white">#FF0000</strong>) achieves <strong className="text-gray-900 dark:text-white">4.81:1</strong> against the <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0F0F0F</code> canvas (great for the playhead scrubber line and logo icon), but white <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FFFFFF</code> text inside a solid <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FF0000</code> button only reaches <strong className="text-gray-900 dark:text-white">4.00:1</strong>—falling short of the 4.5:1 WCAG AA requirement for normal-weight 14px text. For LIVE badges that require white text on red, YouTube darkens the red fill to <strong className="text-gray-900 dark:text-white">#CC0000</strong>, which lifts white text contrast to <strong className="text-gray-900 dark:text-white">5.89:1 (AA)</strong>.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">The #F1F1F1 Subscribe pill:</strong> By switching the primary Subscribe button in dark mode to an off-white <strong className="text-gray-900 dark:text-white">#F1F1F1</strong> fill with <strong className="text-gray-900 dark:text-white">#0F0F0F</strong> text, YouTube achieves a massive <strong className="text-gray-900 dark:text-white">17.16:1 (AAA)</strong> contrast ratio while preventing a bright red button below the player from pulling your eye away from the video itself.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Secondary text (#AAAAAA) works on both canvas and pills:</strong> <strong className="text-gray-900 dark:text-white">#AAAAAA</strong> measures <strong className="text-gray-900 dark:text-white">8.33:1 (AAA)</strong> on the <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0F0F0F</code> feed background and <strong className="text-gray-900 dark:text-white">5.71:1 (AA)</strong> inside <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#272727</code> description boxes and filter chips—allowing a single secondary text token to work safely across every elevation layer.
                    </li>
                  </ul>
                </div>

                <LegacyYouTubeTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Copy-Ready CSS Custom Properties for Video &amp; Media Apps
                  </h2>
                  <p className="mb-4">
                    Drop these CSS variables into your media player, portfolio, or streaming dashboard to replicate YouTube&apos;s neutral elevation ramp and accessible text tokens:
                  </p>
                  <pre className="not-prose rounded-xl bg-gray-900 text-gray-100 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto border border-gray-700 mb-6">
                    <code>{CSS_TOKENS_SNIPPET}</code>
                  </pre>
                  <p className="mb-6">
                    Check any custom accent colors in our{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>, and compare YouTube&apos;s cinema-black palette with{' '}
                    <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/whatsapp-dark-mode-colors">WhatsApp</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/app-dark-mode-colors#spotify">Spotify</InlineTagLink>, and our{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">YouTube Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt YouTube&apos;s #0F0F0F cinema canvas and #272727 pill architecture for streaming, creator, and media products.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why YouTube Dark Mode Works">
                  <p>
                    YouTube keeps UI chrome strictly achromatic (#0F0F0F, #212121, #272727) so video thumbnails and Ambient Mode lighting own the color palette. High-intent CTAs like Subscribe use luminance contrast (#F1F1F1 pill on #0F0F0F) rather than competing hues, leaving #FF0000 and #CC0000 exclusively for playback progress and live broadcasts.
                  </p>
                  <p>
                    For broader dark UI theory and accessible token naming, see our{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette guide</InlineTagLink>.
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

                  <section className="not-prose mb-8">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Build your own dark palette</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5">
                        Start from YouTube&apos;s cinema neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-red-400 hover:bg-white hover:text-red-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-red-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
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
                    title="Building a video app, dashboard, or dark UI?"
                    description="Speed up production with 10,000+ dark mode Figma UI kits, media player components, and web templates on Envato Elements."
                    ctaText="Explore Dark Mode & UI Kits on Envato"
                  />
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
