import InlineTagLink from '../../components/InlineTagLink';
import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { getBlogArticleSchema, getBlogArticleDatePublished } from '../../../lib/getBlogArticleSchema';
import { buildMixRows } from '../../tools/color-mixer/colorMixing';
import { contrastBetween, textContrastOn } from '../../../lib/textContrast';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-red-and-white-make',
  title: 'What Color Does Red and White Make? 7 Mix Ratios & Swatches',
  description:
    'See the exact shades red and white make across 7 mixing ratios (90/10 to 10/90)—compare light red, pink, soft pink & blush swatches and copy hex codes.',
  keywords: [
    'what color does red and white make',
    'what does red and white make',
    'red and white make what color',
    'red white color',
    'mixing red and white',
    'pink hex',
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
  'What Color Does Red and White Make? 7 Mix Ratios & Swatches',
  'See the exact shades red and white make across 7 mixing ratios (90/10 to 10/90)—compare light red, pink, soft pink & blush swatches and copy hex codes.',
  'what-color-does-red-and-white-make',
  getBlogArticleDatePublished('what-color-does-red-and-white-make')
);

const RED = { name: 'red', hex: '#FF0000' };
const WHITE = { name: 'white', hex: '#FFFFFF' };

/** Share of white in each row. The hex values are calculated by the mixer, never typed in. */
const SHARES = [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9];
const LABELS = ['Bright red', 'Light red', 'Strawberry red', 'Pink', 'Soft pink', 'Blush', 'Pale pink'];

const MIX_ROWS = buildMixRows(RED, WHITE, SHARES).map((row, i) => ({ ...row, label: LABELS[i] }));
const [m90, m80, m70, m50, m30, m20, m10] = MIX_ROWS;
const redContrast = textContrastOn(RED.hex);
const DARK_RED = '#CC0000';
const darkRedContrast = contrastBetween(DARK_RED, '#FFFFFF');

