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
  path: '/blog/whatsapp-dark-mode-colors',
  title: 'WhatsApp Dark Mode Hex Code #111B21 — Bubbles, Green & Contrast Ratios',
  description:
    'WhatsApp dark mode hex codes: background #111B21, chat panel #202C33, composer #2A3942, sent bubble #005C4B, brand green #25D366, and text #E9EDEF with WCAG contrast.',
  keywords: [
    'whatsapp dark mode colors',
    'whatsapp dark mode hex code',
    'whatsapp green hex code',
    'whatsapp background color',
    'whatsapp color palette',
    'whatsapp message bubble color',
    '#111B21',
    '#25D366',
    '#005C4B',
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
  'WhatsApp Dark Mode Hex Code #111B21 — Bubbles, Green & Contrast Ratios',
  'WhatsApp dark mode hex codes: background #111B21, chat panel #202C33, composer #2A3942, sent bubble #005C4B, brand green #25D366, and text #E9EDEF with WCAG contrast.',
  'whatsapp-dark-mode-colors',
  getBlogArticleDatePublished('whatsapp-dark-mode-colors')
);

const MAIN_BG = '#111B21';
const PANEL_BG = '#202C33';

const QUICK_ROWS = [
  { label: 'Main background', value: '#111B21' },
  { label: 'Header / received bubble', value: '#202C33' },
  { label: 'Composer / search input', value: '#2A3942' },
  { label: 'Sent bubble (dark teal)', value: '#005C4B' },
  { label: 'WhatsApp brand green', value: '#25D366' },
  { label: 'Text primary', value: '#E9EDEF' },
];

