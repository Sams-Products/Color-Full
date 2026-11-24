import InlineTagLink from '../../components/InlineTagLink';
import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { getBlogArticleSchema, getBlogArticleDatePublished } from '../../../lib/getBlogArticleSchema';
import { buildMixRows } from '../../tools/color-mixer/colorMixing';
import { textContrastOn } from '../../../lib/textContrast';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-red-and-yellow-make',
  title: 'What Color Does Red and Yellow Make? 7 Mix Ratios & Swatches',
  description:
    'See the exact shades red and yellow make across 7 mixing ratios (90/10 to 10/90)—compare red-orange, true orange & golden swatches and copy hex codes.',
  keywords: [
    'what color does red and yellow make',
    'what does red and yellow make',
    'red and yellow make what color',
    'red yellow color',
    'mixing red and yellow',
    'orange hex',
    'color mixing',
    'Theme & Color',
  ],
  openGraphType: 'article',
  openGraph: {
    publishedTime: '2026-05-21T00:00:00.000Z',
    modifiedTime: '2026-11-10T00:00:00.000Z',
  },
});

const articleSchema = getBlogArticleSchema(
  'What Color Does Red and Yellow Make? 7 Mix Ratios & Swatches',
  'See the exact shades red and yellow make across 7 mixing ratios (90/10 to 10/90)—compare red-orange, true orange & golden swatches and copy hex codes.',
  'what-color-does-red-and-yellow-make',
  getBlogArticleDatePublished('what-color-does-red-and-yellow-make')
);

const RED = { name: 'red', hex: '#FF0000' };
const YELLOW = { name: 'yellow', hex: '#FFFF00' };

/** Share of yellow in each row. The hex values are calculated by the mixer, never typed in. */
const SHARES = [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9];
const LABELS = [
  'Deep red-orange',
  'Red-orange',
  'Vivid orange-red',
  'True orange',
  'Golden orange',
  'Golden yellow',
  'Bright yellow',
];

const MIX_ROWS = buildMixRows(RED, YELLOW, SHARES).map((row, i) => ({ ...row, label: LABELS[i] }));
const [m90, m80, m70, m50, m30, m20, m10] = MIX_ROWS;
const orangeContrast = textContrastOn(m50.hex);

