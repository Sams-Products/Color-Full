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
  path: '/blog/instagram-dark-mode-colors',
  title: 'Instagram Dark Mode Hex Code #000000 — All Colors (Copy)',
  description:
    'Instagram dark mode hex codes: background #000000, surface #121212, elevated #262626, text #FFFFFF, blue #0095F6, gradient colors. Copy every IG color.',
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
  'Instagram Dark Mode Hex Code #000000 — All Colors (Copy)',
  'Instagram dark mode hex codes: background #000000, surface #121212, elevated #262626, text #FFFFFF, blue #0095F6, gradient colors. Copy every IG color.',
  'instagram-dark-mode-colors',
  getBlogArticleDatePublished('instagram-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#000000' },
  { label: 'Surface / card', value: '#121212' },
  { label: 'Elevated', value: '#262626' },
  { label: 'Text primary', value: '#FFFFFF' },
  { label: 'Text secondary', value: '#A8A8A8' },
  { label: 'Primary blue', value: '#0095F6' },
];

const FULL_INSTAGRAM_COLORS = [
  { name: 'Main background', hex: '#000000', role: 'True-black app canvas' },
  { name: 'Surface / card', hex: '#121212', role: 'Cards, sheets, feed items' },
  { name: 'Secondary surface', hex: '#1A1A1A', role: 'Grouped rows, input fields' },
  { name: 'Elevated surface', hex: '#262626', role: 'Menus, dialogs, hover' },
  { name: 'Border / divider', hex: '#363636', role: 'Separators between rows' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Usernames, primary copy' },
  { name: 'Text secondary', hex: '#A8A8A8', role: 'Captions, metadata, hints' },
  { name: 'Primary blue', hex: '#0095F6', role: 'Follow button, links, active' },
  { name: 'Blue pressed', hex: '#1877F2', role: 'Pressed / alt blue' },
  { name: 'Error red', hex: '#ED4956', role: 'Notifications, likes, errors' },
];

const IG_GRADIENT = [
  { name: 'Gradient yellow', hex: '#FEDA77', role: 'Story ring start' },
  { name: 'Gradient orange', hex: '#F58529', role: 'Story ring' },
  { name: 'Gradient magenta', hex: '#DD2A7B', role: 'Story ring / brand' },
  { name: 'Gradient purple', hex: '#8134AF', role: 'Story ring' },
  { name: 'Gradient blue', hex: '#515BD4', role: 'Story ring end' },
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
    title: 'Instagram-style social app',
    body: 'Mirror IG layers: #000000 true-black canvas, #121212 cards, #262626 menus, #0095F6 follow button, #A8A8A8 captions.',
    swatches: ['#000000', '#121212', '#262626', '#0095F6', '#A8A8A8'],
  },
  {
    title: 'Instagram gradient accent',
    body: 'Use the story-ring gradient (#FEDA77 → #DD2A7B → #515BD4) for avatars, badges, and hero moments over near-black surfaces.',
    swatches: ['#FEDA77', '#F58529', '#DD2A7B', '#8134AF', '#515BD4'],
  },
  {
    title: 'Instagram-inspired media dashboard',
    body: 'Use #000000 canvas, #121212 cards, #262626 panels, #0095F6 primary actions, and #ED4956 for alerts and engagement.',
    swatches: ['#000000', '#121212', '#262626', '#0095F6', '#ED4956'],
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Instagram dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram dark mode uses true black #000000 for the main background, with cards and surfaces at #121212 and elevated menus at #262626. Primary text is #FFFFFF and secondary text is #A8A8A8.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Instagram blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram’s primary action blue (Follow button, links) is #0095F6, rgb(0, 149, 246). A pressed/alternate blue is #1877F2.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the Instagram gradient hex codes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Instagram story-ring gradient runs through #FEDA77 (yellow), #F58529 (orange), #DD2A7B (magenta), #8134AF (purple), and #515BD4 (blue). Use it for avatars, badges, and brand accents.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use Instagram colors in my own app design?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Instagram hex values are widely referenced for true-black social UI. For commercial products, treat them as inspiration—define your own tokens, use the gradient sparingly, and verify WCAG contrast.',
      },
    },
  ],
};

