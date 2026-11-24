import CopyableHex from '../forest-green-hex-code/CopyableHex';
import CopyCodeBlock from './CopyCodeBlock';
import { contrastBetween, textContrastOn } from '../../../lib/textContrast';

const BADGE = {
  AAA: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  AA: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  'AA large': 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  Fail: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
};
const BADGE_TEXT = { AAA: 'AAA', AA: 'AA', 'AA large': 'Large only', Fail: 'Fails' };

function Score({ score }) {
  return (
    <span className="whitespace-nowrap">
      <span className="font-mono tabular-nums">{score.label}</span>{' '}
      <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-semibold ${BADGE[score.level]}`}>
        {BADGE_TEXT[score.level]}
      </span>
    </span>
  );
}

function slug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function listNames(items) {
  const names = items.map((item) => item.name);
  if (names.length <= 1) return names.join('');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

/**
 * Accessibility table for a page's shade list. Every ratio is calculated at build time with
 * the same WCAG formula as the contrast checker tool, so nothing here is typed in by hand.
 *
 * @param {object} props
 * @param {string} props.title section heading
 * @param {string} props.colorName lower-case name used in sentences, e.g. "burgundy"
 * @param {{ name: string, hex: string }} props.main the page's headline color
 * @param {Array<{ name: string, hex: string }>} props.shades
 * @param {string} props.tokenPrefix prefix for the CSS variable / Tailwind names, e.g. "burgundy"
 */
export default function ShadeAccessibility({ title, colorName, main, shades, tokenPrefix }) {
  const rows = shades.map((shade) => ({
    ...shade,
    onShade: textContrastOn(shade.hex),
    withMain: contrastBetween(shade.hex, main.hex),
    isMain: shade.hex.toUpperCase() === main.hex.toUpperCase(),
  }));

  const whiteOk = rows.filter((row) => row.onShade.white.ratio >= 4.5);
  const blackOk = rows.filter((row) => row.onShade.black.ratio >= 4.5);
  const noAaa = rows.filter((row) => row.onShade.best.ratio < 7);
  const worksOnMain = rows.filter((row) => !row.isMain && row.withMain.ratio >= 4.5);
  const mainScore = textContrastOn(main.hex);

  const cssVariables = `:root {\n${shades
    .map((shade) => `  --${tokenPrefix}-${slug(shade.name)}: ${shade.hex.toUpperCase()};`)
    .join('\n')}\n}`;
  const tailwindColors = `// tailwind.config.js → theme.extend.colors\n${tokenPrefix.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}: {\n${shades
    .map((shade) => `  '${slug(shade.name)}': '${shade.hex.toUpperCase()}',`)
    .join('\n')}\n},`;

  return (
    <section className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="px-4 py-3 sm:px-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Contrast ratios for white and black text on each shade, and for each shade used as text on {main.name} (
          {main.hex.toUpperCase()}). WCAG AA needs 4.5:1 for normal text and 3:1 for large text; AAA needs 7:1.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th scope="col" className="px-3 sm:px-5 py-2.5 font-semibold">Swatch</th>
              <th scope="col" className="px-3 sm:px-5 py-2.5 font-semibold">Shade</th>
              <th scope="col" className="px-3 sm:px-5 py-2.5 font-semibold">White text</th>
              <th scope="col" className="px-3 sm:px-5 py-2.5 font-semibold">Black text</th>
              <th scope="col" className="px-3 sm:px-5 py-2.5 font-semibold">As text on {main.hex.toUpperCase()}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.hex} className="border-b border-gray-100 dark:border-gray-700/70 last:border-0">
                <td className="px-3 sm:px-5 py-2.5">
                  <span
                    className="flex h-10 w-14 items-center justify-center rounded-md border border-black/10 text-sm font-semibold"
                    style={{ backgroundColor: row.hex, color: row.onShade.best.hex }}
                    aria-hidden
                  >
                    Aa
                  </span>
                </td>
                <td className="px-3 sm:px-5 py-2.5">
                  <div className="font-medium text-gray-900 dark:text-white">{row.name}</div>
                  <div className="text-gray-600 dark:text-gray-400">
                    <CopyableHex hex={row.hex} />
                  </div>
                </td>
                <td className="px-3 sm:px-5 py-2.5 text-gray-700 dark:text-gray-300">
                  <Score score={row.onShade.white} />
                </td>
                <td className="px-3 sm:px-5 py-2.5 text-gray-700 dark:text-gray-300">
                  <Score score={row.onShade.black} />
                </td>
                <td className="px-3 sm:px-5 py-2.5 text-gray-700 dark:text-gray-300">
                  {row.isMain ? <span className="text-gray-400 dark:text-gray-500">—</span> : <Score score={row.withMain} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-4 py-4 sm:px-5 border-t border-gray-200 dark:border-gray-700 space-y-3 text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>
          <strong className="text-gray-900 dark:text-white">What the numbers say.</strong> On {main.name} itself (
          {main.hex.toUpperCase()}), white text scores {mainScore.white.label} and black text {mainScore.black.label}, so
          use {mainScore.best.name.toLowerCase()} for labels on a {colorName} fill.{' '}
          {whiteOk.length > 0
            ? `White text passes AA on ${whiteOk.length} of the ${rows.length} shades (${listNames(whiteOk)}).`
            : `White text does not pass AA on any of the ${rows.length} shades.`}{' '}
          {blackOk.length > 0
            ? `Black text passes on ${blackOk.length} (${listNames(blackOk)}).`
            : 'Black text does not pass AA on any of them.'}
        </p>
        {noAaa.length > 0 ? (
          <p>
            <strong className="text-gray-900 dark:text-white">Mid-tones to be careful with.</strong> Neither black nor
            white text reaches AAA (7:1) on {listNames(noAaa)}. They are fine for fills, borders and large headings,
            but pick a lighter or darker shade behind long passages of small text.
          </p>
        ) : null}
        <p>
          <strong className="text-gray-900 dark:text-white">Pairing with {main.name}.</strong>{' '}
          {worksOnMain.length > 0
            ? `As text or icons on a ${main.hex.toUpperCase()} background, ${listNames(worksOnMain)} ${worksOnMain.length === 1 ? 'reaches' : 'reach'} 4.5:1. The other shades are too close to it in lightness and should stay decorative.`
            : `None of the other shades reaches 4.5:1 against ${main.hex.toUpperCase()}, so they should not carry text on it; use white or black instead, as scored above.`}
        </p>
      </div>

      <div className="px-4 pb-5 sm:px-5 grid grid-cols-1 gap-4">
        <CopyCodeBlock label="CSS variables" code={cssVariables} />
        <CopyCodeBlock label="Tailwind colors" code={tailwindColors} />
      </div>
    </section>
  );
}
