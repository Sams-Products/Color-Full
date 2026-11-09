import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import CopyableHex from '../forest-green-hex-code/CopyableHex';
import BlogToolsCTA from '../components/BlogToolsCTA';
import BlogArticleSchema from '../components/BlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import {
  getBlogArticleSchema,
  getBlogArticleDatePublished,
  getBlogArticleDateModified,
} from '../../../lib/getBlogArticleSchema';
import { getContrastRatio } from '../../tools/color-palette-preview/lib/contrastUtils';
import { DARK_MODE_APPS } from './apps';
import AuthorByline from '../components/AuthorByline';

const SLUG = 'app-dark-mode-colors';
const TITLE = 'Dark Mode Colors of 12 Popular Apps, Compared (Hex Codes + Contrast Ratios)';
const DESCRIPTION =
  'Dark mode hex codes for Slack, iOS, Telegram, Spotify, Chrome, Notion, X, GitHub, Reddit, VS Code, LinkedIn and Figma — with the WCAG contrast ratio of every color worked out, side by side.';
const PUBLISHED = getBlogArticleDatePublished(SLUG);
const MODIFIED = getBlogArticleDateModified(SLUG);

export const metadata = buildPageMetadata({
  path: `/blog/${SLUG}`,
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'app dark mode colors',
    'dark mode hex codes',
    'slack dark mode colors',
    'ios dark mode colors',
    'telegram dark mode colors',
    'spotify dark mode colors',
    'github dark mode colors',
    'vs code dark theme colors',
    'dark mode contrast ratio',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: `${PUBLISHED}T00:00:00.000Z`,
    modifiedTime: `${MODIFIED}T00:00:00.000Z`,
  },
});

const articleSchema = getBlogArticleSchema(TITLE, DESCRIPTION, SLUG, PUBLISHED, MODIFIED);

const OWN_GUIDES = [
  { href: '/blog/discord-dark-mode-colors', label: 'Discord' },
  { href: '/blog/instagram-dark-mode-colors', label: 'Instagram' },
  { href: '/blog/whatsapp-dark-mode-colors', label: 'WhatsApp' },
  { href: '/blog/youtube-dark-mode-colors', label: 'YouTube' },
];

function ratio(a, b) {
  return getContrastRatio(a, b);
}

function formatRatio(value) {
  return `${value.toFixed(2)}:1`;
}

function wcagLevel(value) {
  if (value >= 7) return { label: 'AAA', tone: 'good' };
  if (value >= 4.5) return { label: 'AA', tone: 'good' };
  if (value >= 3) return { label: 'AA large only', tone: 'warn' };
  return { label: 'Below 3:1', tone: 'bad' };
}

const TONE_CLASSES = {
  good: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
  warn: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
  bad: 'bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-800',
};

