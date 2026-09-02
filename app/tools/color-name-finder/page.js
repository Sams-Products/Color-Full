import InlineTagLink from '../../components/InlineTagLink';
import ColorNameFinderTool from './ColorNameFinderTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { buildFaqSchema, buildWebApplicationSchema } from '../../../lib/aeoSchema';
import AeoDirectAnswer from '../../blog/components/AeoDirectAnswer';
import EnvatoAffiliateBanner from '../../components/EnvatoAffiliateBanner';

export const metadata = buildPageMetadata({
  path: '/tools/color-name-finder',
  title: 'Hex to Color Name Finder — Free (Paste Any Hex)',
  description:
    'Paste any hex code → get the closest color name free. #228B22 = forestgreen, #B2AC88 = sage, #E2725B = terracotta. RGB, HSL, CMYK + one-click copy.',
  keywords: [
    'hex to color name',
    'color name finder',
    'what color is this hex',
    'color name from hex',
    'find color name by hex',
    'hex code color name',
    'CSS named colors',
    'RGB HSL CMYK',
    'Theme & Color',
  ],
});

const webAppSchema = buildWebApplicationSchema({
  name: 'Color Name Finder',
  description:
    'Free online color name finder. Paste a hex code to get the closest named color, RGB, HSL, CMYK values, and similar swatches instantly.',
  path: '/tools/color-name-finder',
  featureList: [
    'Hex to color name lookup',
    'RGB, HSL, and CMYK conversion',
    'Similar named color suggestions',
    'One-click copy for design handoff',
  ],
});

const faqSchema = buildFaqSchema([
  {
    name: 'What is a color name finder?',
    text: 'A color name finder is a free tool that matches a hex code to the closest human-readable color name—such as forestgreen for #228B22 or sage for #B2AC88—plus RGB, HSL, and CMYK values you can copy.',
  },
  {
    name: 'How do I find the name of a color from a hex code?',
    text: 'Paste your hex code (with or without #) into the Color Name Finder. The tool compares your color to hundreds of named colors using RGB distance and returns the closest match with copy-ready values.',
  },
  {
    name: 'What is the closest color name to #228B22?',
    text: 'Hex #228B22 is the CSS named color forestgreen. In RGB it is (34, 139, 34)—a medium-dark green common in eco, outdoor, and finance branding.',
  },
  {
    name: 'What is the closest color name to #B2AC88?',
    text: 'Hex #B2AC88 is closest to sage green—a muted gray-green with RGB(178, 172, 136). Designers use it for wellness, organic food, and lifestyle palettes.',
  },
  {
    name: 'What is the closest color name to #E2725B?',
    text: 'Hex #E2725B is terracotta—a warm clay orange with RGB(226, 114, 91). It pairs well with sage green and cream in earthy, editorial palettes.',
  },
  {
    name: 'What is the closest color name to #000080?',
    text: 'Hex #000080 is the CSS named color navy. In RGB it is (0, 0, 128)—a deep blue used for corporate, nautical, and trust-focused branding.',
  },
  {
    name: 'What is the closest color name to #313338?',
    text: 'Hex #313338 is a dark gray-violet—best known as the Discord dark mode background. In RGB it is (49, 51, 56), close to CSS darkslategray.',
  },
  {
    name: 'What is the closest color name to #800020?',
    text: 'Hex #800020 is burgundy (also called wine red). In RGB it is (128, 0, 32)—a deep red used in luxury, wine, and fashion branding.',
  },
  {
    name: 'What is the closest color name to #25D366?',
    text: 'Hex #25D366 is WhatsApp green. In RGB it is (37, 211, 102)—a bright brand green used for messaging accents and online status indicators.',
  },
  {
    name: 'Can I find a color name from RGB values?',
    text: 'Convert RGB to hex first, then paste into the finder. The tool outputs RGB, HSL, and CMYK from the same hex so developers and print vendors stay aligned.',
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
            answer="Paste any hex into this free hex-to-color-name finder. Examples: #228B22 is forestgreen, #B2AC88 is sage green, #E2725B is terracotta. You get the closest name plus RGB, HSL, and CMYK instantly."
            codes={[
              { label: '#228B22', value: 'forestgreen' },
              { label: '#B2AC88', value: 'sage green' },
              { label: '#E2725B', value: 'terracotta' },
            ]}
          />
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Paste a hex code to get the closest color name, full RGB/HSL/CMYK values, and similar swatches—free, instant, no sign-up.
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

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">How to Find a Color Name from a Hex Code</h2>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter or paste your hex code in the input field (with or without the # prefix).</li>
              <li>The tool instantly shows the closest named color and a live preview swatch.</li>
              <li>Copy the color name, hex, RGB, or HSL with one click.</li>
              <li>Explore similar named colors nearby and click a swatch to try another hex.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Why Use a Hex to Color Name Tool?</h2>
            <p className="leading-relaxed mb-3">
              Designers and developers often inherit a hex from Figma, Canva, or a screenshot with no human-readable name. A{' '}
              <strong className="text-gray-900 dark:text-white">hex to color name</strong> lookup turns{' '}
              <code className="text-sm font-mono bg-gray-100 dark:bg-gray-800 px-1 rounded">#228B22</code> into{' '}
              <strong className="text-gray-900 dark:text-white">forestgreen</strong> so brand docs, CSS tokens, and handoffs stay clear.
            </p>
            <p className="leading-relaxed">
              This finder compares your hex against hundreds of CSS and common design-system names using RGB distance, then returns the closest match with copy-ready RGB, HSL, and CMYK—useful when print vendors need channels and engineers need tokens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Popular Hex Codes &amp; Color Names</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 leading-relaxed">
              <li>
                <strong className="text-gray-900 dark:text-white">#228B22</strong> — forestgreen (forest green)
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#B2AC88</strong> — sage green
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#E2725B</strong> — terracotta
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#E0B0FF</strong> — mauve
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#F97316</strong> — sunset orange
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#000080</strong> — navy
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#800020</strong> — burgundy
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#E6E6FA</strong> — lavender
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#313338</strong> — Discord dark gray
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">#1DB954</strong> — Spotify green
              </li>
            </ul>
            <p className="mt-4 leading-relaxed">
              See full shade tables on our{' '}
              <InlineTagLink href="/blog/sage-green-hex-code">sage green</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/forest-green-hex-code">forest green</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/navy-blue-hex-code">navy blue</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/burgundy-hex-code">burgundy</InlineTagLink>, and{' '}
              <InlineTagLink href="/blog/sunset-color-palette">sunset palette</InlineTagLink> guides. Matching an app UI? Try our{' '}
              <InlineTagLink href="/blog/discord-dark-mode-colors">Discord</InlineTagLink>,{' '}
              <InlineTagLink href="/blog/spotify-dark-mode-colors">Spotify</InlineTagLink>, and{' '}
              <InlineTagLink href="/blog/instagram-dark-mode-colors">Instagram</InlineTagLink> dark mode color guides.
            </p>
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
            Build palettes from your base color with our{' '}
            <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, validate text pairs in the{' '}
            <InlineTagLink href="/tools/contrast-checker">contrast checker</InlineTagLink>, or generate light and dark steps with the{' '}
            <InlineTagLink href="/tools/tint-shade-generator">tint and shade generator</InlineTagLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
