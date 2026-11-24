import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import BlogToolsCTA from '../components/BlogToolsCTA';
import { PalettePairingsSection } from '../components/PaletteReferenceBlocks';
import ComputedMixTable from '../components/ComputedMixTable';
import { MixContrastSummary } from '../components/ColorMixGuidePost';
import ColorMixer from '../../tools/color-mixer/components/ColorMixer';
import { buildMixRows } from '../../tools/color-mixer/colorMixing';
import { textContrastOn } from '../../../lib/textContrast';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import BlogArticleSchema from '../components/BlogArticleSchema';
import { getBlogArticleSchema, getBlogArticleDatePublished } from '../../../lib/getBlogArticleSchema';
import BlogBreadcrumbs from '../components/BlogBreadcrumbs';
import AuthorByline from '../components/AuthorByline';

const LAST_MODIFIED = '2026-11-10T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-pink-and-purple-make',
  title: 'What Color Does Pink and Purple Make? 7 Mix Ratios & Swatches',
  description:
    'See the exact shades pink and purple make across 7 mixing ratios (90/10 to 10/90)—compare visual swatches for paint & digital UI and copy hex codes.',
  keywords: [
    'what color does pink and purple make',
    'what color does pink and purple make when mixed',
    'pink and purple make what color',
    'pink purple mix hex',
    'magenta hex',
    'mauve hex',
    'pink and purple mixed',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-06-05T00:00:00.000Z',
    modifiedTime: LAST_MODIFIED,
  },
});

const articleSchema = getBlogArticleSchema(
  'What Color Does Pink and Purple Make? 7 Mix Ratios & Swatches',
  'See the exact shades pink and purple make across 7 mixing ratios (90/10 to 10/90)—compare visual swatches for paint & digital UI and copy hex codes.',
  'what-color-does-pink-and-purple-make',
  getBlogArticleDatePublished('what-color-does-pink-and-purple-make')
);

const HOT_PINK = { name: 'pink', hex: '#FF69B4' };
const LIGHT_PINK = { name: 'light pink', hex: '#FFC0CB' };
const PURPLE = { name: 'purple', hex: '#800080' };

/** Share of purple in each row. The hex values are calculated by the mixer, never typed in. */
const SHARES = [0.1, 0.2, 0.4, 0.5, 0.6, 0.8, 0.9];

const HOT_LABELS = [
  'Light rose magenta',
  'Soft magenta',
  'Rose magenta',
  'Deep magenta',
  'Berry purple',
  'Magenta purple',
  'Rich purple',
];
const LIGHT_LABELS = ['Soft pink', 'Rose pink', 'Orchid pink', 'Orchid', 'Deep orchid', 'Plum purple', 'Rich purple'];

const MIX_ROWS = buildMixRows(HOT_PINK, PURPLE, SHARES).map((row, i) => ({ ...row, label: HOT_LABELS[i] }));
const LIGHT_ROWS = buildMixRows(LIGHT_PINK, PURPLE, SHARES).map((row, i) => ({ ...row, label: LIGHT_LABELS[i] }));
const [, m80, m60, m50, m40, m20] = MIX_ROWS;
const light50 = LIGHT_ROWS[3];
const c60 = textContrastOn(m60.hex);
const c50 = textContrastOn(m50.hex);

