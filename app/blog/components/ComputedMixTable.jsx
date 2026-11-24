import CopyableHex from '../forest-green-hex-code/CopyableHex';
import { textContrastOn } from '../../../lib/textContrast';

const LEVEL_STYLES = {
  AAA: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  AA: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200',
  'AA large': 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200',
  Fail: 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200',
};

const LEVEL_TEXT = {
  AAA: 'AAA',
  AA: 'AA',
  'AA large': 'Large text only',
  Fail: 'Fails',
};

/**
 * Ratio table whose values are calculated at build time by the color mixer's own code
 * (see app/tools/color-mixer/colorMixing.js), not typed in by hand.
 *
 * @param {object} props
 * @param {Array<{ ratio: string, hex: string, screenHex: string, family: string, label?: string }>} props.rows
 * @param {boolean} [props.showScreenBlend] add a column with the plain sRGB (screen) blend
 * @param {string} [props.caption]
 */
export default function ComputedMixTable({ rows, showScreenBlend = false, caption }) {
  return (
    <div className="not-prose rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm bg-white dark:bg-gray-800/50">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead>
            <tr className="text-left text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/80">
              <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">Swatch</th>
              <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">Mix ratio</th>
              <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">Color</th>
              <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">{showScreenBlend ? 'Paint mix' : 'Hex'}</th>
              {showScreenBlend ? (
                <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">Screen blend</th>
              ) : null}
              <th scope="col" className="px-3 sm:px-4 py-2.5 font-semibold">Best text color</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const contrast = textContrastOn(row.hex);
              return (
                <tr key={row.ratio} className="border-b border-gray-100 dark:border-gray-700/70 last:border-0">
                  <td className="px-3 sm:px-4 py-2.5">
                    <span
                      className="flex h-10 w-14 items-center justify-center rounded-md border border-black/10 text-sm font-semibold"
                      style={{ backgroundColor: row.hex, color: contrast.best.hex }}
                      aria-hidden
                    >
                      Aa
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 py-2.5 text-gray-700 dark:text-gray-300 sm:whitespace-nowrap">{row.ratio}</td>
                  <td className="px-3 sm:px-4 py-2.5 font-medium text-gray-900 dark:text-white">{row.label || row.family}</td>
                  <td className="px-3 sm:px-4 py-2.5 text-gray-900 dark:text-white">
                    <CopyableHex hex={row.hex} />
                  </td>
                  {showScreenBlend ? (
                    <td className="px-3 sm:px-4 py-2.5 text-gray-700 dark:text-gray-300">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className="inline-block h-5 w-5 rounded border border-black/10"
                          style={{ backgroundColor: row.screenHex }}
                          aria-hidden
                        />
                        <span className="font-mono tabular-nums">{row.screenHex}</span>
                      </span>
                    </td>
                  ) : null}
                  <td className="px-3 sm:px-4 py-2.5 text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    {contrast.best.name} <span className="font-mono tabular-nums">{contrast.best.label}</span>{' '}
                    <span className={`ml-1 rounded-full px-2 py-0.5 text-xs font-semibold ${LEVEL_STYLES[contrast.best.level]}`}>
                      {LEVEL_TEXT[contrast.best.level]}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