function LevelBadge({ value }) {
  const level = wcagLevel(value);
  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold whitespace-nowrap ${TONE_CLASSES[level.tone]}`}>
      {level.label}
    </span>
  );
}

function Swatch({ hex, className = 'h-8 w-12' }) {
  return (
    <span
      className={`inline-block rounded-md border border-gray-300 dark:border-gray-600 shadow-inner align-middle ${className}`}
      style={{ backgroundColor: hex }}
      aria-hidden
    />
  );
}

function ComparisonTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">All 12 dark themes side by side</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Each ratio is measured against that app&apos;s own main background. 4.5:1 is the WCAG AA minimum for body text; 7:1 is AAA.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="px-4 py-2.5 font-semibold">App</th>
              <th className="px-4 py-2.5 font-semibold">Background</th>
              <th className="px-4 py-2.5 font-semibold">Style</th>
              <th className="px-4 py-2.5 font-semibold">Primary text</th>
              <th className="px-4 py-2.5 font-semibold">Secondary text</th>
              <th className="px-4 py-2.5 font-semibold">Main accent</th>
              <th className="px-4 py-2.5 font-semibold">First surface step</th>
            </tr>
          </thead>
          <tbody>
            {DARK_MODE_APPS.map((app) => {
              const text = ratio(app.text, app.bg);
              const text2 = ratio(app.text2, app.bg);
              const accent = ratio(app.accent, app.bg);
              const step = ratio(app.surface, app.bg);
              return (
                <tr key={app.id} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 align-top">
                  <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    <a href={`#${app.id}`} className="hover:underline">{app.name}</a>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="inline-flex items-center gap-2">
                      <Swatch hex={app.bg} className="h-5 w-5" />
                      <span className="font-mono text-gray-800 dark:text-gray-200">{app.bg}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 whitespace-nowrap">{app.style}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-mono text-gray-800 dark:text-gray-200">{app.text}</div>
                    <div className="text-gray-600 dark:text-gray-400">{formatRatio(text)}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-mono text-gray-800 dark:text-gray-200">{app.text2}</div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      {formatRatio(text2)} <LevelBadge value={text2} />
                    </div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-mono text-gray-800 dark:text-gray-200">{app.accent}</div>
                    <div className="text-gray-600 dark:text-gray-400">{formatRatio(accent)}</div>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <div className="font-mono text-gray-800 dark:text-gray-200">{app.surface}</div>
                    <div className="text-gray-600 dark:text-gray-400">{formatRatio(step)}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AppTokenTable({ app }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
              <th className="px-4 py-2.5 font-semibold">Swatch</th>
              <th className="px-4 py-2.5 font-semibold">Token</th>
              <th className="px-4 py-2.5 font-semibold">Hex</th>
              <th className="px-4 py-2.5 font-semibold hidden sm:table-cell">Used for</th>
              <th className="px-4 py-2.5 font-semibold">On {app.bg}</th>
            </tr>
          </thead>
          <tbody>
            {app.tokens.map((token) => {
              const isBase = token.hex === app.bg && token.kind === 'surface';
              const value = ratio(token.hex, app.bg);
              const rated = token.kind === 'text' || token.kind === 'accent';
              return (
                <tr key={`${token.name}-${token.hex}`} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 align-top">
                  <td className="px-4 py-3 w-16">
                    <Swatch hex={token.hex} />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                    {token.name}
                    {token.note ? <div className="text-xs font-normal text-gray-500 dark:text-gray-400 mt-0.5">{token.note}</div> : null}
                  </td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200 whitespace-nowrap">
                    <CopyableHex hex={token.hex} />
                  </td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{token.role}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-700 dark:text-gray-300">
                    {isBase ? (
                      <span className="text-gray-400 dark:text-gray-500">base</span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        {formatRatio(value)}
                        {rated ? <LevelBadge value={value} /> : null}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AppDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle="App Dark Mode Colors Compared" slug={SLUG} />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#000000] via-[#0D1117] to-[#1E1E1E] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Dark Mode Colors of 12 Popular Apps, Compared
            </h1>
            <p className="text-gray-200 text-lg max-w-3xl mb-6">
              Copy the dark-theme hex codes for Slack, iOS, Telegram, Spotify, Chrome, Notion, X, GitHub, Reddit, VS Code, LinkedIn and
              Figma — and see how each one actually performs on contrast, using the same WCAG formula as our contrast checker.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6" aria-hidden>
              {DARK_MODE_APPS.map((app) => (
                <span key={app.id} className="h-10 w-10 rounded-lg border border-white/20" style={{ backgroundColor: app.bg }} title={`${app.name} ${app.bg}`} />
              ))}
            </div>
            <div className="flex items-center gap-x-4 gap-y-1 flex-wrap text-gray-300 text-sm">
              <AuthorByline />
              <time dateTime={PUBLISHED}>Published November 9, 2026</time>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Most dark themes look alike at a glance — &ldquo;some kind of near-black with white text&rdquo; — but the hex values tell a more
                useful story. Lined up next to each other, these twelve apps fall into three clear background families, make different
                choices about how bright their text should be, and handle accessibility very differently once you get past the primary
                text color.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Every ratio on this page is calculated from the hex codes with the WCAG 2.x relative-luminance formula, against each
                app&apos;s own main background. The colors are the default dark themes we documented between June and August 2026; apps
                tweak their themes over time, so check against the live product before you ship a pixel-exact clone. Discord, Instagram,
                WhatsApp and YouTube have their own, more detailed guides:{' '}
                {OWN_GUIDES.map((guide, index) => (
                  <span key={guide.href}>
                    <InlineTagLink href={guide.href}>{guide.label}</InlineTagLink>
                    {index < OWN_GUIDES.length - 2 ? ', ' : index === OWN_GUIDES.length - 2 ? ' and ' : '.'}
                  </span>
                ))}
              </p>
            </div>

            <ComparisonTable />

            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-700 dark:prose-li:text-gray-300">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">What the comparison shows</h2>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">1. Three background families, not one</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong className="text-gray-900 dark:text-white">True black (#000000)</strong> is used by iOS, X and LinkedIn. <strong className="text-gray-900 dark:text-white">Blue-gray</strong> backgrounds — Slack
                #1A1D21, Telegram #0E1621, GitHub #0D1117 and Reddit #0B1416 — carry a visible cool tint. <strong className="text-gray-900 dark:text-white">Neutral gray</strong>{' '}
                backgrounds sit between #121212 and #202124: Spotify, Notion, VS Code, Figma and Chrome (Chrome&apos;s #202124 has only a
                faint cool cast). There is a loose pattern — phone-first and social feeds on black, chat on blue-gray, content and
                creative tools on neutral gray so photos, documents and designs keep their true colors — but it is not a rule: VS Code
                is a developer tool on neutral gray, and Reddit is a social feed on blue-gray.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">2. Half of them avoid pure white text</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Six apps use #FFFFFF for primary text (Slack, iOS, Telegram, Spotify, LinkedIn, Figma). The other six soften it: Chrome
                #E8EAED, X #E7E9EA, GitHub #E6EDF3, Notion #E6E6E6, Reddit #D7DADC and VS Code #D4D4D4. Even the dimmest of these —
                VS Code at 11.25:1 — clears the 7:1 AAA bar comfortably, so off-white costs nothing on accessibility while cutting
                glare on long reading or coding sessions.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">3. Secondary text is where the margins get thin</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Primary text is never the problem. Secondary text is: X&apos;s #71767B lands at 4.58:1 and Reddit&apos;s #818384 at
                4.90:1 — both only just above the 4.5:1 AA line. VS Code&apos;s muted #808080 sits at 4.22:1, which passes only for
                large text. If you copy a palette for an interface with small metadata, timestamps or captions, the secondary gray is
                the value to check first.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">4. On pure black, surfaces have to step up harder</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                The first elevated surface (cards, sidebars, menus) is only 1.06:1 to 1.27:1 against the background in every app. The
                biggest steps belong to LinkedIn (1.27:1), iOS (1.23:1), Figma (1.19:1) and X (1.18:1); Spotify, Reddit and Notion get by
                with 1.06–1.08:1. Starting from #000000 leaves no darker shade to separate layers with, so black-based themes lift
                their cards further to keep them visible.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-2">5. Brand colors are often fills, not text</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Several brand and status colors fall below 4.5:1 on their own background — Slack&apos;s success green #007A5A (3.17:1),
                Chrome&apos;s Google Blue #1A73E8 (3.57:1), LinkedIn&apos;s logo blue #0A66C2 (3.69:1) and Figma&apos;s component purple
                #9747FF (3.70:1). That is fine because they are used for buttons, icons and highlights rather than paragraph text.
                VS Code&apos;s status-bar blue #007ACC is a good example: 3.70:1 against the editor, but it is a background for white
                labels, and white on #007ACC measures 4.51:1.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-4">Using these patterns in your own dark theme</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <li>Pick the background family on purpose: true black for phone-first products where OLED screens are the norm; blue-gray for chat and developer tools; a neutral #121212–#202124 when user content has to keep its true colors.</li>
                <li>Off-white primary text in the #E6E6E6–#E8EAED range still gives roughly 13–14:1 on neutral grays.</li>
                <li>Treat 4.5:1 as the floor for secondary text and test it at the size you actually use. On pure black, a gray around X&apos;s #71767B is about as dark as small text can go.</li>
                <li>Make each surface step bigger if your base is #000000 — around 1.2:1 against the background — and smaller (about 1.1:1) on a lifted gray.</li>
                <li>Give brand colors that fail 4.5:1 a job as fills with white or black labels, then check that label pair separately in the{' '}
                  <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>.</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You can paste any of the palettes below into the{' '}
                <InlineTagLink href="/tools/color-palette-preview/dashboard">palette preview tool</InlineTagLink> to see them on a real
                dashboard layout, or start from the broader{' '}
                <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> and{' '}
                <InlineTagLink href="/blog/accessible-dark-mode-color-palette">accessible dark mode palette</InlineTagLink> guides.
              </p>
            </div>

            {DARK_MODE_APPS.map((app) => (
              <section key={app.id} id={app.id} className="scroll-mt-24 space-y-4">
                <div className="flex items-center gap-3">
                  <Swatch hex={app.bg} className="h-10 w-10" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{app.name} dark mode colors</h2>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {app.style} background <span className="font-mono">{app.bg}</span>, primary text{' '}
                  <span className="font-mono">{app.text}</span> ({formatRatio(ratio(app.text, app.bg))}), secondary text{' '}
                  <span className="font-mono">{app.text2}</span> ({formatRatio(ratio(app.text2, app.bg))}) and {app.accentName}{' '}
                  <span className="font-mono">{app.accent}</span> as the main accent. {app.why}
                </p>
                <AppTokenTable app={app} />
              </section>
            ))}

            <BlogToolsCTA variant="uiKits" />
          </div>
        </div>
      </section>
    </article>
  );
}