const FAQ = [
  {
    question: 'What color does pink and purple make?',
    answer: `Pink and purple mixed together make magenta or mauve depending on the pink and the ratio. A balanced 50/50 blend of hot pink (#FF69B4) and purple (#800080) produces ${m50.hex}, a deep magenta. With a paler pink (#FFC0CB) the same mix gives ${light50.hex}, a softer orchid. More pink yields lighter rosy tones; more purple yields deeper violet hues.`,
  },
  {
    question: 'What is the hex code for pink and purple mixed?',
    answer: `The even mix of hot pink and purple is ${m50.hex}. Use ${m80.hex} when pink dominates (80/20), ${m60.hex} for 60/40, ${m40.hex} for 40/60, and ${m20.hex} when purple dominates (20/80). The table above lists seven copy-ready hex codes.`,
  },
  {
    question: 'Is magenta pink or purple?',
    answer: `Magenta (#FF00FF) is neither pure pink nor pure purple. It sits between them: warmer than violet (#EE82EE), cooler and more purple than hot pink (#FF69B4). Mid-mixes like ${m50.hex} feel magenta without the neon saturation.`,
  },
  {
    question: 'What color is between pink and purple?',
    answer: `The color between pink and purple is most often called mauve (#E0B0FF), magenta (#FF00FF), or fuchsia (#FF00FF). Lighter dusty mixes read as mauve or orchid (#DA70D6); balanced mixes read as magenta; deep mixes lean plum (#DDA0DD) or berry purple (${m40.hex}).`,
  },
  {
    question: 'Do pink and purple go together in design?',
    answer:
      'Yes, for beauty, events, music, and creative portfolios. Limit saturated magenta to one hero or button per screen, pair it with charcoal (#374151) or cream (#FFF8F0) for reading areas, and run every text-on-color pair through a WCAG contrast checker before launch.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const H2 = 'text-2xl font-bold text-gray-900 dark:text-white mb-4';
const P = 'text-gray-700 dark:text-gray-300 leading-relaxed mb-4';
const STRONG = 'text-gray-900 dark:text-white';

export default function WhatColorDoesPinkAndPurpleMakePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      <BlogArticleSchema schema={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={articleSchema.headline} slug="what-color-does-pink-and-purple-make" />
        </div>
      </div>

      <section className="bg-gradient-to-br from-pink-500 via-fuchsia-600 to-purple-800 text-white py-12 md:py-16">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              What Color Does Pink and Purple Make? 7 Mix Ratios, Swatches &amp; Hex Codes
            </h1>
            <AuthorByline variant="block" className="text-white/90" />
            <p className="text-lg md:text-xl font-medium text-pink-50/95 leading-relaxed border-l-4 border-amber-300 bg-white/10 pl-5 pr-4 py-4 rounded-r-xl">
              Pink and purple mixed together make magenta or mauve. A 50/50 mix of hot pink (#FF69B4) and purple (#800080)
              produces {m50.hex}, a deep magenta. The more pink you add the lighter and more rosy the result; the more
              purple you add the deeper and more violet it becomes.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <div
            className="w-full h-40 md:h-52 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg mb-10"
            style={{ backgroundColor: m50.hex }}
            role="img"
            aria-label={`Pink and purple 50/50 mix, deep magenta hex ${m50.hex.slice(1)}`}
          />

          <section className="mb-10">
            <h2 className={H2}>Pink and Purple Mix Ratios — Hex Code Table</h2>
            <p className={P}>
              If you searched <strong className={STRONG}>what color does pink and purple make</strong>, the answer lives
              in the ratio. Pink is a light, warm red; purple adds cool blue-violet depth. Blending them skips true red
              and lands in the magenta–mauve family. Each row below uses hot pink (#FF69B4) and purple (#800080) as
              endpoints.
            </p>
            <ComputedMixTable rows={MIX_ROWS} caption="Hot pink and purple mix ratios with hex codes" />
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Every hex code here is calculated by our{' '}
              <InlineTagLink href="/tools/color-mixer">color mixer</InlineTagLink>, not picked by eye, so you can
              reproduce each row with the mixer below. &ldquo;Best text color&rdquo; is the WCAG contrast ratio of
              black or white text on that swatch.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={H2}>It Depends Which Pink You Start With</h2>
            <p className={P}>
              &ldquo;Pink&rdquo; covers a wide range. Hot pink is already close to magenta, so mixing it with purple
              gives strong, saturated results. A pale pink such as light pink (#FFC0CB) is mostly white, and that white
              carries into the mix: the same ratios give softer orchid and mauve tones instead. The even mix moves from{' '}
              {m50.hex} to {light50.hex}.
            </p>
            <ComputedMixTable rows={LIGHT_ROWS} caption="Light pink and purple mix ratios with hex codes" />
          </section>

          <section className="mb-10">
            <h2 className={H2}>Try Any Ratio Yourself</h2>
            <p className={P}>
              Drag the slider to see every step between the rows above, or swap either color for the exact pink and
              purple you are working with.
            </p>
            <ColorMixer initialColor1={HOT_PINK.hex} initialColor2={PURPLE.hex} />
          </section>

          <section className="mb-10">
            <h2 className={H2}>What is the Color Called When You Mix Pink and Purple?</h2>
            <p className={P}>
              There is no single official name. The label depends on lightness and saturation. Lighter, dustier mixes
              are called <strong className={STRONG}>mauve</strong> (<strong className={STRONG}>#E0B0FF</strong>) or{' '}
              <strong className={STRONG}>orchid</strong> (<strong className={STRONG}>#DA70D6</strong>). Balanced vibrant
              mixes are called <strong className={STRONG}>magenta</strong> (<strong className={STRONG}>#FF00FF</strong>).
              Deep purple-heavy blends read as <strong className={STRONG}>berry</strong> (
              <strong className={STRONG}>{m40.hex}</strong>) or <strong className={STRONG}>plum</strong> (
              <strong className={STRONG}>#DDA0DD</strong>).
            </p>
            <p className={P}>
              For a full dictionary of pink-purple color names with swatches, see our{' '}
              <InlineTagLink href="/blog/pink-purple-color-name">pink-purple color names guide</InlineTagLink>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className={H2}>Paint and Screen Agree on This Mix</h2>
            <p className={P}>
              Pink and purple sit on the same side of the color wheel, between red and blue, and that is true of the
              painter&apos;s wheel and of the screen&apos;s wheel. With no third color between them to pass through,
              mixing them as paint and blending them as light give the same result, so every hex in the tables is also
              what a screen blend returns. CSS can therefore do the mixing for you. The percentage belongs to the first
              color:
            </p>
            <pre className="overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100 mb-4">
              <code>{`color-mix(in srgb, #FF69B4 50%, #800080)  /* ${m50.hex} */
color-mix(in srgb, #FFC0CB 50%, #800080)  /* ${light50.hex} */`}</code>
            </pre>
            <p className={P}>
              It does not always work out this neatly. With{' '}
              <InlineTagLink href="/blog/what-color-does-blue-and-yellow-make">blue and yellow</InlineTagLink>, paint
              gives green while a screen gives gray.
            </p>
          </section>

          <PalettePairingsSection
            title="Pink and Purple Color Combinations"
            intro="Three ready-made palettes that keep pink-purple mixes readable—use one saturated accent per layout and neutrals for body copy."
            pairings={[
              {
                title: 'Magenta glow',
                body: `Hero gradient from #FF69B4 through ${m50.hex} to #800080 on charcoal (#111827) type areas—ideal for events and music landing pages.`,
                swatches: ['#FF69B4', m50.hex, '#800080', '#111827'],
              },
              {
                title: 'Soft mauve editorial',
                body: `Soft magenta ${m80.hex} cards, magenta purple ${m20.hex} headlines, cream #FFF8F0 reading wells—calm enough for long-form beauty content.`,
                swatches: [m80.hex, m20.hex, '#FFF8F0', '#374151'],
              },
              {
                title: 'Beauty luxury',
                body: `Deep purple #800080 navigation, magenta ${m50.hex} buttons, gold #FFD700 accents on white—premium cosmetics and jewelry positioning.`,
                swatches: ['#800080', m50.hex, '#FFD700', '#FFFFFF'],
              },
            ]}
          />

          <section className="mt-10">
            <h2 className={H2}>Text on Pink-Purple Mixes: Watch the Middle</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <MixContrastSummary rows={MIX_ROWS} />
              <p>
                The awkward zone is the middle of the range, where the best text color flips from black to white and
                neither has much margin. On {m60.hex} (60/40), black text scores {c60.black.label} and white{' '}
                {c60.white.label}. Ten points further on, at {m50.hex}, it is the other way round: white scores{' '}
                {c50.white.label} and black {c50.black.label}. If a mid magenta has to carry small text, check the
                exact shade in the <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>{' '}
                rather than assuming white will work.
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className={H2}>Mixing Pink and Purple Paint: What to Expect</h2>
            <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                <strong className={STRONG}>Add purple to pink, not the other way round.</strong> Purple is the darker
                and stronger color, and a small amount shifts a lot of pink. Starting from purple and trying to lighten
                it with pink uses far more paint.
              </p>
              <p>
                <strong className={STRONG}>Pink already contains white.</strong> Most pink paint is a red or magenta
                pigment mixed with white, so pink-purple mixes come out soft and opaque, closer to the second table
                than the first. For a deep, clear magenta, start from a magenta or rose pigment without white in it and
                add purple to that.
              </p>
              <p>
                <strong className={STRONG}>Too purple? Bring it back with pink, then adjust warmth.</strong> A touch of
                red warms the mix towards raspberry; a touch of blue cools it towards violet.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
            <div className="space-y-6">
              {FAQ.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogToolsCTA variant="graphics" />

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-10">
            Validate text on your new palette with our{' '}
            <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>. Related:{' '}
            <InlineTagLink href="/blog/pink-purple-color-name">color between pink and purple names</InlineTagLink>,{' '}
            <InlineTagLink href="/blog/pink-purple-color-name">mauve and lavender hex codes &amp; shades</InlineTagLink>.
          </p>
        </div>
      </div>
    </article>
  );
}
