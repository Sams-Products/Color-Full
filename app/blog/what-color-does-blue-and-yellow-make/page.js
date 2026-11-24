import InlineTagLink from '../../components/InlineTagLink';
import ColorMixGuidePost from '../components/ColorMixGuidePost';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { getBlogArticleSchema, getBlogArticleDatePublished } from '../../../lib/getBlogArticleSchema';
import { buildMixRows } from '../../tools/color-mixer/colorMixing';
import { textContrastOn } from '../../../lib/textContrast';

export const metadata = buildPageMetadata({
  path: '/blog/what-color-does-blue-and-yellow-make',
  title: 'What Color Does Blue and Yellow Make? 7 Mix Ratios & Swatches',
  description:
    'Blue and yellow make green as paint but gray on a screen. Compare both across 7 mixing ratios (90/10 to 10/90), copy the hex codes and try any ratio.',
  keywords: [
    'what color does blue and yellow make',
    'what does blue and yellow make',
    'blue and yellow make what color',
    'blue yellow color',
    'mixing blue and yellow',
    'green hex',
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
  'What Color Does Blue and Yellow Make? Green — Hex Codes & Mixing Guide',
  'Blue and yellow make green as paint but gray on a screen. See hex codes for seven blue-yellow ratios, compare paint and screen results, and try any ratio in the mixer.',
  'what-color-does-blue-and-yellow-make',
  getBlogArticleDatePublished('what-color-does-blue-and-yellow-make')
);

const BLUE = { name: 'blue', hex: '#0000FF' };
const YELLOW = { name: 'yellow', hex: '#FFFF00' };

/** Share of yellow in each row. The hex values are calculated by the mixer, never typed in. */
const SHARES = [0.1, 0.2, 0.3, 0.5, 0.7, 0.8, 0.9];
const LABELS = ['Azure blue', 'Cerulean', 'Jade green', 'True green', 'Grass green', 'Lime green', 'Lime yellow'];

const MIX_ROWS = buildMixRows(BLUE, YELLOW, SHARES).map((row, i) => ({ ...row, label: LABELS[i] }));
const [m90, m80, m70, m50, m30, m20, m10] = MIX_ROWS;
const evenMixContrast = textContrastOn(m50.hex);

const FAQ = [
  {
    question: 'What color does blue and yellow make?',
    answer: `Blue and yellow make green when mixed as paint. Equal parts of pure blue (#0000FF) and pure yellow (#FFFF00) give ${m50.hex} in our mixer. More blue gives blue-greens such as ${m80.hex}; more yellow gives yellow-greens such as ${m20.hex}.`,
  },
  {
    question: 'What is the hex code for blue and yellow mixed?',
    answer: `For an even paint-style mix use ${m50.hex}. With more blue the mix moves through ${m70.hex} and ${m80.hex}; with more yellow, through ${m30.hex} and ${m20.hex}. Blended as light on a screen, the same two colors average to ${m50.screenHex}, a neutral gray.`,
  },
  {
    question: 'Why do blue and yellow make gray on a screen?',
    answer: `A screen mixes light. Yellow light is red and green light together, so adding blue supplies all three channels, and an even blend of them is mid gray (${m50.screenHex}). Paint works by absorbing light instead, and the part of the spectrum that blue and yellow pigments both still reflect is green.`,
  },
  {
    question: 'Do blue and yellow go together in design?',
    answer:
      'Yes. Blue and yellow, and the greens between them, suggest clarity, growth and trust, which is why they are common in eco brands, education and dashboards. Keep one dominant green or blue per screen so the interface stays calm.',
  },
  {
    question: 'What happens when you mix blue and yellow paint?',
    answer:
      'Each pigment absorbs part of the light. Blue paint absorbs most red and yellow light, yellow paint absorbs most blue light, and green is what both still reflect. The exact green depends on the pigments: a greenish blue such as phthalo gives a cleaner, brighter green than a purple-leaning blue such as ultramarine.',
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

export default function WhatColorDoesBlueAndYellowMakePage() {
  return (
    <ColorMixGuidePost
      heroGradient="from-blue-800 via-emerald-600 to-lime-400"
      heroAccentText="text-emerald-100"
      h1="What Color Does Blue and Yellow Make? Green — Hex Codes & Mixing Guide"
      featuredSnippet={`Blue and yellow make green when mixed as paint. A 50/50 mix of blue (#0000FF) and yellow (#FFFF00) produces green (${m50.hex}). Blended as light on a screen, the same two colors give gray (${m50.screenHex}) instead.`}
      heroSwatchHex={m50.hex}
      heroSwatchAria={`Green from an even blue and yellow paint mix, hex ${m50.hex.slice(1)}`}
      mixTableTitle="Blue and Yellow Mix Ratios — Hex Code Table"
      mixRows={MIX_ROWS}
      showScreenBlend
      color1={BLUE}
      color2={YELLOW}
      shadeSectionTitle="What Shade of Green Does Blue and Yellow Make?"
      shadeSectionBody={`With more blue the mix stays cool: ${m90.hex} is still clearly blue, ${m80.hex} is a cerulean and ${m70.hex} a jade. At equal parts it settles on ${m50.hex}, the deepest green in the table, because that is where the two colors share the least light. Past the midpoint yellow takes over and the greens get brighter: ${m30.hex}, then ${m20.hex}, then ${m10.hex}, which is closer to lime yellow than to green.`}
      paintVsScreenTitle="Why Blue and Yellow Make Green in Paint but Gray on a Screen"
      paintVsScreen={
        <>
          <p>
            The &ldquo;Paint mix&rdquo; and &ldquo;Screen blend&rdquo; columns disagree in every row, and that
            disagreement is the reason this question has two answers.
          </p>
          <p>
            A screen builds color by adding red, green and blue light. Yellow light is already red and green together,
            so blue plus yellow contains all three. Take half of each for an even blend and every channel lands in the
            middle: {m50.screenHex}, a flat gray. The screen column slides from blue through a slate blue (
            {m70.screenHex}) and gray to a dull khaki ({m30.screenHex}) without ever passing a green.
          </p>
          <p>
            Paint does the opposite, because pigments absorb light. Blue paint soaks up most of the red and yellow
            part of the light, and yellow paint soaks up most of the blue. The only part both leave alone is green, so
            green is what reaches your eye. It is also why the even mix is darker than either color on its own: two
            pigments absorb more light than one.
          </p>
          <p>
            Our mixer imitates this by placing hues on the painter&apos;s red–yellow–blue wheel, where green sits
            halfway between yellow and blue. The full method is explained on the{' '}
            <InlineTagLink href="/tools/color-mixer">color mixer</InlineTagLink> page.
          </p>
        </>
      }
      cssTitle="Getting These Greens in CSS"
      cssContent={
        <>
          <p>
            CSS can blend two colors with <code>color-mix()</code>, but it mixes them as light, so it does not give
            you the paint result:
          </p>
          <pre className="not-prose overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm text-gray-100">
            <code>{`color-mix(in srgb, #0000FF 50%, #FFFF00)   /* ${m50.screenHex}, gray */
color-mix(in oklch, #0000FF 50%, #FFFF00)  /* a turquoise: the hue is rotated, not averaged */`}</code>
          </pre>
          <p>
            Neither is a paint mix. For a green that looks like mixed paint, copy the hex from the &ldquo;Paint
            mix&rdquo; column and use it directly, for example <code className="whitespace-nowrap">{`--brand-green: ${m50.hex};`}</code>.
          </p>
        </>
      }
      combinationsTitle="Blue and Yellow Color Combinations"
      combinationsIntro="Four palettes that combine blue, yellow, and the greens between them."
      combinations={[
        {
          title: 'Eco clarity',
          body: `Green ${m50.hex} structure, sky blue #0EA5E9 links, yellow #FFFF00 highlights on white.`,
          swatches: [m50.hex, '#0EA5E9', '#FFFF00', '#FFFFFF'],
        },
        {
          title: 'Spring dashboard',
          body: `Grass green ${m30.hex} success tags, lime ${m20.hex} charts, slate #334155 text.`,
          swatches: [m30.hex, m20.hex, '#334155', '#0000FF'],
        },
        {
          title: 'Coastal field',
          body: `Cerulean ${m80.hex} headers, lime yellow ${m10.hex} accents, cream #F5F5DC backgrounds.`,
          swatches: [m80.hex, m10.hex, '#F5F5DC', '#0000FF'],
        },
        {
          title: 'Playful learning',
          body: `Blue #0000FF primary buttons, jade ${m70.hex} cards, golden yellow #FFD700 badges.`,
          swatches: ['#0000FF', m70.hex, '#FFD700', m50.hex],
        },
      ]}
      designTitle="Using Blue and Yellow in Design"
      designContent={
        <>
          <p>
            Blue-and-yellow systems suggest reliability and growth, which is why they are common for fintech, health
            and outdoor brands. Use the deeper greens and blue-greens for navigation and structure, and the
            yellow-greens sparingly for positive feedback.
          </p>
          <p>
            Related mixing guides:{' '}
            <InlineTagLink href="/blog/what-color-does-red-and-yellow-make">what color does red and yellow make</InlineTagLink>,{' '}
            <InlineTagLink href="/blog/what-color-does-pink-and-purple-make">what color does pink and purple make</InlineTagLink>.
          </p>
        </>
      }
      contrastNote={
        <p>
          Only two rows can carry white text: the 90% blue mix, which still behaves like blue, and the even mix{' '}
          {m50.hex}, where white scores {evenMixContrast.white.label} and black only {evenMixContrast.black.label}.
          Every other row has enough bright green in it that it needs black text instead.
        </p>
      }
      practiceTitle="Mixing Blue and Yellow Paint: What to Expect"
      practiceContent={
        <>
          <p>
            <strong className="text-gray-900 dark:text-white">Start with yellow and add blue.</strong> Most blues are
            much stronger than most yellows, so equal amounts of real paint usually look more like the blue-heavy rows
            of the table than the 50/50 row. Adding blue to yellow a little at a time wastes far less paint than going
            the other way.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">The pair matters as much as the ratio.</strong> A blue
            that leans green (phthalo, cerulean) with a yellow that leans green (lemon yellow) gives the cleanest,
            brightest greens. A blue that leans purple (ultramarine) with a yellow that leans orange gives duller,
            olive greens, because both carry a little red, and red is green&apos;s opposite on the wheel.
          </p>
          <p>
            <strong className="text-gray-900 dark:text-white">To calm a green, add red, not black.</strong> A touch of
            red moves green towards olive and brown without making it look dirty. You can see the effect by mixing
            green and red in the mixer above.
          </p>
        </>
      }
      faq={FAQ}
      mixerHref="/tools/color-mixer"
      mixerLabel="Blue & Yellow Color Mixer"
      faqSchema={faqSchema}
      articleSchema={articleSchema}
      breadcrumbTitle={articleSchema.headline}
      breadcrumbSlug="what-color-does-blue-and-yellow-make"
    />
  );
}
