import InlineTagLink from '../../components/InlineTagLink';
import PaletteGeneratorTool from './PaletteGeneratorTool';
import EnvatoAffiliateBanner from '../../components/EnvatoAffiliateBanner';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { generatePalettes } from '../../../lib/paletteHarmonies';
import { textContrastOn } from '../../../lib/textContrast';

export const metadata = buildPageMetadata({
  path: '/tools/palette-generator',
  title: 'Color Palette Generator',
  description:
    'Free online color palette generator for UI, web, and brand design. Create harmonious palettes from one base color and export hex codes.',
  keywords: [
    'palette generator',
    'color palette',
    'hex codes',
    'brand colors',
    'UI design',
    'harmony',
    'Theme & Color',
  ],
});

const paletteGeneratorStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Color Palette Generator',
  description: 'Free online color palette generator for UI, web, and brand design. Generate harmonious palettes and export hex codes.',
  url: 'https://themeandcolor.com/tools/palette-generator',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

/** The tool's default base color, so this example matches what the tool shows when the page loads. */
const EXAMPLE_BASE = '#3B82F6';
const examplePalettes = generatePalettes(EXAMPLE_BASE);
const baseContrast = textContrastOn(EXAMPLE_BASE);

const HARMONY_GUIDE = [
  {
    key: 'monochromatic',
    name: 'Monochromatic',
    rule: 'One hue, five lightness steps 15 points apart (kept between 10% and 90%).',
    use: 'Dashboards, forms and other dense UI where color should stay quiet.',
  },
  {
    key: 'analogous',
    name: 'Analogous',
    rule: 'Neighbors on the wheel: the base, 30° before it, 30° and 60° after it, plus a lighter copy of the first.',
    use: 'Gradients, illustration and calm brand palettes.',
  },
  {
    key: 'complementary',
    name: 'Complementary',
    rule: 'The base and the hue directly opposite (180°), each with a lighter copy, plus a muted version of the base.',
    use: 'One strong accent against a brand color: buttons, badges, sale tags.',
  },
  {
    key: 'triadic',
    name: 'Triadic',
    rule: 'Three hues 120° apart, plus lighter copies of the first two.',
    use: 'Playful, high-energy brands and data charts with three series.',
  },
  {
    key: 'splitComplementary',
    name: 'Split complementary',
    rule: 'The base plus the two hues either side of its opposite (150° and 210°), with two lighter copies.',
    use: 'Contrast like a complementary scheme, but less harsh.',
  },
  {
    key: 'tetradic',
    name: 'Tetradic',
    rule: 'Four hues 90° apart, plus a lighter copy of the base.',
    use: 'Rich, multi-color systems such as category labels. Needs one clear dominant color.',
  },
].map((item) => ({
  ...item,
  colors: examplePalettes[item.key].map((hex) => hex.toUpperCase()),
}));

