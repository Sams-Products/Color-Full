import InlineTagLink from '../../components/InlineTagLink';
import ContrastCheckerTool from './ContrastCheckerTool';
import { buildPageMetadata } from '../../../lib/buildPageMetadata';
import { contrastBetween } from '../../../lib/textContrast';

const LAST_MODIFIED = '2026-05-21T00:00:00.000Z';

export const metadata = buildPageMetadata({
  path: '/tools/contrast-checker',
  title: 'Color Contrast Checker — WCAG Accessibility Tool | Theme & Color',
  description:
    'Free color contrast checker for WCAG AA and AAA accessibility. Check text and background color contrast ratios instantly. Used by designers and developers worldwide.',
  keywords: [
    'color contrast checker',
    'accessibility color checker',
    'text contrast checker',
    'ADA contrast checker',
    'website accessibility color checker',
    'color contrast accessibility checker',
    'WCAG',
    'AA',
    'AAA',
    'Theme & Color',
  ],
  openGraph: {
    modifiedTime: LAST_MODIFIED,
  },
});

const contrastCheckerStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WCAG Color Contrast Checker',
  description:
    'Free color contrast checker for WCAG AA and AAA accessibility. Check text and background color contrast ratios instantly.',
  url: 'https://themeandcolor.com/tools/contrast-checker',
  applicationCategory: 'DesignApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

