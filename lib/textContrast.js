import { getContrastRatio } from '../app/tools/color-palette-preview/lib/contrastUtils';

/**
 * WCAG 2.x level for a contrast ratio with normal-size text.
 * @param {number} ratio
 * @returns {'AAA' | 'AA' | 'AA large' | 'Fail'}
 */
export function wcagLevel(ratio) {
  if (ratio >= 7) return 'AAA';
  if (ratio >= 4.5) return 'AA';
  if (ratio >= 3) return 'AA large';
  return 'Fail';
}

/** Contrast ratio cut (not rounded) to two decimals, so "4.50" never hides a 4.496 fail. */
export function formatRatio(ratio) {
  return `${(Math.floor(ratio * 100) / 100).toFixed(2)}:1`;
}

/**
 * Black or white text on a background: which reads better, and how both score.
 * Uses the same WCAG relative-luminance math as the contrast checker tool.
 * @param {string} backgroundHex
 */
export function textContrastOn(backgroundHex) {
  const white = getContrastRatio(backgroundHex, '#FFFFFF');
  const black = getContrastRatio(backgroundHex, '#000000');
  const useBlack = black >= white;
  return {
    white: { ratio: white, label: formatRatio(white), level: wcagLevel(white) },
    black: { ratio: black, label: formatRatio(black), level: wcagLevel(black) },
    best: useBlack
      ? { name: 'Black', hex: '#000000', ratio: black, label: formatRatio(black), level: wcagLevel(black) }
      : { name: 'White', hex: '#FFFFFF', ratio: white, label: formatRatio(white), level: wcagLevel(white) },
  };
}

/** Contrast between any two colors, with label and level. */
export function contrastBetween(hexA, hexB) {
  const ratio = getContrastRatio(hexA, hexB);
  return { ratio, label: formatRatio(ratio), level: wcagLevel(ratio) };
}
