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

const LAST_MODIFIED = '2026-07-30T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/telegram-dark-mode-colors',
  title: 'Telegram Dark Mode Hex Code #0E1621 — All Colors (Copy)',
  description:
    'Telegram dark mode hex codes: background #0E1621, bubbles #182533, accent #2AABEE, text #FFFFFF. Copy every Telegram dark theme color instantly.',
  keywords: [
    'telegram dark mode colors',
    'telegram dark mode hex code',
    'telegram background color',
    'telegram color palette',
    'telegram UI colors',
    '#0E1621',
    '#2AABEE',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-07-30T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
  other: {
    'article:modified_time': LAST_MODIFIED,
  },
});
const articleSchema = getBlogArticleSchema(
  'Telegram Dark Mode Hex Code #0E1621 — All Colors (Copy)',
  'Telegram dark mode hex codes: background #0E1621, bubbles #182533, accent #2AABEE, text #FFFFFF. Copy every Telegram dark theme color instantly.',
  'telegram-dark-mode-colors',
  getBlogArticleDatePublished('telegram-dark-mode-colors'),
  BLOG_ARTICLE_DATE_MODIFIED
);

const QUICK_ROWS = [
  { label: 'Main background', value: '#0E1621' },
  { label: 'Chat list / panel', value: '#17212B' },
  { label: 'Received bubble', value: '#182533' },
  { label: 'Sent bubble', value: '#2B5278' },
  { label: 'Telegram blue', value: '#2AABEE' },
  { label: 'Text primary', value: '#FFFFFF' },
];

const FULL_TELEGRAM_COLORS = [
  { name: 'Main background', hex: '#0E1621', role: 'Chat canvas' },
  { name: 'Chat list / sidebar', hex: '#17212B', role: 'Conversation list panel' },
  { name: 'Received bubble', hex: '#182533', role: 'Incoming messages' },
  { name: 'Sent bubble', hex: '#2B5278', role: 'Outgoing messages' },
  { name: 'Composer / input', hex: '#17212B', role: 'Message input bar' },
  { name: 'Border / divider', hex: '#0F1C26', role: 'Subtle separators' },
  { name: 'Text primary', hex: '#FFFFFF', role: 'Message body' },
  { name: 'Text secondary', hex: '#7F8B99', role: 'Timestamps, hints' },
  { name: 'Telegram blue', hex: '#2AABEE', role: 'Links, accents, brand' },
  { name: 'Online green', hex: '#4DCD5E', role: 'Online status' },
  { name: 'Danger red', hex: '#E53935', role: 'Errors, destructive' },
];

const SIDEBAR_PALETTE = [
  { hexCode: '#0E1621', colorName: 'Background', rgbCode: 'rgb(14, 22, 33)' },
  { hexCode: '#17212B', colorName: 'Panel', rgbCode: 'rgb(23, 33, 43)' },
  { hexCode: '#182533', colorName: 'Bubble', rgbCode: 'rgb(24, 37, 51)' },
  { hexCode: '#2AABEE', colorName: 'Blue', rgbCode: 'rgb(42, 171, 238)' },
  { hexCode: '#2B5278', colorName: 'Sent', rgbCode: 'rgb(43, 82, 120)' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Telegram dark mode background color hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram dark mode background is commonly #0E1621. Chat list panels use #17212B, received bubbles #182533, and sent bubbles #2B5278.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Telegram blue hex code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram brand/accent blue is #2AABEE (rgb(42, 171, 238)). It appears on links, send accents, and brand moments against the dark blue-gray canvas.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are all the Telegram dark mode colors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Telegram dark uses #0E1621 background, #17212B panels, #182533 received bubbles, #2B5278 sent bubbles, #FFFFFF text, #7F8B99 secondary text, and #2AABEE blue.',
      },
    },
  ],
};

function TelegramFullTable() {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Full Telegram Dark Mode Color Palette</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Backgrounds, bubbles, Telegram blue, and text colors.</p>
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
            {FULL_TELEGRAM_COLORS.map((row) => (
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

export default function TelegramDarkModeColorsPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="telegram-dark-mode-colors" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-[#0A1018] via-[#0E1621] to-[#2AABEE] text-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center text-sky-200 hover:text-white mb-6 transition-colors text-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">Telegram Dark Mode Colors: #0E1621</h1>
            <AeoDirectAnswer
              question="What is the Telegram dark mode hex code?"
              answer="Telegram dark mode uses background #0E1621, panels #17212B, received bubbles #182533, sent bubbles #2B5278, and Telegram blue #2AABEE. Copy each hex below for messaging UI inspiration."
              codes={[
                { label: 'Background', value: '#0E1621' },
                { label: 'Blue', value: '#2AABEE' },
                { label: 'Sent', value: '#2B5278' },
              ]}
            />
            <p className="text-sky-100/95 text-lg max-w-3xl mb-6">
              Copy Telegram dark mode hex codes—background <strong className="text-white font-semibold">#0E1621</strong>, bubbles{' '}
              <strong className="text-white font-semibold">#182533</strong>, and Telegram blue <strong className="text-white font-semibold">#2AABEE</strong>—for chat and messaging UI tokens.
            </p>
            <div className="w-full max-w-2xl h-36 md:h-44 rounded-2xl border-2 border-white/20 shadow-2xl mb-6 bg-[#0E1621]" role="img" aria-label="Telegram dark mode background 0E1621" />
            <div className="flex items-center gap-4 text-sky-200/90 text-sm">
              <time dateTime="2026-07-30">Updated July 30, 2026</time>
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
                <PaletteQuickAnswer theme="navy" ariaLabel="Telegram dark mode quick copy" headline="Telegram Dark Mode — Quick Copy" subtext="Backgrounds, bubbles, blue accent, and text. Click Copy on any row." rows={QUICK_ROWS} />

                <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  <h2 className="text-2xl font-bold mt-0 mb-4">What is the Hex Code for Telegram Dark Mode?</h2>
                  <p className="mb-6">
                    Telegram&apos;s dark chat background is commonly <strong className="text-gray-900 dark:text-white">#0E1621</strong>. The chat list uses <strong className="text-gray-900 dark:text-white">#17212B</strong>; received bubbles sit on <strong className="text-gray-900 dark:text-white">#182533</strong> and sent bubbles on <strong className="text-gray-900 dark:text-white">#2B5278</strong>. Brand accent blue is <strong className="text-gray-900 dark:text-white">#2AABEE</strong>.
                  </p>
                  <p className="mb-6">
                    Compare with <InlineTagLink href="/blog/whatsapp-dark-mode-colors">WhatsApp</InlineTagLink>,{' '}
                    <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>, and the full{' '}
                    <InlineTagLink href="/blog/dark-mode-color-palette">dark mode color palette</InlineTagLink> guide.
                  </p>
                </div>

                <TelegramFullTable />

                <PaletteUiUsageSection title="Why Telegram Dark Mode Works">
                  <p>
                    Telegram uses a cool blue-black canvas so message bubbles read clearly, reserves brand blue for accents, and separates sent vs received with different bubble depths. Messaging apps borrow this pattern because it scales across long chats without eye fatigue.
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
                  <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">Telegram dark (copy hex)</h3>
                  <ColorPaletteClient colors={SIDEBAR_PALETTE} designTitle="Telegram dark" showHexCopyIcon />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
