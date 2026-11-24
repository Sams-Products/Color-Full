import Link from 'next/link';
import ColorMixer from './components/ColorMixer';
import { getCombinationMix, mixHexColorsScreen } from './colorMixing';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/tools/color-mixer',
  title: 'Color Mixer — What Color Do Red + Blue Make? (Free)',
  description:
    'Free color mixer: blend any two colors with RYB paint theory. Red + blue = purple, yellow + blue = green. See hex results instantly. No signup.',
  keywords: [
    'color mixer',
    'color mixing simulator',
    'what color do red and blue make',
    'what color does yellow and blue make',
    'RYB color mixer',
    'mix two colors hex',
    'paint color mixer',
    'Theme & Color',
  ],
  openGraph: {
    images: [
      {
        url: '/og-color-mixer.png',
        width: 1200,
        height: 630,
        alt: 'Color Mixing Simulator preview',
      },
    ],
  },
  twitter: {
    images: ['/og-color-mixer.png'],
  },
});

const colorMixerWebApplicationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Color Mixing Simulator',
  url: 'https://themeandcolor.com/tools/color-mixer',
  description:
    'Mix any two colors at any ratio and see a paint-style result based on the painter’s red–yellow–blue color wheel, next to the ordinary screen blend.',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

/** Longer guides for the mixes people ask about most. */
const GUIDE_LINKS: Record<string, string> = {
  'blue-yellow': '/blog/what-color-does-blue-and-yellow-make',
  'red-yellow': '/blog/what-color-does-red-and-yellow-make',
  'red-white': '/blog/what-color-does-red-and-white-make',
  'pink-purple': '/blog/what-color-does-pink-and-purple-make',
};

/** Every value on this page comes from the same function the tool above runs. */
const commonMixes = [
  ['red', 'blue'],
  ['blue', 'yellow'],
  ['red', 'yellow'],
  ['red', 'white'],
  ['blue', 'white'],
  ['red', 'black'],
  ['black', 'white'],
  ['yellow', 'green'],
  ['blue', 'green'],
  ['pink', 'purple'],
  ['red', 'green'],
  ['purple', 'yellow'],
  ['orange', 'blue'],
].map(([a, b]) => {
  const mix = getCombinationMix(a, b)!;
  return {
    key: `${a}-${b}`,
    color1: mix.color1,
    color2: mix.color2,
    hex: mix.result.hex,
    name: mix.result.closestName,
    screenHex: mixHexColorsScreen(mix.color1.hex, mix.color2.hex).hex,
    guide: GUIDE_LINKS[`${a}-${b}`],
  };
});

const faqItems = commonMixes.slice(0, 8).map((mix) => {
  const c1 = mix.color1.name.toLowerCase();
  const c2 = mix.color2.name.toLowerCase();
  const sameOnScreen = mix.screenHex === mix.hex;
  return {
    key: mix.key,
    hex: mix.hex,
    question: `What color does ${c1} and ${c2} make?`,
    answer:
      `Equal parts ${c1} (${mix.color1.hex}) and ${c2} (${mix.color2.hex}) make ${mix.name.toLowerCase()}, ` +
      `about ${mix.hex} in this mixer. ` +
      (sameOnScreen
        ? 'A screen blend of the same two colors gives the same value.'
        : `Blended as light on a screen, the same two colors give ${mix.screenHex} instead.`),
  };
});

const colorMixerFaqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

function Swatch({ hex, size = 'h-6 w-6' }: { hex: string; size?: string }) {
  return (
    <span
      className={`inline-block ${size} shrink-0 rounded border border-gray-300 dark:border-gray-600 align-middle`}
      style={{ backgroundColor: hex }}
      aria-hidden
    />
  );
}

export default function ColorMixerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorMixerWebApplicationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(colorMixerFaqPageJsonLd) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">Color Mixer — What Color Do They Make?</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Pick two colors, drag the ratio slider, and see what they make when mixed like paint. The mixer works on the
            painter&apos;s red–yellow–blue wheel, so blue and yellow give green rather than the gray you get from
            blending them as light. The plain screen blend is shown next to every result so you can compare the two.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <ColorMixer />
        </div>

        <section className="max-w-5xl mx-auto mt-14">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common color mixes at equal parts</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            These are the mixer&apos;s own results for the pairs people look up most. &ldquo;Screen blend&rdquo; is what
            the same two colors give when averaged as light, which is also what CSS <code>color-mix(in srgb, …)</code>{' '}
            returns.
          </p>
          <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                    <th scope="col" className="px-4 py-2.5 font-semibold">Mix</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Makes</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Paint mix</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Screen blend</th>
                    <th scope="col" className="px-4 py-2.5 font-semibold">Guide</th>
                  </tr>
                </thead>
                <tbody>
                  {commonMixes.map((mix) => (
                    <tr key={mix.key} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                      <td className="px-4 py-2.5 text-gray-900 dark:text-white whitespace-nowrap">
                        <Swatch hex={mix.color1.hex} size="h-4 w-4" /> {mix.color1.name} +{' '}
                        <Swatch hex={mix.color2.hex} size="h-4 w-4" /> {mix.color2.name}
                      </td>
                      <td className="px-4 py-2.5 font-medium text-gray-900 dark:text-white">{mix.name}</td>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Swatch hex={mix.hex} /> <span className="font-mono">{mix.hex}</span>
                      </td>
                      <td className="px-4 py-2.5 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                        <Swatch hex={mix.screenHex} /> <span className="font-mono">{mix.screenHex}</span>
                      </td>
                      <td className="px-4 py-2.5">
                        {mix.guide ? (
                          <Link href={mix.guide} className="text-purple-600 dark:text-purple-400 font-semibold hover:underline">
                            Ratios &amp; shades
                          </Link>
                        ) : (
                          <span className="text-gray-400 dark:text-gray-600">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mt-14 space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How this mixer works</h2>
          <p>
            A screen makes color by adding red, green and blue light. Average blue (#0000FF) and yellow (#FFFF00) that
            way and every channel lands in the middle: #808080, a flat gray. Paint behaves differently, because each
            pigment absorbs part of the light instead of adding to it, and the color you see is whatever both pigments
            still reflect. For blue and yellow paint, that shared part is green.
          </p>
          <p>The mixer imitates that in three steps:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <strong className="text-gray-900 dark:text-white">Hue goes on the painter&apos;s wheel.</strong> Each
              color&apos;s hue is moved from the screen&apos;s red–green–blue wheel onto the traditional
              red–yellow–blue wheel, where orange sits between red and yellow, green between yellow and blue, and
              purple between blue and red. The two hues are then mixed along that wheel, pulled towards whichever
              color you use more of.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">White and brightness are kept separately.</strong> The
              white content of the two colors is averaged, which is why adding white gives a tint. Brightness is taken
              from the screen blend, so two strong colors that share little light, such as blue and yellow or red and
              blue, come out deeper than either one.
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Opposites turn to mud.</strong> Hues that sit across
              the wheel from each other (red and green, orange and blue, yellow and purple) cancel out. The closer the
              mix is to equal parts, the more it shifts towards a dull brown.
            </li>
          </ol>
          <p>
            It is a model, not a measurement of real paint. Pigments differ in strength, transparency and undertone:
            a strong blue will overpower a weak yellow long before the mix reaches equal parts. Treat the hex code as a
            starting point for digital work, and test with your own paints when the physical color matters.
          </p>
        </section>

        <section className="max-w-5xl mx-auto mt-14 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Frequently asked color mixing questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.key} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  <Swatch hex={item.hex} size="h-4 w-4" /> {item.question}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
