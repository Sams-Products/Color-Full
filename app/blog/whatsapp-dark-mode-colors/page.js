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

const LAST_MODIFIED = '2026-07-09T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/whatsapp-dark-mode-colors',
  title: 'WhatsApp Dark Mode Hex Code #111B21 — All Colors (Copy)',
  description:
    'WhatsApp dark mode hex codes: background #111B21, panel #202C33, bubble #2A3942, green #25D366, text #E9EDEF. Copy every WhatsApp UI color instantly.',
  keywords: [
    'whatsapp dark mode colors',
    'whatsapp dark mode hex code',
    'whatsapp green hex code',
    'whatsapp background color',
    'whatsapp color palette',
    '#111B21',
    '#25D366',
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
  'WhatsApp Dark Mode Hex Code #111B21 — All Colors (Copy)',
  'WhatsApp dark mode hex codes: background #111B21, panel #202C33, bubble #2A3942, green #25D366, text #E9EDEF. Copy every WhatsApp UI color instantly.',
  'whatsapp-dark-mode-colors',
  getBlogArticleDatePublished('whatsapp-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#111B21' },
  { label: 'Header / panel', value: '#202C33' },
  { label: 'Composer / bubble', value: '#2A3942' },
  { label: 'WhatsApp green', value: '#25D366' },
  { label: 'Sent bubble green', value: '#005C4B' },
  { label: 'Text primary', value: '#E9EDEF' },
];

const FULL_WHATSAPP_COLORS = [
  { name: 'Main background', hex: '#111B21', role: 'Chat canvas behind messages' },
  { name: 'Header / panel', hex: '#202C33', role: 'Top bar, chat list rows' },
  { name: 'Composer surface', hex: '#2A3942', role: 'Input bar, received bubbles' },
  { name: 'Border / divider', hex: '#222D34', role: 'Subtle separators' },
  { name: 'Text primary', hex: '#E9EDEF', role: 'Message body, names' },
  { name: 'Text secondary', hex: '#8696A0', role: 'Timestamps, status text' },
  { name: 'WhatsApp green', hex: '#25D366', role: 'Brand accent, online status' },
  { name: 'Sent bubble', hex: '#005C4B', role: 'Outgoing message bubbles' },
  { name: 'Link blue', hex: '#53BDEB', role: 'URLs in messages' },
  { name: 'Check blue', hex: '#34B7F1', role: 'Read receipts' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#111B21', colorName: 'Background', rgbCode: 'rgb(17, 27, 33)' },
  { hexCode: '#202C33', colorName: 'Panel', rgbCode: 'rgb(32, 44, 51)' },
  { hexCode: '#2A3942', colorName: 'Bubble', rgbCode: 'rgb(42, 57, 66)' },
  { hexCode: '#25D366', colorName: 'Green', rgbCode: 'rgb(37, 211, 102)' },
  { hexCode: '#E9EDEF', colorName: 'Text', rgbCode: 'rgb(233, 237, 239)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the WhatsApp dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp dark mode background is #111B21. Header and chat list panels use #202C33, message composer and received bubbles use #2A3942, and primary text is #E9EDEF.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the WhatsApp green hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp green is #25D366 (rgb(37, 211, 102)). Sent message bubbles use a darker #005C4B. The green appears on send buttons, online indicators, and brand accents.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the WhatsApp dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'WhatsApp dark uses #111B21 background, #202C33 panels, #2A3942 bubbles, #E9EDEF text, #8696A0 secondary text, #25D366 green, #005C4B sent bubbles, and #53BDEB links.',
      },
    },
  ],
};

function WhatsAppFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full WhatsApp Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, bubbles, green accent, and message text colors.</p>
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
            {FULL_WHATSAPP_COLORS.map((row) => (
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">WhatsApp Dark Mode Colors: #111B21</h1>
            <AeoDirectAnswer
              question="What is the WhatsApp dark mode hex code?"
              answer="WhatsApp dark mode uses background #111B21, panels #202C33, bubbles #2A3942, text #E9EDEF, and WhatsApp green #25D366. Copy each hex below for messaging-app UI inspiration."
              codes={[
                { label: 'Background', value: '#111B21' },
                { label: 'Green', value: '#25D366' },
                { label: 'Panel', value: '#202C33' },
              ]}
            />
            <p className="text-green-100/95 text-lg max-w-3xl mb-6">
              Copy WhatsApp dark mode hex codes—background <strong className="text-white font-semibold">#111B21</strong>, panels{' '}
              <strong className="text-white font-semibold">#202C33</strong>, and WhatsApp green <strong className="text-white font-semibold">#25D366</strong>—for chat and messaging UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#111B21]" role="img" aria-label="WhatsApp dark mode background 111B21" />
            <div className="flex items-center gap-4 text-green-200/90 text-sm">
              <time dateTime="2026-07-09">Updated July 9, 2026</time>
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
                <PaletteQuickAnswer theme="forest" ariaLabel="WhatsApp dark mode quick copy" headline="WhatsApp Dark Mode — Quick Copy" subtext="Backgrounds, green accent, and text tokens. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for WhatsApp Dark Mode?</h2>
                  <p className="mb-6">
                    WhatsApp&apos;s dark background is <strong className="text-gray-900 dark:text-white">#111B21</strong>—a deep blue-gray tuned for OLED screens. Chat headers and list rows use <strong className="text-gray-900 dark:text-white">#202C33</strong>; the composer and received bubbles use <strong className="text-gray-900 dark:text-white">#2A3942</strong>. Outgoing bubbles use <strong className="text-gray-900 dark:text-white">#005C4B</strong> with brand green <strong className="text-gray-900 dark:text-white">#25D366</strong> on accents.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/slack-dark-mode-colors">Slack</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <WhatsAppFullTable />

                <PaletteUiUsageSection title="Why WhatsApp Dark Mode Works">
                  <p>
                    WhatsApp keeps surfaces close in value so conversations stay the focus, uses green only for brand and sent-state cues, and reserves blue for links and read receipts. Messaging apps worldwide borrow this restrained palette because it scales across billions of daily messages.
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
