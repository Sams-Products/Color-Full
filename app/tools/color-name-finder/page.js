import InlineTagLink from '../../components/InlineTagLink';
import ColorNameFinderTool from './ColorNameFinderTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { buildFaqSchema, buildWebApplicationSchema } from '../../../lib/aeoSchema';
import AeoDirectAnswer from '../../blog/components/AeoDirectAnswer';
import EnvatoAffiliateBanner from '../../components/EnvatoAffiliateBanner';
import CopyableHex from '../../blog/forest-green-hex-code/CopyableHex';

export const metadata = buildPageMetadata({
  path: '/tools/color-name-finder',
  title: 'Hex to Color Name Finder — Free (Paste Any Hex)',
  description:
    'Paste any hex code → get the closest color name free across 546 CSS, Tailwind & Material tokens. #228B22 = Forest Green, #B2AC88 = Sage Green, #E2725B = Terracotta.',
  keywords: [
    'hex to color name',
    'color name finder',
    'what color is this hex',
    'color name from hex',
    'find color name by hex',
    'hex code color name',
    'CSS named colors',
    'Tailwind color name lookup',
    'RGB HSL CMYK',
    'Theme & Color',
  ],
});

const webAppSchema = buildWebApplicationSchema({
  name: 'Color Name Finder',
  description:
    'Free online color name finder. Paste a hex code to get the closest named color across 546 W3C CSS, Tailwind CSS, Material Design, and brand tokens, plus RGB, HSL, and CMYK values.',
  path: '/tools/color-name-finder',
  featureList: [
    'Hex to color name lookup across 546 standardized tokens',
    'W3C CSS, Tailwind CSS, and Material Design palette matching',
    'RGB, HSL, and CMYK conversion with CSS & Tailwind snippets',
    'Screen eyedropper, tint/shade ramp, and 5 nearest neighbor swatches',
  ],
});

const REFERENCE_SWATCHES = [
  { name: 'Forest Green', hex: '#228B22', rgb: 'rgb(34, 139, 34)', system: 'W3C CSS Keyword', guide: '/blog/forest-green-hex-code' },
  { name: 'Sage Green', hex: '#B2AC88', rgb: 'rgb(178, 172, 136)', system: 'Editorial / Interior', guide: '/blog/sage-green-hex-code' },
  { name: 'Terracotta', hex: '#E2725B', rgb: 'rgb(226, 114, 91)', system: 'Editorial / Earthy', guide: '/blog/terracotta-hex-code' },
  { name: 'Navy Blue', hex: '#000080', rgb: 'rgb(0, 0, 128)', system: 'W3C CSS Keyword', guide: '/blog/navy-blue-hex-code' },
  { name: 'Burgundy', hex: '#800020', rgb: 'rgb(128, 0, 32)', system: 'Editorial / Luxury', guide: '/blog/burgundy-hex-code' },
  { name: 'Charcoal', hex: '#36454F', rgb: 'rgb(54, 69, 79)', system: 'UI Neutral Anchor', guide: '/blog/charcoal-hex-code' },
  { name: 'Dusty Rose', hex: '#DCAE96', rgb: 'rgb(220, 174, 150)', system: 'Editorial / Pastel', guide: '/blog/dusty-rose-hex-code' },
  { name: 'Olive Green', hex: '#808000', rgb: 'rgb(128, 128, 0)', system: 'W3C CSS Keyword', guide: '/blog/olive-green-hex-code' },
  { name: 'Violet 300 (Lavender)', hex: '#C4B5FD', rgb: 'rgb(196, 181, 253)', system: 'Tailwind CSS', guide: '/blog/pink-purple-color-name' },
  { name: 'Orange 500 (Sunset)', hex: '#F97316', rgb: 'rgb(249, 115, 22)', system: 'Tailwind CSS', guide: '/blog/sunset-color-palette' },
  { name: 'Discord Ash Dark', hex: '#313338', rgb: 'rgb(49, 51, 56)', system: 'App Dark Theme', guide: '/blog/discord-dark-mode-colors' },
  { name: 'WhatsApp Brand Green', hex: '#25D366', rgb: 'rgb(37, 211, 102)', system: 'Brand Token', guide: '/blog/whatsapp-dark-mode-colors' },
];