const FULL_WHATSAPP_COLORS = [
  { name: 'Wallpaper deepest base', hex: '#0B141A', kind: 'surface', role: 'Deepest chat wallpaper well behind doodle pattern' },
  { name: 'Main background', hex: '#111B21', kind: 'surface', role: 'Chat list canvas, primary app background' },
  { name: 'Header / received bubble', hex: '#202C33', kind: 'surface', role: 'Top app bar, incoming message bubbles, sidebar header' },
  { name: 'Composer / input surface', hex: '#2A3942', kind: 'surface', role: 'Message input pill, search bar, hover row' },
  { name: 'Border / hairline divider', hex: '#222D34', kind: 'surface', role: '1px chat list row separators' },
  { name: 'Sent message bubble', hex: '#005C4B', kind: 'surface', role: 'Outgoing message bubble fill', note: '#E9EDEF text on #005C4B = 7.55:1 (AAA)' },
  { name: 'Text primary', hex: '#E9EDEF', kind: 'text', role: 'Message body copy, contact names, active headers' },
  { name: 'Text secondary', hex: '#8696A0', kind: 'text', role: 'Timestamps, message preview snippets, muted icons' },
  { name: 'WhatsApp brand green', hex: '#25D366', kind: 'accent', role: 'Unread badge fill, online indicator, FAB', note: 'Dark #111B21 text on #25D366 = 8.89:1 (AAA)' },
  { name: 'Web teal-green accent', hex: '#00A884', kind: 'accent', role: 'WhatsApp Web/Desktop buttons, active tabs, voice mic' },
  { name: 'Link sky blue', hex: '#53BDEB', kind: 'text', role: 'Hyperlinks and @mentions inside chat bubbles' },
  { name: 'Read receipt blue', hex: '#34B7F1', kind: 'accent', role: 'Double-check read ticks on #005C4B and #202C33' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#111B21', colorName: 'Background', rgbCode: 'rgb(17, 27, 33)' },
  { hexCode: '#202C33', colorName: 'Panel / In', rgbCode: 'rgb(32, 44, 51)' },
  { hexCode: '#005C4B', colorName: 'Sent Bubble', rgbCode: 'rgb(0, 92, 75)' },
  { hexCode: '#25D366', colorName: 'Brand Green', rgbCode: 'rgb(37, 211, 102)' },
  { hexCode: '#E9EDEF', colorName: 'Text', rgbCode: 'rgb(233, 237, 239)' },
];

const UI_INSPIRATION_PALETTES = [
  {
    title: 'Two-way messaging & support chat UI',
    body: 'Use #111B21 for the conversation well, #202C33 for incoming customer bubbles, #005C4B for outgoing agent replies, #2A3942 for the composer bar, and #E9EDEF for crisp AAA message legibility.',
    swatches: ['#111B21', '#202C33', '#005C4B', '#2A3942', '#E9EDEF'],
  },
  {
    title: 'Teal-slate FinTech & trading dashboard',
    body: 'Borrow WhatsApp’s cool petroleum-slate neutrals (#0B141A frame, #111B21 canvas, #202C33 cards) paired with #25D366 for positive price ticks and #53BDEB for interactive drill-down links.',
    swatches: ['#0B141A', '#111B21', '#202C33', '#25D366', '#53BDEB'],
  },
  {
    title: 'Encrypted mobile inbox & VoIP dialer',
    body: 'Combine #111B21 list surfaces and #8696A0 metadata with #00A884 call action buttons and #34B7F1 verified/read indicators for a calm, low-glare night mode.',
    swatches: ['#111B21', '#202C33', '#8696A0', '#00A884', '#34B7F1'],
  },
];

const CSS_TOKENS_SNIPPET = `:root[data-theme="whatsapp-dark"] {
  /* Petroleum-slate surface hierarchy */
  --wa-bg-wallpaper: #0b141a;
  --wa-bg-canvas: #111b21;
  --wa-bg-panel: #202c33;       /* Top bar & incoming bubble */
  --wa-bg-input: #2a3942;       /* Composer & search field */
  --wa-border: #222d34;

  /* Message bubbles */
  --wa-bubble-incoming: #202c33;
  --wa-bubble-outgoing: #005c4b; /* 7.55:1 with --wa-text-primary */

  /* Typography */
  --wa-text-primary: #e9edef;   /* 14.66:1 on #111b21 (AAA) */
  --wa-text-secondary: #8696a0; /* 5.87:1 on #111b21, 4.62:1 on #202c33 (AA) */
  --wa-text-link: #53bdeb;      /* 8.21:1 on #111b21 (AAA) */

  /* Brand & status accents */
  --wa-green-brand: #25d366;    /* Use #111b21 dark text on top (8.89:1) */
  --wa-green-web: #00a884;
  --wa-check-read: #34b7f1;
}`;

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the WhatsApp dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp dark mode uses #111B21 (rgb(17, 27, 33)) for the main chat list and canvas, #0B141A for the deepest wallpaper base behind chat doodles, #202C33 for headers and incoming message bubbles, and #2A3942 for the message input bar.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the WhatsApp green hex code in dark mode?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp uses three greens in dark mode: bright brand green #25D366 (rgb(37, 211, 102)) for unread badges and status indicators, teal-green #00A884 for WhatsApp Web buttons and active tabs, and deep forest-teal #005C4B for outgoing sent message bubbles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are WhatsApp sent bubbles #005C4B instead of #25D366?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bright WhatsApp green (#25D366) is too luminous to hold light message text (#E9EDEF on #25D366 is only 1.63:1, failing WCAG). Darkening the outgoing bubble fill to #005C4B gives #E9EDEF message text a 7.55:1 WCAG AAA contrast ratio while keeping a clear green identity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the WhatsApp dark mode text and read-receipt hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primary message text is #E9EDEF (14.66:1 on #111B21), secondary timestamps and previews use #8696A0 (5.87:1 on #111B21 and 4.62:1 on #202C33), inline links use #53BDEB, and read-receipt double checkmarks use #34B7F1.',
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

function WhatsAppFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full WhatsApp Dark Mode Color Palette + WCAG Contrast</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Every surface, bubble, green accent, and text token measured against the main background (#111B21) and incoming bubble/panel (#202C33).
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Token</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold">On #111B21</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden md:table-cell">On #202C33</th>
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {FULL_WHATSAPP_COLORS.map((row) => {
              const onMain = getContrastRatio(row.hex, MAIN_BG);
              const onPanel = getContrastRatio(row.hex, PANEL_BG);
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
                    {row.hex === PANEL_BG ? (
                      <span className="text-gray-400 dark:text-gray-500">base</span>
                    ) : (
                      <span className="font-mono">{formatRatio(onPanel)}</span>
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

export default function WhatsAppDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="whatsapp-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0a1218] via-[#111B21] to-[#25D366] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-green-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              WhatsApp Dark Mode Colors: #111B21 Canvas, #005C4B Bubbles &amp; #25D366 Green
            </h1>
            <AeoDirectAnswer
              question="What is the WhatsApp dark mode hex code?"
              answer="WhatsApp dark mode uses petroleum-slate #111B21 for the main background, #202C33 for headers and received message bubbles, #005C4B for outgoing sent bubbles, #2A3942 for the message input bar, #E9EDEF for primary text, and #25D366 for brand green accents."
              codes={[
                { label: 'Background', value: '#111B21' },
                { label: 'Sent Bubble', value: '#005C4B' },
                { label: 'Brand Green', value: '#25D366' },
              ]}
            />
            <p className="text-green-100/95 text-lg max-w-3xl mb-6">
              Copy every WhatsApp dark mode hex code—background <strong className="text-white font-semibold">#111B21</strong>, incoming bubble{' '}
              <strong className="text-white font-semibold">#202C33</strong>, outgoing bubble <strong className="text-white font-semibold">#005C4B</strong>, and brand green{' '}
              <strong className="text-white font-semibold">#25D366</strong>—with complete WCAG 2.1 contrast ratios for chat and messaging UI.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#111B21]" role="img" aria-label="WhatsApp dark mode background 111B21" />
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap text-green-200/90 text-sm">
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
                  theme="forest"
                  ariaLabel="WhatsApp dark mode quick copy"
                  headline="WhatsApp Dark Mode — Quick Copy"
                  subtext="Backgrounds, incoming/outgoing bubbles, green accents, and text tokens. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for WhatsApp Dark Mode?</h2>
                  <p className="mb-4">
                    WhatsApp&apos;s primary dark mode background is <strong className="text-gray-900 dark:text-white">#111B21</strong> (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">rgb(17, 27, 33)</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">hsl(202°, 32%, 10%)</code>)—a deep petroleum blue-slate rather than pure black or neutral gray. Behind the chat doodle wallpaper on mobile and WhatsApp Web, the deepest canvas recess drops to <strong className="text-gray-900 dark:text-white">#0B141A</strong> (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">hsl(204°, 41%, 7%)</code>).
                  </p>
                  <p className="mb-6">
                    Why a 202° cool cyan-blue undertone in an app famous for its green logo? Because outgoing message bubbles are dark teal-green (<strong className="text-gray-900 dark:text-white">#005C4B</strong>). Placing dark teal-green bubbles onto an analogous cool blue-slate background (<strong className="text-gray-900 dark:text-white">#111B21</strong>) creates a low-contrast, eye-friendly progression across the color wheel instead of jarring against warm gray or stark black.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Why WhatsApp Uses Three Different Greens (#25D366, #00A884 &amp; #005C4B)
                  </h2>
                  <p className="mb-4">
                    One of the most common mistakes when recreating a WhatsApp-style chat interface is filling outgoing message bubbles with WhatsApp&apos;s bright logo green (<strong className="text-gray-900 dark:text-white">#25D366</strong>). In dark mode, WhatsApp splits green into three distinct functional tokens based on luminance and WCAG contrast:
                  </p>
                  <ul className="list-disc pl-6 space-y-2.5 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Outgoing Message Bubble (#005C4B, L=18%):</strong> A deep forest-teal surface. White or off-white message text (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#E9EDEF</code>) on <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code> achieves <strong className="text-gray-900 dark:text-white">7.55:1 (WCAG AAA)</strong>. If you put <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#E9EDEF</code> text on bright <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#25D366</code>, contrast collapses to <strong className="text-gray-900 dark:text-white">1.63:1</strong>—making messages nearly unreadable.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Unread Badge &amp; Brand Green (#25D366, L=49%):</strong> Because <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#25D366</code> is bright (<strong className="text-gray-900 dark:text-white">8.89:1</strong> against <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#111B21</code>), WhatsApp uses it as a high-salience pill for unread message counts and active toggles, placing <strong className="text-gray-900 dark:text-white">dark #111B21 text inside the green badge</strong> (8.89:1 AAA) instead of white text.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">WhatsApp Web / UI Action Teal (#00A884, L=33%):</strong> Used on desktop and web clients for primary action buttons, active filter chips, and the microphone button—bridging the gap between deep <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code> bubbles and neon <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#25D366</code> badges.
                    </li>
                  </ul>
                </div>

                <WhatsAppFullTable />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Bubble-by-Bubble WCAG Contrast Breakdown
                  </h2>
                  <p className="mb-4">
                    In a messaging app, text doesn&apos;t just sit on the main canvas (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#111B21</code>)—it has to pass accessibility checks inside both incoming (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#202C33</code>) and outgoing (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code>) bubbles:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong className="text-gray-900 dark:text-white">Primary copy (#E9EDEF) clears AAA everywhere:</strong> It measures <strong className="text-gray-900 dark:text-white">14.66:1</strong> on the <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#111B21</code> chat list, <strong className="text-gray-900 dark:text-white">11.53:1</strong> inside <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#202C33</code> incoming bubbles, and <strong className="text-gray-900 dark:text-white">7.55:1</strong> inside <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code> outgoing bubbles.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Secondary metadata (#8696A0) is tuned for #202C33:</strong> On the main <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#111B21</code> chat list, <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#8696A0</code> achieves <strong className="text-gray-900 dark:text-white">5.87:1 (AA)</strong>; inside <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#202C33</code> received bubbles and headers, it lands at <strong className="text-gray-900 dark:text-white">4.62:1</strong>—just clearing the 4.5:1 WCAG AA floor. Inside darker green <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code> sent bubbles, WhatsApp switches timestamps to a translucent white (<code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">rgba(233, 237, 239, 0.6)</code>) so the hue doesn&apos;t clash with the green fill.
                    </li>
                    <li>
                      <strong className="text-gray-900 dark:text-white">Hyperlinks (#53BDEB) and Read Receipts (#34B7F1):</strong> Inline URLs use sky blue <strong className="text-gray-900 dark:text-white">#53BDEB</strong> (<strong className="text-gray-900 dark:text-white">6.46:1</strong> on incoming <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#202C33</code> and <strong className="text-gray-900 dark:text-white">4.23:1</strong> on outgoing <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code>), while double-check read ticks use <strong className="text-gray-900 dark:text-white">#34B7F1</strong> (<strong className="text-gray-900 dark:text-white">3.89:1</strong> against <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">#005C4B</code>, passing the 3:1 WCAG non-text graphical icon threshold).
                    </li>
                  </ul>

                  <h2 className="text-2xl font-bold mt-8 mb-4">
                    Copy-Ready CSS Custom Properties for Messaging UIs
                  </h2>
                  <p className="mb-4">
                    Use these CSS variables to implement WhatsApp&apos;s dark surface stack and two-tone bubble architecture in React, Vue, or Tailwind projects:
                  </p>
                  <pre className="not-prose rounded-xl bg-gray-900 text-gray-100 p-4 sm:p-5 text-xs sm:text-sm font-mono overflow-x-auto border border-gray-700 mb-6">
                    <code>{CSS_TOKENS_SNIPPET}</code>
                  </pre>
                  <p className="mb-6">
                    Test any custom bubble or link color adjustments in our{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>, and compare WhatsApp&apos;s petroleum-slate hierarchy against{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/app-dark-mode-colors#telegram">Telegram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/app-dark-mode-colors#slack">Slack</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <div className="not-prose">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">WhatsApp Color Palette for UI Inspiration</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">
                    Three ways to adapt WhatsApp&apos;s dark petroleum-slate and dual-green tokens for chat widgets, support tools, and mobile apps.
                  </p>
                  <ul className="space-y-4">
                    {UI_INSPIRATION_PALETTES.map((palette) => (
                      <InspirationCard key={palette.title} palette={palette} />
                    ))}
                  </ul>
                </div>

                <PaletteUiUsageSection title="Why WhatsApp Dark Mode Works">
                  <p>
                    WhatsApp keeps surfaces close in luminance (#0B141A, #111B21, #202C33) so conversations stay the focus, separates outgoing from incoming messages through hue (#005C4B dark teal vs #202C33 slate) rather than jarring brightness jumps, and reserves neon #25D366 strictly for unread badges and status cues.
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
                        Start from WhatsApp&apos;s cool slate neutrals or generate a custom dark theme with harmonized accents.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Link
                          href="/tools/palette-generator"
                          className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-emerald-400 hover:bg-white hover:text-emerald-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-emerald-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors text-center"
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
                    title="Building a chat app or messaging interface?"
                    description="Speed up development with Figma chat UI kits, mobile app design systems, and responsive components on Envato Elements."
                    ctaText="Browse Mobile & Chat UI Kits on Envato"
                  />
                </div>
              </div>

              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-20">
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">WhatsApp dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="WhatsApp dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
