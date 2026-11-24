/**
 * Color harmony rules used by the palette generator.
 * Shared by the tool (client) and the worked examples on the tool page (server),
 * so the examples always show what the tool really produces.
 */

export const hexToHsl = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
};

export const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

export const generatePalettes = (baseColor) => {
  const baseHsl = hexToHsl(baseColor);
  return {
    monochromatic: generateMonochromatic(baseHsl),
    analogous: generateAnalogous(baseHsl),
    complementary: generateComplementary(baseHsl),
    triadic: generateTriadic(baseHsl),
    splitComplementary: generateSplitComplementary(baseHsl),
    tetradic: generateTetradic(baseHsl),
  };
};

const generateMonochromatic = (baseHsl) => {
  const colors = [];
  for (let i = 0; i < 5; i++) {
    const lightness = Math.max(10, Math.min(90, baseHsl.l + (i - 2) * 15));
    colors.push(hslToHex(baseHsl.h, baseHsl.s, lightness));
  }
  return colors;
};

const generateAnalogous = (baseHsl) => [
  hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, baseHsl.l),
  hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h + 30) % 360, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h + 60) % 360, baseHsl.s, baseHsl.l),
  hslToHex((baseHsl.h - 30 + 360) % 360, baseHsl.s, Math.min(90, baseHsl.l + 20)),
];

const generateComplementary = (baseHsl) => {
  const compH = (baseHsl.h + 180) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(compH, baseHsl.s, baseHsl.l),
    hslToHex(compH, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(baseHsl.h, Math.max(20, baseHsl.s - 30), baseHsl.l),
  ];
};

const generateTriadic = (baseHsl) => {
  const h1 = (baseHsl.h + 120) % 360;
  const h2 = (baseHsl.h + 240) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(h1, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

const generateSplitComplementary = (baseHsl) => {
  const h1 = (baseHsl.h + 150) % 360;
  const h2 = (baseHsl.h + 210) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
    hslToHex(h1, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

const generateTetradic = (baseHsl) => {
  const h1 = (baseHsl.h + 90) % 360;
  const h2 = (baseHsl.h + 180) % 360;
  const h3 = (baseHsl.h + 270) % 360;
  return [
    hslToHex(baseHsl.h, baseHsl.s, baseHsl.l),
    hslToHex(h1, baseHsl.s, baseHsl.l),
    hslToHex(h2, baseHsl.s, baseHsl.l),
    hslToHex(h3, baseHsl.s, baseHsl.l),
    hslToHex(baseHsl.h, baseHsl.s, Math.min(90, baseHsl.l + 20)),
  ];
};

export const paletteNames = {
  monochromatic: 'Monochromatic',
  analogous: 'Analogous',
  complementary: 'Complementary',
  triadic: 'Triadic',
  splitComplementary: 'Split Complementary',
  tetradic: 'Tetradic',
};