export default function PaletteGeneratorPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paletteGeneratorStructuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Color Palette Generator
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Create coordinated color palettes from one base color. Pick a color and harmony type below, then copy hex codes for your projects. Use our <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink> to verify text and background pairs.
            </p>
          </header>
        </div>

        <PaletteGeneratorTool />

        <div className="max-w-4xl mx-auto my-10">
          <EnvatoAffiliateBanner
            variant="general"
            title="Turn this palette into mockups, web templates & graphics"
            description="Speed up your projects with 1M+ fonts, presentation templates, UI kits, and stock assets with unlimited downloads on Envato Elements."
            ctaText="Explore Creative Assets on Envato"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Free Color Palette Generator for UI &amp; Web Design
            </h2>
            <p className="mb-4 leading-relaxed">
              This free color palette generator helps you turn one base color into coordinated palettes you can use in websites, apps, and brand systems. Select a harmony type to generate matching colors instantly, then copy clean hex codes for design tools and production code.
            </p>
            <p className="leading-relaxed">
              It is built for designers shaping interfaces, developers implementing design tokens, and brand teams creating consistent visual direction across products and marketing. Use it to move faster, keep color choices consistent, and reduce guesswork in collaboration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What Each Harmony Does
            </h2>
            <p className="mb-5 leading-relaxed">
              A harmony is a rule for picking hues from the color wheel. The generator keeps your base color&apos;s
              saturation and lightness and only moves the hue, so every color in a set has the same strength. The
              examples below are generated from the tool&apos;s default base, {EXAMPLE_BASE}, by the same code the
              tool runs.
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                      <th scope="col" className="px-4 py-2.5 font-semibold">Harmony</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">How it is built</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">From {EXAMPLE_BASE}</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Good for</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HARMONY_GUIDE.map((item) => (
                      <tr key={item.key} className="border-b border-gray-100 dark:border-gray-800 last:border-0 align-top">
                        <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white whitespace-nowrap">{item.name}</td>
                        <td className="px-4 py-3 leading-relaxed">{item.rule}</td>
                        <td className="px-4 py-3">
                          <div className="flex h-7 w-40 overflow-hidden rounded border border-gray-200 dark:border-gray-600" aria-hidden>
                            {item.colors.map((hex, index) => (
                              <span key={`${hex}-${index}`} className="flex-1" style={{ backgroundColor: hex }} />
                            ))}
                          </div>
                          <div className="mt-1 font-mono text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                            {item.colors.join(' ')}
                          </div>
                        </td>
                        <td className="px-4 py-3 leading-relaxed">{item.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              From a Harmony to a Working UI Palette
            </h2>
            <p className="mb-4 leading-relaxed">
              A harmony gives you colors that look related. It does not tell you which one is the background, which
              is the button and which is the text. Three steps get you from five swatches to something you can build
              with:
            </p>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">Give each color a job.</strong> Pick one dominant
                color for large areas, one supporting color and one accent, in roughly the proportions of the{' '}
                <InlineTagLink href="/blog/60-30-10-color-rule">60-30-10 rule</InlineTagLink>. Because every color in
                a harmony is equally strong, using them in equal amounts looks noisy.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Add neutrals yourself.</strong> Harmonies never
                include a near-white background or a near-black text color. Take the lightest and darkest steps of
                the monochromatic set, or generate a full ramp with the{' '}
                <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink>.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Check text before you commit.</strong> Harmony says
                nothing about readability. On the default base {EXAMPLE_BASE}, white text scores{' '}
                {baseContrast.white.label} and black text {baseContrast.black.label}, so{' '}
                {baseContrast.white.ratio >= 4.5
                  ? 'white labels pass WCAG AA.'
                  : `white labels fall short of the 4.5:1 that WCAG AA asks for and ${baseContrast.black.ratio >= 4.5 ? 'black labels are the safe choice' : 'neither is a safe choice'}.`}{' '}
                Run your own pairs through the{' '}
                <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, then see the palette
                on a real layout in the{' '}
                <InlineTagLink href="/tools/color-palette-preview">palette preview</InlineTagLink>.
              </li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              How to use the palette generator
            </h3>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Pick a base color.</li>
              <li>Choose a harmony type.</li>
              <li>Generate your palette.</li>
              <li>Check color contrast for accessibility.</li>
              <li>Export or copy the hex codes.</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Frequently asked questions
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is a color palette generator?</h4>
                <p className="leading-relaxed">
                  A color palette generator is a tool that creates related color sets from a starting color using harmony rules. It saves time by giving you usable combinations and exact hex values for UI and web design.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How do I create an accessible color palette?</h4>
                <p className="leading-relaxed">
                  Start with a base color, generate harmonies, then test text and background pairs for readable contrast. Use a contrast checker to validate WCAG targets before shipping.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Can I export the palette as CSS or hex codes?</h4>
                <p className="leading-relaxed">
                  Yes. You can copy individual hex values or full palette values and paste them into CSS variables, design tokens, Figma styles, or brand docs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Why do all the colors in a set look equally bright?</h4>
                <p className="leading-relaxed">
                  The generator keeps the saturation and lightness of your base color and changes only the hue (and, for the lighter copies, adds 20 points of lightness). That keeps a set coherent, but it also means a vivid base gives five vivid colors. Start from a softer base, or tone down the supporting colors afterwards, if the result feels loud.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Which harmony should I start with?</h4>
                <p className="leading-relaxed">
                  For product UI, start with monochromatic and add a single complementary accent for buttons and alerts. Analogous suits brands that want a calm, blended look. Triadic and tetradic give the most variety but are the hardest to balance, so reserve them for illustration, charts and category colors.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What color harmonies does this tool support?</h4>
                <p className="leading-relaxed">
                  The generator supports monochromatic, analogous, complementary, triadic, split-complementary, and tetradic harmonies.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