const FAQ = [
  {
    question: 'What color does red and yellow make?',
    answer: `Red and yellow make orange when mixed together. A balanced 50/50 blend of pure red (#FF0000) and pure yellow (#FFFF00) produces true orange at ${m50.hex}. Shifting the ratio toward red gives red-orange tones such as ${m80.hex}; shifting toward yellow gives golden tones such as ${m20.hex}.`,
  },
  {
    question: 'What is the hex code for red and yellow mixed?',
    answer: `The even mix is ${m50.hex} (true orange). Use ${m70.hex} for more red, ${m30.hex} for more yellow, or ${m10.hex} when yellow dominates. The table above lists seven copy-ready hex codes for common red-to-yellow ratios.`,
  },
  {
    question: 'Do red and yellow go together in design?',
    answer:
      'Yes. Red and yellow, and the oranges between them, are a proven warm combination for food, sport, and youth brands. Keep one hue dominant per layout, use charcoal or white for body text, and check contrast before shipping buttons.',
  },
  {
    question: 'What happens when you mix red and yellow paint?',
    answer:
      'You get orange. Red and yellow pigments both reflect the warm end of the spectrum, so the mix stays bright instead of going dark or muddy. The exact shade depends on the pigments: a warm red with a warm yellow gives the brightest orange, and most reds are stronger than most yellows, so you need more yellow than red to reach a mid orange.',
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

export default function WhatColorDoesRedAndYellowMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-red-700 via-orange-600 to-amber-400"
      heroAccentText="text-orange-100"
      h1="What Color Does Red and Yellow Make? Orange — Hex Codes & Mixing Guide"
      featuredSnippet={`Red and yellow make orange when mixed together. A 50/50 mix of red (#FF0000) and yellow (#FFFF00) produces orange (${m50.hex}). The more red you add the deeper and redder the orange; the more yellow you add the brighter and more golden it becomes.`}
      heroSwatchHex={m50.hex}
      heroSwatchAria={`True orange from an even red and yellow mix, hex ${m50.hex.slice(1)}`}
      mixTableTitle="Red and Yellow Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      color1={RED}
      color2={YELLOW}
      shadeSectionTitle="What Shade of Orange Does Red and Yellow Make?"
      shadeSectionBody={`The shade depends entirely on how much of each color you use. Red-heavy mixes stay in the red-orange family: ${m90.hex}, ${m80.hex} and ${m70.hex} suit bold alerts and autumn palettes. Equal parts give ${m50.hex}, a true mid orange. With more yellow the mix turns golden: ${m30.hex}, then ${m20.hex} and ${m10.hex}, which read as warm yellows rather than oranges.`}
      paintVsScreenTitle="Paint and Screen Agree on This Mix"
      paintVsScreen={
        <>
          <p>
            Red and yellow are neighbors on the painter&apos;s color wheel and on the screen&apos;s color wheel, with
            orange between them on both. That makes this one of the mixes where paint and light give the same answer:
            every hex in the table is also exactly what a screen blend of red and yellow returns.
          </p>
          <p>
            The numbers show why. Red is rgb(255, 0, 0) and yellow is rgb(255, 255, 0). The red channel is full in
            both and blue is absent from both, so the only thing that changes down the table is green, rising from 0
            to 255. Orange is simply red light with about half the green switched on: {m50.hex} is rgb({m50.rgb.r},{' '}
            {m50.rgb.g}, {m50.rgb.b}).
          </p>
          <p>
            It does not always work out this neatly. With{' '}
            <InlineTagLink href="/blog/what-color-does-blue-and-yellow-make">blue and yellow</InlineTagLink>, paint
            gives green while a screen gives gray.
          </p>
        </>
      }
      cssTitle="Making the Same Orange in CSS"
      cssContent={
        <>
          <p>
            Because the screen blend matches the paint mix here, CSS can do the mixing for you with{' '}
            <code>color-mix()</code>. The percentage belongs to the first color:
          </p>
          <pre className="not-prose overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
            <code>{`color-mix(in srgb, #FF0000 50%, #FFFF00)  /* ${m50.hex} */
color-mix(in srgb, #FF0000 30%, #FFFF00)  /* ${m30.hex} */`}</code>
          </pre>
          <p>
            <code>color-mix()</code> works in current versions of Chrome, Edge, Firefox and Safari. If you need to
            support older browsers, use the hex codes from the table instead.
          </p>
        </>
      }
      combinationsTitle="Red and Yellow Color Combinations"
      combinationsIntro="Four palette ideas that keep red, yellow, and orange working together without visual noise."
      combinations={[
        {
          title: 'Sunset burst',
          body: `Hero gradient from #FF0000 through ${m50.hex} to ${m20.hex} on dark charcoal (#1F2937) text areas.`,
          swatches: ['#FF0000', m50.hex, m20.hex, '#1F2937'],
        },
        {
          title: 'Fast food warmth',
          body: `Orange-red ${m70.hex} buttons, golden ${m30.hex} badges, cream #FFFBEB backgrounds.`,
          swatches: [m70.hex, m30.hex, '#FFFBEB', '#FF0000'],
        },
        {
          title: 'Sport energy',
          body: `Red #FF0000 jerseys, golden yellow ${m20.hex} accents, white #FFFFFF fields and typography.`,
          swatches: ['#FF0000', m20.hex, '#FFFFFF', m80.hex],
        },
        {
          title: 'Editorial citrus',
          body: `True orange ${m50.hex} headlines, bright yellow ${m10.hex} dividers, off-white #FAFAF9 body.`,
          swatches: [m50.hex, m10.hex, '#FAFAF9', m30.hex],
        },
      ]}
      designTitle="Using Red and Yellow in Design"
      designContent={
        <>
          <p>
            Mixing red and yellow signals energy, appetite, and optimism, which is why the pair dominates food
            delivery, athletics, and children&apos;s products. Limit saturated orange to one focal element per
            viewport so buttons do not compete with navigation.
          </p>
          <p>
            Explore related mixes:{' '}
            <InlineTagLink href="/blog/what-color-does-red-and-white-make">what color does red and white make</InlineTagLink>.
          </p>
        </>
      }
      contrastNote={
        <p>
          Orange is a common accessibility trap. White text on {m50.hex} scores only {orangeContrast.white.label},
          well under 4.5:1, while black scores {orangeContrast.black.label}. For orange buttons, use dark text, or
          pick a much darker orange if the label has to be white.
        </p>
      }
      practiceTitle="Mixing Red and Yellow Paint: What to Expect"
      practiceContent={
        <>
          <p>
            <strong className="text-gray-900 dark:text-white">Start with yellow and add red.</strong> Most reds are
            stronger than most yellows, so equal amounts of real paint usually give a red-orange closer to the upper
            rows of the table. Add red to yellow a little at a time until you reach the orange you want.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">Warm reds and warm yellows give the brightest orange.</strong>{' '}
            A red that leans orange (cadmium red, scarlet) with a yellow that leans orange (cadmium yellow) keeps the
            mix clean. A red that leans purple (alizarin crimson) or a greenish lemon yellow gives a duller orange,
            because each brings a trace of blue, and blue is orange&apos;s opposite on the wheel.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">To darken orange, reach for blue before black.</strong>{' '}
            A small amount of blue takes orange towards rust and brown. Black darkens it too, but in yellow-heavy
            mixes it pushes the color towards olive. Both effects show up if you try orange with blue, and yellow with
            black, in the mixer above.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer"
      mixerLabel="Red & Yellow Color Mixer"
      faqSchema={faqSchema}
      articleSchema={articleSchema}
      breadcrumbTitle={articleSchema.headline}
      breadcrumbSlug="what-color-does-red-and-yellow-make"
    />
  );
}
