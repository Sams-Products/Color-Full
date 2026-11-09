import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import ColorPaletteClient from '../[slug]/ColorPaletteClient';
import {
  PaletteQuickAnswer,
  PaletteUiUsageSection,
} from '../components/PaletteReferenceBlocks';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
} from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import AuthorByline from '../components/AuthorByline';
import EnvatoAffiliateBanner from '../../components/EnvatoAffiliateBanner';
import CopyableHex from '../forest-green-hex-code/CopyableHex';
import { getContrastRatio } from '../../tools/color-palette-preview/lib/contrastUtils';

const LAST_MODIFIED = '2026-11-09T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/discord-dark-mode-colors',
  title: 'Discord Dark Mode Hex Code #313338 — All UI Colors & Contrast Ratios',
  description:
    'Discord dark mode hex codes: main background #313338, sidebar #2B2D31, server rail #1E1F22, text #DBDEE1, and blurple #5865F2 — with WCAG contrast ratios and CSS tokens.',
  keywords: [
    'discord dark mode color',
    'discord dark mode hex code',
    'discord dark theme hex',
    'discord background color',
    'discord dark mode palette',
    'discord UI colors',
    'discord blurple hex code',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-05T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});

const articleSchema = getBlogArticleSchema(
  'Discord Dark Mode Hex Code #313338 — All UI Colors & Contrast Ratios',
  'Discord dark mode hex codes: main background #313338, sidebar #2B2D31, server rail #1E1F22, text #DBDEE1, and blurple #5865F2 — with WCAG contrast ratios and CSS tokens.',
  'discord-dark-mode-colors',
  getBlogArticleDatePublished('discord-dark-mode-colors')
);

const MAIN_BG = '#313338';
const SIDEBAR_BG = '#2B2D31';

const QUICK_ROWS = [
  { label: 'Main background (Ash)', value: '#313338' },
  { label: 'Channel sidebar', value: '#2B2D31' },
  { label: 'Server rail / darkest', value: '#1E1F22' },
  { label: 'Message composer', value: '#383A40' },
  { label: 'Text primary', value: '#DBDEE1' },
  { label: 'Blurple accent', value: '#5865F2' },
];

const FULL_DISCORD_COLORS = [
  { name: 'App frame (outermost)', hex: '#111214', kind: 'surface', role: 'Window title bar & deepest shell' },
  { name: 'Server rail / modal well', hex: '#1E1F22', kind: 'surface', role: 'Leftmost server icon rail, recessed wells' },
  { name: 'Sidebar / secondary bg', hex: '#2B2D31', kind: 'surface', role: 'Channel list, member list, user dock' },
  { name: 'Main chat background', hex: '#313338', kind: 'surface', role: 'Primary message canvas (base)' },
  { name: 'Message composer / hover', hex: '#383A40', kind: 'surface', role: 'Chat input bar, message hover highlight' },
  { name: 'Border / subtle divider', hex: '#3F4147', kind: 'surface', role: '1px dividers, card outlines' },
  { name: 'Text header', hex: '#F2F3F5', kind: 'text', role: 'Server names, modal titles, unread channels' },
  { name: 'Text primary', hex: '#DBDEE1', kind: 'text', role: 'Message body copy, active channel labels' },
  { name: 'Text secondary', hex: '#B5BAC1', kind: 'text', role: 'Subheadings, member names, reaction counts' },
  { name: 'Text muted', hex: '#949BA4', kind: 'text', role: 'Timestamps, input placeholders, read channels' },
  { name: 'Blurple (brand accent)', hex: '#5865F2', kind: 'accent', role: 'Primary buttons, active pills, brand highlights', note: 'White #FFFFFF on #5865F2 = 4.44:1' },
  { name: 'Blurple hover / active', hex: '#4752C4', kind: 'accent', role: 'Button hover and pressed state', note: 'White #FFFFFF on #4752C4 = 5.79:1 (AA)' },
  { name: 'Link cyan-blue', hex: '#00A8FC', kind: 'text', role: 'Inline hyperlinks in chat messages' },
  { name: 'Online green', hex: '#23A559', kind: 'accent', role: 'Online presence badge, voice connected, positive actions' },
  { name: 'Idle yellow', hex: '#F0B232', kind: 'accent', role: 'Idle status indicator, warning banners' },
  { name: 'Do Not Disturb red', hex: '#F23F43', kind: 'accent', role: 'DND status, unread mention badges, destructive buttons' },
];