/** Relative luminance, written out step by step for the worked example on this page. */
function luminanceSteps(hex) {
  const channels = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const linear = channels.map((value) => {
    const v = value / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  return { channels, linear, luminance };
}

const EXAMPLE_TEXT = '#767676';
const exampleSteps = luminanceSteps(EXAMPLE_TEXT);
const exampleRatio = contrastBetween(EXAMPLE_TEXT, '#FFFFFF');

/** Reference pairs, scored by the same formula as the tool above. */
const REFERENCE_PAIRS = [
  { text: '#000000', background: '#FFFFFF', note: 'The maximum possible contrast.' },
  { text: '#595959', background: '#FFFFFF', note: 'About the lightest gray that still reaches AAA on white.' },
  { text: '#767676', background: '#FFFFFF', note: 'About the lightest gray that still passes AA on white.' },
  { text: '#777777', background: '#FFFFFF', note: 'One step lighter, and it no longer passes for body text.' },
  { text: '#FFFFFF', background: '#FF0000', note: 'White on pure red: fine for large headings, not for small labels.' },
  { text: '#000000', background: '#FF0000', note: 'Black on the same red passes.' },
  { text: '#FFFFFF', background: '#0000FF', note: 'White on pure blue passes comfortably.' },
  { text: '#FFFFFF', background: '#008000', note: 'White on green (#008000) passes AA.' },
  { text: '#FFFF00', background: '#FFFFFF', note: 'Yellow on white is nearly invisible.' },
  { text: '#000000', background: '#FFFF00', note: 'Black on yellow is one of the strongest pairs there is.' },
].map((pair) => ({ ...pair, score: contrastBetween(pair.text, pair.background) }));

const LEVEL_LABEL = {
  AAA: 'Passes AA and AAA',
  AA: 'Passes AA',
  'AA large': 'Large text only',
  Fail: 'Fails',
};

export default function ContrastCheckerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contrastCheckerStructuredData) }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Color Contrast Checker
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
              Use this free color contrast accessibility checker to validate text and background pairs for WCAG AA and AAA. As a text contrast checker and website accessibility color checker in one, it shows your ratio and pass/fail instantly. Build palettes first with our <InlineTagLink href="/tools/palette-generator">palette generator</InlineTagLink>, then test pairs here.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
              Also try our <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> for paint-style RYB color blends.
            </p>
          </header>
        </div>

        <ContrastCheckerTool />

        <div className="max-w-4xl mx-auto mt-16 space-y-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              WCAG Color Contrast Checker — AA &amp; AAA Compliance
            </h2>
            <p className="leading-relaxed">
              WCAG contrast ratios measure how readable text is against its background by comparing lightness difference between two colors on a scale from 1:1 to 21:1. Whether you need an accessibility color checker for audits or a daily ADA contrast checker for shipping UI, these ratios matter because low contrast makes content harder to read for users with low vision, color-vision differences, or poor lighting conditions, while compliant contrast improves usability and helps your UI meet accessibility requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              How This Text Contrast Checker Works
            </h2>
            <p className="leading-relaxed mb-4">
              Our color contrast accessibility checker compares foreground and background hex values using the same relative luminance formula WCAG references, so designers and developers get consistent results without spreadsheets.
            </p>
            <ol className="list-decimal list-inside space-y-2 leading-relaxed">
              <li>Enter foreground color.</li>
              <li>Enter background color.</li>
              <li>View contrast ratio.</li>
              <li>Check AA/AAA pass/fail.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              How the Contrast Ratio Is Calculated
            </h2>
            <p className="mb-4 leading-relaxed">
              The ratio compares how much light two colors give off, not how different their hues are. That is why
              red on green can look vivid and still fail. The calculation has three steps, shown here for gray text{' '}
              {EXAMPLE_TEXT} on a white background:
            </p>
            <ol className="list-decimal pl-6 space-y-3 leading-relaxed mb-4">
              <li>
                <strong className="text-gray-900 dark:text-white">Undo the screen&apos;s gamma.</strong> Each channel
                is scaled to 0–1 and converted to linear light. For {EXAMPLE_TEXT}, all three channels are{' '}
                {exampleSteps.channels[0]}, which becomes {exampleSteps.linear[0].toFixed(4)}.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Weight the channels.</strong> Relative luminance is
                0.2126 × red + 0.7152 × green + 0.0722 × blue, because the eye is far more sensitive to green than to
                blue. For {EXAMPLE_TEXT} that gives {exampleSteps.luminance.toFixed(4)}; white is 1 and black is 0.
              </li>
              <li>
                <strong className="text-gray-900 dark:text-white">Divide lighter by darker.</strong> The ratio is
                (lighter + 0.05) ÷ (darker + 0.05). Here that is (1 + 0.05) ÷ ({exampleSteps.luminance.toFixed(4)} +
                0.05) = {exampleRatio.label}, just enough to pass AA for normal text.
              </li>
            </ol>
            <p className="leading-relaxed">
              The green weighting explains results that surprise people: pure yellow is almost as bright as white,
              pure blue is almost as dark as black, and mid greens are brighter than they look.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Reference Pairs Worth Knowing
            </h2>
            <p className="mb-5 leading-relaxed">
              Ten pairs that come up constantly, scored by the same formula as the tool above.
            </p>
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                      <th scope="col" className="px-4 py-2.5 font-semibold">Sample</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Text on background</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Ratio</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Normal text</th>
                      <th scope="col" className="px-4 py-2.5 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFERENCE_PAIRS.map((pair) => (
                      <tr key={`${pair.text}-${pair.background}`} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                        <td className="px-4 py-2.5">
                          <span
                            className="inline-flex h-9 w-16 items-center justify-center rounded border border-gray-300 dark:border-gray-600 text-sm font-semibold"
                            style={{ backgroundColor: pair.background, color: pair.text }}
                            aria-hidden
                          >
                            Text
                          </span>
                        </td>
                        <td className="px-4 py-2.5 font-mono whitespace-nowrap text-gray-900 dark:text-white">
                          {pair.text} on {pair.background}
                        </td>
                        <td className="px-4 py-2.5 font-mono tabular-nums text-gray-900 dark:text-white">{pair.score.label}</td>
                        <td className="px-4 py-2.5 whitespace-nowrap">{LEVEL_LABEL[pair.score.level]}</td>
                        <td className="px-4 py-2.5 leading-relaxed">{pair.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Understanding WCAG contrast ratios
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">Text Type</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">WCAG AA</th>
                    <th className="px-4 py-2 text-left text-gray-900 dark:text-white">WCAG AAA</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Normal text</td>
                    <td className="px-4 py-2">4.5:1</td>
                    <td className="px-4 py-2">7:1</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Large text (24px and up, or 18.66px and up in bold)</td>
                    <td className="px-4 py-2">3:1</td>
                    <td className="px-4 py-2">4.5:1</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2">Icons, input borders, focus rings and other non-text UI</td>
                    <td className="px-4 py-2">3:1</td>
                    <td className="px-4 py-2">Not defined</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              Frequently asked questions
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What is WCAG contrast ratio?</h4>
                <p className="leading-relaxed">
                  WCAG contrast ratio is the numeric comparison between a foreground color and background color that indicates readability, where higher ratios mean stronger visual separation.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">What contrast ratio do I need for text accessibility?</h4>
                <p className="leading-relaxed">
                  Normal text needs at least 4.5:1 for AA and 7:1 for AAA. Large text needs at least 3:1 for AA and 4.5:1 for AAA.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Does contrast matter for buttons and icons?</h4>
                <p className="leading-relaxed">
                  Yes. Button labels are text, so they need 4.5:1 (or 3:1 if large). Icons that carry meaning, input borders and focus indicators need at least 3:1 against whatever is next to them, under WCAG&apos;s non-text contrast rule. Disabled controls and purely decorative graphics are exempt.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">How do I fix low contrast in my design?</h4>
                <p className="leading-relaxed">
                  Increase the difference between foreground and background by darkening text, lightening the background, or selecting a stronger accessible color pair, then re-test until AA or AAA passes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Who Uses a Color Contrast Checker?
            </h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Web designers checking text readability</li>
              <li>Developers building ADA compliant websites</li>
              <li>UX teams running accessibility audits</li>
              <li>Agencies testing client sites for WCAG compliance</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What is ADA Color Contrast Compliance?
            </h2>
            <p className="leading-relaxed">
              The ADA (Americans with Disabilities Act) does not set a contrast ratio itself. In practice, WCAG 2.1 Level AA is the standard most often used to judge whether a website is accessible, and it asks for 4.5:1 for normal text and 3:1 for large text. The checker above tests both. This is general information, not legal advice; ask a lawyer what applies to your organization.
            </p>
          </section>

          <p className="mt-10 text-gray-600 dark:text-gray-400 leading-relaxed">
            Also try our{' '}
            <InlineTagLink href="/tools/color-mixer">Color Mixing Simulator</InlineTagLink> to see what colors produce when mixed together.
          </p>
        </div>
      </div>
    </div>
  );
}