const faqSchema = buildFaqSchema([
  {
    name: 'What is a color name finder?',
    text: 'A color name finder is a free tool that matches any 3- or 6-digit hex code to the closest human-readable color name—such as Forest Green for #228B22, Sage Green for #B2AC88, or Tailwind Violet 300 for #C4B5FD—along with copy-ready RGB, HSL, CMYK, CSS variable, and Tailwind utility values.',
  },
  {
    name: 'How does this tool calculate the closest color name from a hex code?',
    text: 'The finder converts your hex code into 8-bit sRGB channels (R, G, B from 0 to 255) and computes the squared Euclidean distance D² = (R₁ - R₂)² + (G₁ - G₂)² + (B₁ - B₂)² against 546 standardized colors from the W3C CSS Color Module, Tailwind CSS v3/v4 scales (50–950), Google Material Design palettes, and curated editorial/brand tokens. When D² = 0, the tool flags an Exact Match (100%).',
  },
  {
    name: 'What is the closest color name to #228B22?',
    text: 'Hex #228B22 is an exact match for the W3C CSS named color Forest Green (forestgreen). In RGB it is (34, 139, 34) and in HSL it is (120°, 61%, 34%)—a medium-dark natural green common in outdoor, eco, and financial branding.',
  },
  {
    name: 'What is the closest color name to #B2AC88?',
    text: 'Hex #B2AC88 is an exact match for Sage Green—a muted gray-green with RGB(178, 172, 136) and HSL(51°, 21%, 62%). Designers use it for wellness, interior architecture, organic packaging, and calm UI surfaces.',
  },
  {
    name: 'What is the closest color name to #E2725B?',
    text: 'Hex #E2725B is Terracotta—a warm baked-clay orange-red with RGB(226, 114, 91) and HSL(10°, 70%, 62%). It pairs well with sage green (#B2AC88) and cream (#FFF8F0) in editorial and lifestyle palettes.',
  },
  {
    name: 'What is the closest color name to #000080?',
    text: 'Hex #000080 is the official W3C CSS color Navy. In RGB it is (0, 0, 128)—a deep authoritative blue used for corporate, institutional, and dark-mode navigation systems.',
  },
  {
    name: 'What is the closest color name to #313338?',
    text: 'Hex #313338 is a cool charcoal-violet best known as the Discord dark mode main chat background. In RGB it is (49, 51, 56), sitting near Tailwind Zinc 800 (#27272A) and Gray 700 (#374151).',
  },
  {
    name: 'Why are CMYK values from a hex code considered an approximation?',
    text: 'Hex codes live in the additive sRGB light color space for screens, whereas CMYK describes subtractive cyan, magenta, yellow, and black ink percentages on physical paper. Our tool computes the standard device-independent RGB-to-CMYK formula, but for offset press runs you should convert using your printer’s specific ICC profile (such as Coated FOGRA39 or US Web Coated SWOP v2).',
  },
]);