const FAQ = [
  {
    question: 'What color does red and white make?',
    answer: `Red and white mixed together make pink and light red tones. A 50/50 mix of red (#FF0000) and white (#FFFFFF) gives pink at ${m50.hex}. More red keeps it a light red such as ${m80.hex}; more white moves it toward blush (${m20.hex}) and pale pink (${m10.hex}).`,
  },
  {
    question: 'What is the hex code for red and white mixed?',
    answer: `The even mix is ${m50.hex}. Use ${m70.hex} for a stronger, redder pink, ${m20.hex} for blush backgrounds, or ${m10.hex} for the palest tint. Copy any value from the ratio table above.`,
  },
  {
    question: 'Do red and white go together in design?',
    answer:
      'Yes. Red and white, and the soft pinks between them, read as romantic, clinical-clean, or festive depending on context. Weddings, beauty, and healthcare often pair blush backgrounds with deeper red accents. Always check contrast for small text on pink.',
  },
  {
    question: 'What happens when you mix red and white paint?',
    answer:
      'Adding white to red makes a tint: the color gets lighter and less intense, and once it is light enough we call it pink. White paint also makes the mix more opaque and a little cooler, so a pink made with white alone can look chalky next to the red you started with.',
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

export default function WhatColorDoesRedAndWhiteMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-red-700 via-rose-500 to-pink-200"
      heroAccentText="text-rose-100"
      h1="What Color Does Red and White Make? Pink — Hex Codes & Shades"
      featuredSnippet={`Red and white mixed together make pink. A 50/50 mix of red (#FF0000) and white (#FFFFFF) gives pink (${m50.hex}). More white gives blush and pale pink; more red keeps it a light red.`}
      heroSwatchHex={m50.hex}
      heroSwatchAria={`Pink from an even red and white mix, hex ${m50.hex.slice(1)}`}
      mixTableTitle="Red and White Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      color1={RED}
      color2={WHITE}
      shadeSectionTitle="What Shade of Pink Does Red and White Make?"
      shadeSectionBody={`Adding white to red makes a tint: the hue stays red while the color gets lighter and softer. With only 10 to 30% white (${m90.hex} to ${m70.hex}) most people would still call the result red. Around equal parts (${m50.hex}) it reads as pink, and by 80 to 90% white (${m20.hex}, ${m10.hex}) it is a blush that works better as a background than as an accent.`}
      paintVsScreenTitle="Paint and Screen Agree on This Mix"
      paintVsScreen={
        <>
          <p>
            White has no hue of its own, so there is nothing to pull red around the color wheel. It only makes red
            lighter. That is true for paint and for light, which is why every hex in the table is also exactly what a
            screen blend of red and white gives.
          </p>
          <p>
            Look at what changes in the numbers. Red stays at 255 in every row while green and blue rise together,
            from rgb({m90.rgb.r}, {m90.rgb.g}, {m90.rgb.b}) to rgb({m10.rgb.r}, {m10.rgb.g}, {m10.rgb.b}). Keeping
            green and blue equal is what keeps these pinks neutral. Let blue run ahead of green and the pink turns
            cooler, towards rose and hot pink. Let green run ahead and it warms up, towards salmon and coral.
          </p>
          <p>
            Not every pair behaves this simply. With{' '}
            <InlineTagLink href="/blog/what-color-does-blue-and-yellow-make">blue and yellow</InlineTagLink>, paint
            gives green while a screen gives gray.
          </p>
        </>
      }
      cssTitle="Making the Same Pink in CSS"
      cssContent={
        <>
          <p>
            Because the screen blend matches the paint mix here, CSS can do the mixing for you with{' '}
            <code>color-mix()</code>. The percentage belongs to the first color:
          </p>
          <pre className="not-prose overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
            <code>{`color-mix(in srgb, #FF0000 50%, #FFFFFF)  /* ${m50.hex} */
color-mix(in srgb, #FF0000 20%, #FFFFFF)  /* ${m20.hex} */`}</code>
          </pre>
          <p>
            <code>color-mix()</code> works in current versions of Chrome, Edge, Firefox and Safari. If you want a
            full ramp of tints from one red rather than a single mix, the{' '}
            <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink> exports ten
            steps at once.
          </p>
        </>
      }
      combinationsTitle="Red and White Color Combinations"
      combinationsIntro="Four palettes that balance red, white, and pink tints."
      combinations={[
        {
          title: 'Modern romance',
          body: `Pink ${m50.hex} sections, burgundy #800020 type accents, white #FFFFFF cards.`,
          swatches: [m50.hex, '#800020', '#FFFFFF', m20.hex],
        },
        {
          title: 'Valentine soft',
          body: `Blush ${m20.hex} backgrounds, strawberry red ${m70.hex} buttons, pale pink ${m10.hex} dividers.`,
          swatches: [m20.hex, m70.hex, m10.hex, '#FF0000'],
        },
        {
          title: 'Clinical alert',
          body: `White #FFFFFF canvas, light red ${m80.hex} warnings, soft pink ${m30.hex} hover states.`,
          swatches: ['#FFFFFF', m80.hex, m30.hex, m90.hex],
        },
        {
          title: 'Luxury rose',
          body: `Charcoal #1F2937 text, pink ${m50.hex} hero, gold #D4AF37 micro-accents.`,
          swatches: [m50.hex, '#1F2937', '#D4AF37', m20.hex],
        },
      ]}
      designTitle="Using Red and White in Design"
      designContent={
        <>
          <p>
            Red-and-white palettes signal love, celebration, and gentle urgency, which makes them common for beauty,
            nonprofits, and seasonal retail. Use pale pinks for large background areas and reserve saturated red for
            buttons and icons.
          </p>
          <p>
            For warm mixes, see{' '}
            <InlineTagLink href="/blog/what-color-does-red-and-yellow-make">what color does red and yellow make</InlineTagLink>.
          </p>
        </>
      }
      contrastNote={
        <p>
          White text does not reach 4.5:1 on any pink in the table, and not even on pure red: #FF0000 with white text
          scores {redContrast.white.label}. Use dark text on pink and red fills, or switch to a darker red such as{' '}
          {DARK_RED}, where white text scores {darkRedContrast.label}.
        </p>
      }
      practiceTitle="Mixing Red and White Paint: What to Expect"
      practiceContent={
        <>
          <p>
            <strong className="text-gray-900 dark:text-white">Add red to white, not white to red.</strong> Red is the
            stronger of the two, and a small amount tints a lot of white. Starting from red and trying to lighten it
            uses far more paint to get to the same pink.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">White changes more than lightness.</strong> It also
            makes the mix more opaque and slightly cooler, which is why a pink made from red and white alone can look
            chalky. A very small touch of yellow warms it back up, towards salmon.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">The red you start with decides the pink.</strong> A red
            that leans orange (cadmium red) gives warm, coral pinks. A red that leans purple (alizarin crimson,
            quinacridone rose) gives cooler rose pinks. Swap the red in the mixer above for a different one to see how
            far the result moves.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer"
      mixerLabel="Red & White Color Mixer"
      faqSchema={faqSchema}
      articleSchema={articleSchema}
      breadcrumbTitle={articleSchema.headline}
      breadcrumbSlug="what-color-does-red-and-white-make"
    />
  );
}