const LEGACY_VS_CURRENT = [
  { role: 'Main chat canvas', legacy: '#36393F', current: '#313338', shift: 'Darker (-2% L) with slightly cooler blue-violet cast' },
  { role: 'Channel sidebar', legacy: '#2F3136', current: '#2B2D31', shift: 'Stepped down to preserve 1.13:1 separation from #313338' },
  { role: 'Server icon rail', legacy: '#202225', current: '#1E1F22', shift: 'Deeper recess so active server pills stand out cleanly' },
  { role: 'Message input bar', legacy: '#40444B', current: '#383A40', shift: 'Softer lift (+3% L over canvas instead of +4%)' },
  { role: 'Brand Blurple', legacy: '#7289DA', current: '#5865F2', shift: 'Higher saturation (86% vs 58%) introduced in 2021 rebrand' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#313338', colorName: 'Main bg', rgbCode: 'rgb(49, 51, 56)' },
  { hexCode: '#2B2D31', colorName: 'Sidebar', rgbCode: 'rgb(43, 45, 49)' },
  { hexCode: '#1E1F22', colorName: 'Server rail', rgbCode: 'rgb(30, 31, 34)' },
  { hexCode: '#DBDEE1', colorName: 'Text', rgbCode: 'rgb(219, 222, 225)' },
  { hexCode: '#5865F2', colorName: 'Blurple', rgbCode: 'rgb(88, 101, 242)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Multi-pane community chat layout',
    body: 'Replicate Discord’s three-column hierarchy without drop shadows: #1E1F22 far-left icon rail, #2B2D31 channel drawer, #313338 main message stream, #383A40 floating composer, and #5865F2 for primary CTAs.',
    swatches: ['#1E1F22', '#2B2D31', '#313338', '#383A40', '#5865F2'],
  },
  {
    title: 'Discord neutrals + higher-contrast brand accent',
    body: 'Keep Discord’s blue-gray surface stack (#2B2D31 / #313338) and off-white text (#DBDEE1), but swap Blurple for emerald (#10B981) or sky cyan (#38BDF8) when you need an accent that passes 4.5:1 as standalone text.',
    swatches: ['#2B2D31', '#313338', '#DBDEE1', '#38BDF8', '#10B981'],
  },
  {
    title: 'Developer observability & incident dashboard',
    body: 'Pair #1E1F22 navigation and #313338 metric cards with Discord’s semantic presence tokens (#23A559 healthy, #F0B232 degraded, #F23F43 incident) for status badges that stay legible across long shifts.',
    swatches: ['#1E1F22', '#313338', '#23A559', '#F0B232', '#F23F43'],
  },
];

const CSS_TOKENS_SNIPPET = `:root[data-theme="discord-dark"] {
  /* Elevation surfaces (darkest to lightest) */
  --bg-frame: #111214;
  --bg-tertiary: #1e1f22;   /* Server rail & recessed wells */
  --bg-secondary: #2b2d31;  /* Channel & member sidebars */
  --bg-primary: #313338;    /* Main chat canvas */
  --bg-elevated: #383a40;   /* Message composer & hover cards */
  --border-subtle: #3f4147;

  /* Typography */
  --text-header: #f2f3f5;   /* 11.79:1 on #313338 (AAA) */
  --text-normal: #dbdee1;   /* 9.69:1 on #313338 (AAA) */
  --text-muted: #b5bac1;    /* 6.59:1 on #313338 (AA) */
  --text-faint: #949ba4;    /* 4.54:1 on #313338 (AA) */
  --text-link: #00a8fc;     /* 5.04:1 on #313338 (AA) */

  /* Brand & semantic status */
  --brand-blurple: #5865f2;
  --brand-blurple-hover: #4752c4;
  --status-online: #23a559;
  --status-idle: #f0b232;
  --status-dnd: #f23f43;
}`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Discord dark mode background color hex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discord’s default dark mode ("Ash") uses #313338 (rgb(49, 51, 56)) for the main chat background, #2B2D31 for the channel and member sidebars, #1E1F22 for the leftmost server rail, and #383A40 for the message input bar.',
      },
    },
    {
      '@type': 'Question',
      name: 'Did Discord change its dark mode hex code from #36393F to #313338?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Pre-2023 Discord used #36393F for the chat canvas, #2F3136 for sidebars, and #202225 for the server rail. The updated dark theme ("Ash") shifted to #313338, #2B2D31, and #1E1F22 for deeper contrast and cooler blue-gray consistency.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Discord dark mode hex code for text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primary message text is #DBDEE1 (9.69:1 contrast on #313338, WCAG AAA). Headers use #F2F3F5 (11.79:1), secondary labels use #B5BAC1 (6.59:1), timestamps and placeholders use #949BA4 (4.54:1), and inline links use #00A8FC (5.04:1).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Discord blurple hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Discord’s current brand Blurple is #5865F2 (rgb(88, 101, 242)) with hover state #4752C4. Legacy Blurple (used before the May 2021 rebrand) was #7289DA.',
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

function DiscordFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Discord Dark Mode Color Palette + WCAG Contrast</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Every surface, text, Blurple, and status token in Discord&apos;s default dark theme, measured against the main chat background (#313338) and sidebar (#2B2D31).
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">On #313338</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden md:table-cell">On #2B2D31</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">UI Role</th>
            </tr>
          </thead>
          <tbody>
            {FULL_DISCORD_COLORS.map((row) => {
              const onMain = getContrastRatio(row.hex, MAIN_BG);
              const onSidebar = getContrastRatio(row.hex, SIDEBAR_BG);
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
                        <span className="font-mono">{formatRatio(onMain)}</span>
                        {isRated ? <LevelBadge value={onMain} /> : null}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 sm:px-5 whitespace-nowrap text-gray-700 dark:text-gray-300 hidden md:table-cell">
                    {row.hex === SIDEBAR_BG ? (
                      <span className="text-gray-400 dark:text-gray-500">base</span>
                    ) : (
                      <span className="font-mono">{formatRatio(onSidebar)}</span>
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

function LegacyComparisonTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h3 className="text-base font-bold text-gray-900 dark:text-white">Legacy Discord Dark (#36393F) vs. Current Ash Dark (#313338)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Updating an older Discord bot embed, BetterDiscord theme, or UI kit? Use this migration map.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">UI Surface / Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Legacy Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Current Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">What Changed</th>
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

export default function DiscordDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="discord-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#111214] via-[#1E1F22] to-[#5865F2] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-indigo-200 hover:text-white mb-6 transition-colors text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Discord Dark Mode Colors: Every Hex Code, Layer Step &amp; Contrast Ratio
            </h1>
            <p className="text-indigo-100/95 text-lg max-w-3xl mb-6">
              Copy Discord&apos;s dark mode hex codes—main chat background <strong className="text-white font-semibold">#313338</strong>, channel sidebar{' '}
              <strong className="text-white font-semibold">#2B2D31</strong>, server rail <strong className="text-white font-semibold">#1E1F22</strong>, primary text{' '}
              <strong className="text-white font-semibold">#DBDEE1</strong>, and Blurple <strong className="text-white font-semibold">#5865F2</strong>—with full WCAG 2.1 contrast analysis.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#313338]"
              role="img"
              aria-label="Discord dark mode main background color 313338"
            />
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap text-indigo-200/90 text-sm">
              <AuthorByline />
              <time dateTime="2026-11-09">Updated November 9, 2026</time>
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
                  ariaLabel="Discord dark mode quick copy colors"
                  headline="Discord Dark Mode — Quick Copy"
                  subtext="Core surface, text, and brand tokens from Discord’s default 'Ash' dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    What is the Hex Code for Discord Dark Mode?
                  </h2>
                  <p className="mb-4">
                    Discord&apos;s primary dark mode background is <strong className="text-gray-900 dark:text-white">#313338</strong> (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">rgb(49, 51, 56)</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">hsl(223°, 7%, 21%)</code>). Rather than using an achromatic neutral gray where red, green, and blue channels are equal, Discord injects a subtle 223° cool blue-indigo tint into every surface so the background harmonizes with its signature Blurple (<strong className="text-gray-900 dark:text-white">#5865F2</strong>) accent.
                  </p>
                  <p className="mb-6">
                    When people ask for &ldquo;the Discord background hex code&rdquo; to make transparent memes, fake screenshot mockups, or invisible avatar borders, <strong className="text-gray-900 dark:text-white">#313338</strong> is the exact color behind chat messages on desktop, web, iOS, and Android. If the image or icon sits inside the channel list or user profile panel, match <strong className="text-gray-900 dark:text-white">#2B2D31</strong> instead.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How Discord’s 5-Layer Elevation Hierarchy Works Without Shadows
                  </h2>
                  <p className="mb-4">
                    A desktop Discord window displays four vertical columns simultaneously: the server icon rail, the channel list, the active chat stream, and the member list. Drop shadows disappear against dark backgrounds, and heavy 1px borders across four columns create visual noise. Discord solves this by stepping HSL lightness by 3% to 5% per column, moving from darkest on the far left to lightest in the active chat well:
                  </p>
                  <ul className="list-disc list-inside space-y-2.5 mb-6 text-gray-700 dark:text-gray-300 not-prose">
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">Layer 0 — App Frame (#111214, L=7%):</strong> Outermost window chrome and title bar on desktop clients.
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">Layer 1 — Server Rail (#1E1F22, L=13%):</strong> The leftmost 72px column holding server icons, plus recessed modal backdrops and code block wells (1.28:1 contrast step against the main canvas).
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">Layer 2 — Channel &amp; Member Sidebars (#2B2D31, L=18%):</strong> Secondary navigation panels flanking the chat stream, plus embed card backgrounds (1.13:1 step against #313338).
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">Layer 3 — Main Chat Canvas (#313338, L=21%):</strong> The primary reading surface where users spend 90% of their visual attention.
                    </li>
                    <li className="pl-1">
                      <strong className="text-gray-900 dark:text-white">Layer 4 — Message Composer &amp; Hover (#383A40, L=24%):</strong> The floating text input bar at the bottom of the chat and interactive card hover states (1.13:1 step above #313338).
                    </li>
                  </ul>
                  <p className="mb-6">
                    Notice the symmetry: the channel sidebar (<strong className="text-gray-900 dark:text-white">#2B2D31</strong>) is 1.13:1 darker than the chat canvas (<strong className="text-gray-900 dark:text-white">#313338</strong>), while the message composer (<strong className="text-gray-900 dark:text-white">#383A40</strong>) is 1.13:1 lighter. Those small, consistent luminance steps let your eye parse panel boundaries immediately without a single box shadow.
                  </p>
                </div>

                <DiscordFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    WCAG 2.1 Contrast Audit: Text, Blurple &amp; Status Colors
                  </h2>
                  <p className="mb-4">
                    Running Discord&apos;s tokens through the WCAG 2.1 relative-luminance formula reveals several smart engineering trade-offs:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Off-white body copy avoids halation:</strong> Pure white (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FFFFFF</code>) on <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#313338</code> measures 12.63:1, which causes bright text to bleed on dark monitors during multi-hour gaming or coding sessions. Discord steps message text down to <strong className="text-gray-900 dark:text-white">#DBDEE1</strong> (9.69:1, easily clearing the 7:1 AAA threshold) and saves <strong className="text-gray-900 dark:text-white">#F2F3F5</strong> (11.79:1) for bold server titles and unread channel names.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Four-tier text hierarchy all passes AA:</strong> Even Discord&apos;s fourth-level muted gray (<strong className="text-gray-900 dark:text-white">#949BA4</strong>, used for message timestamps and read channel names) achieves <strong className="text-gray-900 dark:text-white">4.54:1</strong> on the main canvas and <strong className="text-gray-900 dark:text-white">5.11:1</strong> on the darker <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#2B2D31</code> channel sidebar—staying above the 4.5:1 WCAG AA minimum for small text in both locations.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Why links don&apos;t use Blurple:</strong> Blurple (<strong className="text-gray-900 dark:text-white">#5865F2</strong>) only achieves <strong className="text-gray-900 dark:text-white">3.41:1</strong> against <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#313338</code>, which fails WCAG AA for body text. That is why Discord never uses raw Blurple for inline chat links—instead, hyperlinks use bright sky blue <strong className="text-gray-900 dark:text-white">#00A8FC</strong> (<strong className="text-gray-900 dark:text-white">5.04:1 AA</strong>), while Blurple is reserved for filled button backgrounds carrying white text (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#FFFFFF</code> on <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#5865F2</code> = 4.44:1, jumping to 5.79:1 on hover <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#4752C4</code>).
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Did Discord Change Its Dark Mode Colors? (#36393F vs. #313338 &amp; Onyx Mode)
                  </h2>
                  <p className="mb-6">
                    Many older design blogs still list <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#36393F</code> as Discord&apos;s background color and <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#7289DA</code> for Blurple. Discord retired <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#7289DA</code> in its May 2021 brand refresh (replacing it with more saturated <strong className="text-gray-900 dark:text-white">#5865F2</strong>) and darkened its entire neutral surface stack in 2023 when introducing theme presets like <strong className="text-gray-900 dark:text-white">Ash</strong> (the default <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#313338</code> dark mode) and <strong className="text-gray-900 dark:text-white">Onyx</strong> (a true-black <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#000000</code> OLED theme paired with <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#0B0B0C</code> and <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#141416</code> surfaces).
                  </p>
                </div>

                <LegacyComparisonTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Copy-Ready CSS Variables for a Discord-Inspired Dark Theme
                  </h2>
                  <p className="mb-4">
                    Drop these semantic CSS custom properties into your stylesheet or Tailwind theme configuration to use Discord&apos;s surface and typography hierarchy in your own web app:
                  </p>
                  <pre className="not-prose rounded-xl bg-gray-900 text-gray-100 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto border border-gray-700 mb-6">
                    <code>{CSS_TOKENS_SNIPPET}</code>
                  </pre>
                  <p className="mb-6">
                    When adapting this token set for your own product, test any custom brand accent in our{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink> before using it on text or icons. For neutral anchors beyond Discord&apos;s cool gray, see our{' '}
                    <InlineTagLink href="/blog/charcoal-hex-code">charcoal color code</InlineTagLink> reference and broader{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide. Comparing other app themes? See{' '}
                    <InlineTagLink href="/blog/app-dark-mode-colors">12 app dark themes compared</InlineTagLink> (Slack, Spotify, Notion, GitHub, and more), plus{' '}
                    <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/whatsapp-dark-mode-colors">WhatsApp</InlineTagLink>, and{' '}
                    <InlineTagLink href="/blog/youtube-dark-mode-colors">YouTube</InlineTagLink> dark palettes.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Discord Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt Discord dark mode colors for chat apps, dashboards, and community products—without cloning the brand wholesale.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why Discord Dark Mode Works">
                  <p>
                    Discord optimizes for multi-hour sessions across dense multi-column layouts: low-saturation cool grays (7% HSL saturation) eliminate glare, five distinct surface steps separate sidebars from chat without drop shadows, and high-chroma colors (Blurple #5865F2, online green #23A559, DND red #F23F43) appear strictly on stateful indicators and primary actions.
                  </p>
                  <p>
                    For broader dark UI theory—including Material #121212 and accessible token naming—see our{' '}
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
                        Start from Discord neutrals or generate a custom dark theme with harmonized accents.
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

                  <EnvatoAffiliateBanner
                    variant="uiKits"
                    title="Building a dark theme UI or app?"
                    description="Save hours of design work. Download 10,000+ dark mode Figma kits, mobile app design systems, and web components on Envato Elements."
                    ctaText="Explore Figma & UI Kits on Envato"
                  />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Discord dark (copy hex)
                  </h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Discord dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