export default function ColorNameFinderPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mx-auto mb-8 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
            Hex to Color Name Finder
          </h1>
          <AeoDirectAnswer
            question="How do I find a color name from a hex code?"
            answer="Paste any 3- or 6-digit hex code into the finder below (or sample a pixel from your screen with the Eyedropper). It compares your color against 546 W3C CSS, Tailwind CSS, Material Design, and brand tokens, returning the closest name plus RGB, HSL, CMYK, and code snippets."
            codes={[
              { label: '#228B22', value: 'Forest Green' },
              { label: '#B2AC88', value: 'Sage Green' },
              { label: '#E2725B', value: 'Terracotta' },
            ]}
          />
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Paste a hex code or use the screen eyedropper to identify the closest standardized color name, copy RGB/HSL/CMYK/Tailwind values, and explore 5 nearest neighbor swatches—free and instant.
          </p>
        </header>

        <ColorNameFinderTool />

        <div className="max-w-4xl mx-auto my-10">
          <EnvatoAffiliateBanner
            variant="graphics"
            title="Need templates, mockups, or logos for this color?"
            description="Turn your selected color into a real design. Explore 100,000+ customizable graphic templates, social media layouts, fonts, and mockups on Envato Elements."
            ctaText="Browse Graphic Templates on Envato"
          />
        </div>

        <div className="max-w-4xl mx-auto mt-16 space-y-12 text-gray-700 dark:text-gray-300">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              How Our 546-Color Naming Engine Matches Your Hex Code
            </h2>
            <p className="leading-relaxed mb-4">
              Out of the <strong className="text-gray-900 dark:text-white">16,777,216 possible 24-bit hex colors</strong> (<code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">#000000</code> through <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">#FFFFFF</code>), the official W3C CSS Color specification only assigns human names to 148 keywords. Relying solely on those 148 CSS keywords leaves huge gaps in modern UI design—for instance, pasting a soft Tailwind pastel or a dark-mode surface gray into a basic CSS lookup often returns an unhelpful match like <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">darkslategray</code> or <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">gainsboro</code>.
            </p>
            <p className="leading-relaxed mb-4">
              To give designers and frontend engineers practical, token-ready names, our database combines <strong className="text-gray-900 dark:text-white">546 deduplicated color references</strong> across four industry naming systems:
            </p>
            <ul className="list-disc pl-6 space-y-2.5 leading-relaxed mb-4">
              <li>
                <strong className="text-gray-900 dark:text-white">W3C CSS Named Colors (140+ keywords):</strong> Standard browser-recognized names such as <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Forest Green</code> (#228B22), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Coral</code> (#FF7F50), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Rebecca Purple</code> (#663399), and <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Navy</code> (#000080).
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Tailwind CSS v3/v4 Scales (50–950 steps):</strong> Full neutral and chromatic ramps—including <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Slate</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Zinc</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Stone</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Emerald</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Indigo</code>, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Violet</code>, and <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Rose</code>—so aneyedropped UI color immediately maps to the closest utility token (e.g., <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Slate 900</code> for #0F172A).
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Google Material Design Palettes (50–900 steps):</strong> Standardized Android and Material UI color stops from <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Material Red 50</code> through <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Material Gray 900</code> (#212121).
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Editorial, Interior &amp; Brand Tokens:</strong> Widely searched design names that neither CSS nor Tailwind name explicitly, including <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Sage Green</code> (#B2AC88), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Terracotta</code> (#E2725B), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Burgundy</code> (#800020), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Dusty Rose</code> (#DCAE96), <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Charcoal</code> (#36454F), and <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">Spotify Green</code> (#1DB954).
              </li>
            </ul>
            <p className="leading-relaxed">
              When you type or paste a hex code, the tool normalizes 3-digit shorthand codes (expanding <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">#F0A</code> to <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">#FF00AA</code>), parses the red, green, and blue integers (0–255), and calculates the 3D Euclidean distance <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">D² = (R₁ − R₂)² + (G₁ − G₂)² + (B₁ − B₂)²</code> to every entry in the database. A distance of <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">0</code> means your hex is an <strong className="text-gray-900 dark:text-white">Exact Match (100%)</strong> to a standardized token; otherwise, the tool displays the closest match along with the next 5 nearest neighbors so you can compare subtle warm vs. cool alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Popular Hex Codes, Standardized Names &amp; Design Guides
            </h2>
            <p className="leading-relaxed mb-4">
              Click any hex code below to copy it, or open its dedicated guide for 10-step shade tables, complementary pairings, and WCAG contrast ratios:
            </p>
            <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
                      <th className="px-4 py-2.5 sm:px-5 font-semibold">Swatch</th>
                      <th className="px-4 py-2.5 sm:px-5 font-semibold">Color Name</th>
                      <th className="px-4 py-2.5 sm:px-5 font-semibold">Hex Code</th>
                      <th className="px-4 py-2.5 sm:px-5 font-semibold hidden md:table-cell">RGB Value</th>
                      <th className="px-4 py-2.5 sm:px-5 font-semibold hidden sm:table-cell">Naming System</th>
                      <th className="px-4 py-2.5 sm:px-5 font-semibold">Full Guide</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFERENCE_SWATCHES.map((row) => (
                      <tr key={row.hex} className="border-b border-gray-100 dark:border-gray-700/80 last:border-0 hover:bg-gray-50/80 dark:hover:bg-gray-800/40">
                        <td className="px-4 py-3 sm:px-5 w-14">
                          <span
                            className="inline-block h-8 w-11 rounded-md border border-gray-200 dark:border-gray-600 shadow-inner align-middle"
                            style={{ backgroundColor: row.hex }}
                            aria-hidden
                          />
                        </td>
                        <td className="px-4 py-3 sm:px-5 font-semibold text-gray-900 dark:text-white">{row.name}</td>
                        <td className="px-4 py-3 sm:px-5 text-gray-800 dark:text-gray-200 whitespace-nowrap">
                          <CopyableHex hex={row.hex} />
                        </td>
                        <td className="px-4 py-3 sm:px-5 font-mono text-xs text-gray-600 dark:text-gray-400 hidden md:table-cell whitespace-nowrap">
                          {row.rgb}
                        </td>
                        <td className="px-4 py-3 sm:px-5 text-gray-600 dark:text-gray-400 hidden sm:table-cell">{row.system}</td>
                        <td className="px-4 py-3 sm:px-5 whitespace-nowrap">
                          <InlineTagLink href={row.guide}>View shades →</InlineTagLink>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Choosing Between HEX, RGB, HSL, and CMYK in Your Workflow
            </h2>
            <p className="leading-relaxed mb-4">
              Every lookup in the Color Name Finder outputs six synchronized formats. Knowing when to use each representation prevents color shifts between Figma, CSS stylesheets, and commercial print runs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">HEX &amp; RGB (Additive Screen Light)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  Both <code className="font-mono text-xs">#228B22</code> and <code className="font-mono text-xs">rgb(34, 139, 34)</code> express the exact same sRGB subpixel intensities. Use HEX for compact design-token tables and Figma copy-paste; use RGB when you need alpha transparency in CSS (<code className="font-mono text-xs">rgb(34 139 34 / 0.15)</code>) or canvas shaders.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">HSL (Human-Intuitive Adjustments)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  HSL separates <strong className="text-gray-900 dark:text-white">Hue</strong> (0°–360° color wheel angle), <strong className="text-gray-900 dark:text-white">Saturation</strong> (0% gray to 100% vivid), and <strong className="text-gray-900 dark:text-white">Lightness</strong> (0% black to 100% white). When building hover states or dark-mode surface steps, keeping Hue constant while stepping Lightness by ±5% is much faster than guessing hex digits.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">CMYK (Subtractive Process Ink)</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  CMYK measures Cyan, Magenta, Yellow, and Key (black) ink coverage for physical packaging and stationery. High-saturation screen blues and neon greens sit outside the standard CMYK gamut—use our CMYK readout as a starting point, then soft-proof in Illustrator or InDesign with your press&apos;s ICC profile.
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/60 p-5">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1.5">CSS Custom Properties &amp; Tailwind Arbitrary Values</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  If your brand color matches a Tailwind token like <code className="font-mono text-xs">Violet 300</code> (#C4B5FD), use the built-in class <code className="font-mono text-xs">bg-violet-300</code>. If it sits between stops, copy the generated CSS variable (<code className="font-mono text-xs">--color-sage-green: #B2AC88;</code>) or arbitrary utility (<code className="font-mono text-xs">bg-[#B2AC88]</code>).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              How to Name Design Tokens in a Production Design System
            </h2>
            <p className="leading-relaxed mb-4">
              Once you identify a color&apos;s descriptive name in the finder, organize it into a <strong className="text-gray-900 dark:text-white">two-tier token architecture</strong> so your codebase stays maintainable when you add dark mode or rebrand:
            </p>
            <ol className="list-decimal pl-6 space-y-2.5 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">Primitive (literal) layer:</strong> Name the raw hex value using the descriptive color name and lightness scale returned by this tool—for example, <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">--palette-forest-green-600: #228B22</code> or <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">--palette-slate-900: #0F172A</code>. Never use primitive tokens directly inside component styles.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Semantic (role) layer:</strong> Map primitives to UI intent—such as <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">--color-action-primary: var(--palette-forest-green-600)</code> or <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">--color-surface-canvas: var(--palette-slate-900)</code>. When switching between light and dark themes, only the semantic layer changes its pointer.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Verify contrast before shipping:</strong> Check every semantic text-on-surface pair in our{' '}
                <InlineTagLink href="/tools/contrast-checker">WCAG 2.1 contrast checker</InlineTagLink> to confirm at least 4.5:1 for body text and 3:1 for large headings, icons, and button boundaries.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              {faqSchema.mainEntity.map((item) => (
                <div key={item.name}>
                  <dt className="font-semibold text-gray-900 dark:text-white">{item.name}</dt>
                  <dd className="mt-1 leading-relaxed">{item.acceptedAnswer.text}</dd>
                </div>
              ))}
            </dl>
          </section>

          <p className="leading-relaxed">
            Build full 5-color schemes from your matched hex with our{' '}
            <InlineTagLink href="/tools/palette-generator">color palette generator</InlineTagLink>, test real dashboard and mobile layouts in the{' '}
            <InlineTagLink href="/tools/color-palette-preview/dashboard">live UI palette previewer</InlineTagLink>, or generate 10-step light and dark ramps in the{' '}
            <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