function ColorTable({ title, description, rows }) {
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
              <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Usage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
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
              Instagram Dark Mode Colors: #000000
            </h1>
            <AeoDirectAnswer
              question="What is the Instagram dark mode hex code?"
              answer="Instagram dark mode uses true black #000000 background, #121212 surfaces, #262626 elevated menus, #FFFFFF text, and #0095F6 blue. The story-ring gradient runs #FEDA77 → #DD2A7B → #515BD4."
              codes={[
                { label: 'Background', value: '#000000' },
                { label: 'Blue', value: '#0095F6' },
                { label: 'Magenta', value: '#DD2A7B' },
              ]}
            />
            <p className="text-white/95 text-lg max-w-3xl mb-6">
              Copy Instagram dark mode hex codes—background <strong className="text-white font-semibold">#000000</strong>, surface{' '}
              <strong className="text-white font-semibold">#121212</strong>, blue <strong className="text-white font-semibold">#0095F6</strong>, and the signature{' '}
              <strong className="text-white font-semibold">gradient</strong>—for UI inspiration and dark theme tokens.
            </p>
            <div
              className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/25 shadow-2xl mb-6 bg-[#000000]"
              role="img"
              aria-label="Instagram dark mode true black background color 000000"
            />
            <div className="flex items-center gap-4 text-white/90 text-sm">
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
                  theme="purple"
                  ariaLabel="Instagram dark mode quick copy colors"
                  headline="Instagram Dark Mode — Quick Copy"
                  subtext="Backgrounds, blue accent, and text tokens from Instagram dark theme. Click Copy on any row."
                  rows={QUICK_ROWS}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4">
                    What is the Hex Code for Instagram Dark Mode?
                  </h2>
                  <p className="mb-6">
                    Instagram dark mode uses <strong className="text-gray-900 dark:text-white">true black #000000</strong> for the main background—ideal for OLED screens and making photos pop. Cards and feed surfaces use <strong className="text-gray-900 dark:text-white">#121212</strong>; elevated menus and dialogs use <strong className="text-gray-900 dark:text-white">#262626</strong>. Primary text is <strong className="text-gray-900 dark:text-white">#FFFFFF</strong> with secondary captions in <strong className="text-gray-900 dark:text-white">#A8A8A8</strong>.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Instagram Blue &amp; Action Colors
                  </h2>
                  <p className="mb-6">
                    The primary action blue—Follow buttons, links, and active states—is <strong className="text-gray-900 dark:text-white">#0095F6</strong> (rgb(0, 149, 246)). Likes, notifications, and errors use red <strong className="text-gray-900 dark:text-white">#ED4956</strong>. Keep these for interactive moments so they hold meaning against the black surfaces.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    Instagram Gradient Hex Codes
                  </h2>
                  <p className="mb-6">
                    Instagram’s signature story-ring gradient flows through five hues: <strong className="text-gray-900 dark:text-white">#FEDA77</strong> (yellow), <strong className="text-gray-900 dark:text-white">#F58529</strong> (orange), <strong className="text-gray-900 dark:text-white">#DD2A7B</strong> (magenta), <strong className="text-gray-900 dark:text-white">#8134AF</strong> (purple), and <strong className="text-gray-900 dark:text-white">#515BD4</strong> (blue). Copy them from the gradient table below.
                  </p>
                </div>

                <ColorTable
                  title="Full Instagram Dark Mode Color Palette"
                  description="Backgrounds, text, blue action color, and error red for Instagram dark UI."
                  rows={FULL_INSTAGRAM_COLORS}
                />

                <ColorTable
                  title="Instagram Gradient Hex Codes"
                  description="The five-stop story-ring gradient used for avatars and brand accents."
                  rows={IG_GRADIENT}
                />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    How to Use Instagram Colors in Your Design
                  </h2>
                  <p className="mb-4">
                    Map Instagram’s roles to tokens:{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-canvas</code> = #000000,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-surface</code> = #121212,{' '}
                    <code className="text-sm font-mono bg-gray-100 dark:bg-slate-800 px-1 rounded">--color-accent</code> = #0095F6. Use the gradient sparingly—rings, badges, hero moments—so it stays special.
                  </p>
                  <p className="mb-6">
                    True black saves battery on OLED but can cause smearing during scroll; some teams prefer #121212. Verify text pairs with a{' '}
                    <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>, and compare with{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink> and{' '}
                    <InlineTagLink href="/blog/spotify-dark-mode-colors">Spotify</InlineTagLink> dark palettes.
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
                    Instagram uses true black so photos and videos become the entire experience, with UI chrome nearly invisible until needed. The blue action color and vivid story gradient are the only strong hues, which keeps user content the hero. Social and creator apps borrow this contrast-forward pattern.
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
