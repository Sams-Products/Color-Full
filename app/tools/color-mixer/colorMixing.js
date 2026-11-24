export const PRESET_COLORS = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Green', hex: '#008000' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'White', hex: '#FFFFFF' },
  { name: 'Black', hex: '#000000' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Brown', hex: '#8B4513' },
];

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function normalizeHex(hex) {
  const clean = (hex || '').trim().replace('#', '');
  if (!/^[a-fA-F0-9]{6}$/.test(clean)) return '#000000';
  return `#${clean.toUpperCase()}`;
}

export function hexToRgb(hex) {
  const normalized = normalizeHex(hex);
  return {
    r: parseInt(normalized.slice(1, 3), 16),
    g: parseInt(normalized.slice(3, 5), 16),
    b: parseInt(normalized.slice(5, 7), 16),
  };
}

export function rgbToHex({ r, g, b }) {
  const toHex = (value) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

/* -------------------------------------------------------------------------------------------
 * Painter's-wheel mixing model
 *
 * A screen mixes light: blue + yellow averages to gray. Paint does not: blue + yellow gives
 * green, because on the painter's (red–yellow–blue) wheel green sits between them.
 *
 * To imitate that, every color is split into three parts:
 *   - its hue, placed on the painter's wheel instead of the screen's red–green–blue wheel
 *   - how much white it contains (its lowest channel)
 *   - how bright it is (its highest channel)
 * Hues are mixed around the painter's wheel, white is averaged, and brightness is taken from
 * the ordinary screen blend, so two strong colors that share little light come out deeper,
 * the way two paints do. Hues that sit opposite each other (complements) cancel towards a
 * muddy brown or gray.
 *
 * This is a model, not a measurement: real pigments differ in strength and undertone.
 * ----------------------------------------------------------------------------------------- */

/** [screen (RGB) hue, painter's (RYB) hue] pairs: red, orange, yellow, green, blue, purple, red. */
const HUE_ANCHORS = [
  [0, 0],
  [30, 60],
  [60, 120],
  [120, 180],
  [240, 240],
  [300, 300],
  [360, 360],
];

/** Mud = dull orange: screen hue 30°, 72% of the blend's brightness, mostly gray. */
const MUD_HUE = 30;
const MUD_BRIGHTNESS = 0.72;
const MUD_GRAYNESS = 0.62;

function wrapHue(h) {
  return ((h % 360) + 360) % 360;
}

function mapHue(h, fromIndex, toIndex) {
  const hue = wrapHue(h);
  for (let i = 0; i < HUE_ANCHORS.length - 1; i += 1) {
    const from0 = HUE_ANCHORS[i][fromIndex];
    const from1 = HUE_ANCHORS[i + 1][fromIndex];
    if (hue >= from0 && hue <= from1) {
      const to0 = HUE_ANCHORS[i][toIndex];
      const to1 = HUE_ANCHORS[i + 1][toIndex];
      return to0 + ((hue - from0) / (from1 - from0)) * (to1 - to0);
    }
  }
  return hue;
}

export function rgbHueToRybHue(h) {
  return wrapHue(mapHue(h, 0, 1));
}

export function rybHueToRgbHue(h) {
  return wrapHue(mapHue(h, 1, 0));
}

/** Split a color into screen hue (null for grays), highest channel and lowest channel (0–1). */
function decompose({ r, g, b }) {
  const rn = r / 255;
  const gn = g / 255;
  const bn = b / 255;
  const max = Math.max(rn, gn, bn);
  const min = Math.min(rn, gn, bn);
  const chroma = max - min;
  let hue = null;
  if (chroma > 0) {
    if (max === rn) hue = 60 * (((gn - bn) / chroma) % 6);
    else if (max === gn) hue = 60 * ((bn - rn) / chroma + 2);
    else hue = 60 * ((rn - gn) / chroma + 4);
    hue = wrapHue(hue);
  }
  return { hue, max, min, chroma };
}

/** Rebuild a color from screen hue, highest channel and lowest channel (0–1). */
function compose(hue, max, min) {
  const chroma = max - min;
  if (hue === null || chroma <= 0) {
    const v = Math.round(max * 255 + 1e-6);
    return { r: v, g: v, b: v };
  }
  const h = wrapHue(hue) / 60;
  const x = chroma * (1 - Math.abs((h % 2) - 1));
  let rgb;
  if (h < 1) rgb = [chroma, x, 0];
  else if (h < 2) rgb = [x, chroma, 0];
  else if (h < 3) rgb = [0, chroma, x];
  else if (h < 4) rgb = [0, x, chroma];
  else if (h < 5) rgb = [x, 0, chroma];
  else rgb = [chroma, 0, x];
  // The tiny nudge keeps exact halves (e.g. 25.5) rounding the same way as the screen blend.
  const to255 = (v) => Math.round((v + min) * 255 + 1e-6);
  return { r: to255(rgb[0]), g: to255(rgb[1]), b: to255(rgb[2]) };
}

function hueDistance(a, b) {
  const d = Math.abs(wrapHue(a) - wrapHue(b));
  return Math.min(d, 360 - d);
}

/**
 * Ordinary screen blend: each channel averaged in sRGB.
 * Same result as CSS `color-mix(in srgb, hex1, hex2 <share2>%)`.
 * @param {string} hex1
 * @param {string} hex2
 * @param {number} [share2] share of the second color, 0–1
 */
export function mixHexColorsScreen(hex1, hex2, share2 = 0.5) {
  const t = clamp01(share2);
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const rgb = {
    r: Math.round(c1.r * (1 - t) + c2.r * t + 1e-6),
    g: Math.round(c1.g * (1 - t) + c2.g * t + 1e-6),
    b: Math.round(c1.b * (1 - t) + c2.b * t + 1e-6),
  };
  return { hex: rgbToHex(rgb), rgb };
}

/**
 * Paint-style mix on the painter's (RYB) wheel.
 * @param {string} hex1
 * @param {string} hex2
 * @param {number} [share2] share of the second color, 0–1 (0.5 = equal parts)
 */
export function mixHexColorsRyb(hex1, hex2, share2 = 0.5) {
  const t = clamp01(share2);
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const a = decompose(c1);
  const b = decompose(c2);

  // Brightness comes from the screen blend, white content is averaged.
  const value = Math.max(
    (c1.r * (1 - t) + c2.r * t) / 255,
    (c1.g * (1 - t) + c2.g * t) / 255,
    (c1.b * (1 - t) + c2.b * t) / 255
  );
  const white = a.min * (1 - t) + b.min * t;

  // Hue: travel around the painter's wheel, weighted by how much color each side brings.
  const pullA = a.chroma * (1 - t);
  const pullB = b.chroma * t;
  let paintHue = null;
  let cancel = 0;
  if (pullA > 0 && pullB > 0) {
    const hueA = rgbHueToRybHue(a.hue);
    const hueB = rgbHueToRybHue(b.hue);
    const shareB = pullB / (pullA + pullB);
    let delta = hueB - hueA;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    if (Math.abs(Math.abs(delta) - 180) < 1e-6) {
      // Exact complements: both ways round are equally short. Go through the warm side,
      // because paint complements mix to browns (dark oranges), not to greens.
      const warmUp = hueDistance(hueA + 90, 60) <= hueDistance(hueA - 90, 60);
      delta = warmUp ? 180 : -180;
    }
    paintHue = wrapHue(hueA + delta * shareB);

    // Opposite hues neutralise each other. Nothing is lost up to 120° apart (primaries make
    // clean secondaries); the effect is complete at 180° and strongest at equal pull.
    const s = clamp01((Math.abs(delta) - 120) / 60);
    cancel = s * s * (3 - 2 * s) * 4 * shareB * (1 - shareB);
  } else if (pullA > 0) {
    paintHue = rgbHueToRybHue(a.hue);
  } else if (pullB > 0) {
    paintHue = rgbHueToRybHue(b.hue);
  }

  let rgb = compose(paintHue === null ? null : rybHueToRgbHue(paintHue), value, white);

  if (cancel > 0) {
    // What complements cancel into is not a clean gray but "mud": a darker, dull, warm
    // neutral (a brown), which keeps whatever white the two colors contained.
    const mudMax = white + (value - white) * MUD_BRIGHTNESS;
    const mudMin = white + (mudMax - white) * MUD_GRAYNESS;
    const mud = compose(MUD_HUE, mudMax, mudMin);
    rgb = {
      r: Math.round(rgb.r * (1 - cancel) + mud.r * cancel),
      g: Math.round(rgb.g * (1 - cancel) + mud.g * cancel),
      b: Math.round(rgb.b * (1 - cancel) + mud.b * cancel),
    };
  }

  return { hex: rgbToHex(rgb), rgb };
}

/**
 * Everyday name for a color, using the painter's vocabulary (red-orange, blue-green, brown…).
 * Based on hue, lightness and saturation rather than distance to a short list of swatches,
 * so a pale red is called pink and a dark orange is called brown.
 */
export function getClosestNamedColor(hex) {
  const { hue, max, min, chroma } = decompose(hexToRgb(hex));
  const light = (max + min) / 2; // 0 = black, 1 = white
  const purity = max === 0 ? 0 : chroma / max; // 0 = gray, 1 = pure color

  if (hue === null || chroma < 0.06 || (purity < 0.15 && light <= 0.85)) {
    if (light < 0.12) return 'Black';
    if (light > 0.93) return 'White';
    if (light < 0.35) return 'Dark Gray';
    if (light > 0.7) return 'Light Gray';
    return 'Gray';
  }

  const pale = light > 0.72;
  const dull = purity < 0.5;

  if (hue < 12 || hue >= 345) {
    if (light >= 0.65) return 'Pink';
    if (dull) return max < 0.7 ? 'Brown' : 'Pink';
    return max < 0.55 ? 'Maroon' : 'Red';
  }
  if (hue < 45) {
    if (pale) return 'Peach';
    if (max < 0.4) return 'Dark Brown';
    if (max < 0.68) return 'Brown';
    if (dull) return 'Tan';
    if (hue < 22) return 'Red-Orange';
    return hue < 37 ? 'Orange' : 'Yellow-Orange';
  }
  if (hue < 70) {
    if (pale) return 'Light Yellow';
    if (max < 0.65) return 'Olive';
    return dull ? 'Tan' : 'Yellow';
  }
  if (hue < 100) {
    if (max < 0.5) return 'Olive Green';
    return pale ? 'Light Green' : 'Yellow-Green';
  }
  if (hue < 160) {
    if (max < 0.35) return 'Dark Green';
    return pale ? 'Light Green' : 'Green';
  }
  if (hue < 195) {
    if (max < 0.55) return 'Teal';
    return pale ? 'Light Blue-Green' : 'Blue-Green';
  }
  if (hue < 250) {
    if (max < 0.55) return hue < 215 ? 'Teal' : 'Navy';
    return pale ? 'Light Blue' : 'Blue';
  }
  if (hue < 285) {
    if (max < 0.45) return 'Dark Purple';
    return pale ? 'Lavender' : 'Blue-Violet';
  }
  // 285–345: purple, through magenta, to crimson
  if (light >= 0.62) return hue < 315 ? 'Orchid' : 'Pink';
  if (dull) {
    if (max < 0.4) return hue < 325 ? 'Dark Purple' : 'Dark Brown';
    return 'Mauve';
  }
  if (max < 0.6) return hue < 325 ? 'Purple' : 'Burgundy';
  return hue < 325 ? 'Magenta' : 'Crimson';
}

/**
 * Rows for a ratio table: the paint-style mix and the plain screen blend at each share.
 * @param {{ name: string, hex: string }} color1
 * @param {{ name: string, hex: string }} color2
 * @param {number[]} sharesOfColor2 e.g. [0.1, 0.2, 0.5] for 90/10, 80/20, 50/50
 */
export function buildMixRows(color1, color2, sharesOfColor2) {
  return sharesOfColor2.map((share2) => {
    const percent2 = Math.round(share2 * 100);
    const paint = mixHexColorsRyb(color1.hex, color2.hex, share2);
    const screen = mixHexColorsScreen(color1.hex, color2.hex, share2);
    return {
      share2,
      ratio: `${100 - percent2}% ${color1.name} + ${percent2}% ${color2.name}`,
      hex: paint.hex,
      rgb: paint.rgb,
      screenHex: screen.hex,
      family: getClosestNamedColor(paint.hex),
    };
  });
}

export function getColorLabel(hex) {
  const normalized = normalizeHex(hex);
  const exact = PRESET_COLORS.find((c) => c.hex === normalized);
  return exact?.name || getClosestNamedColor(normalized);
}

export const MIX_COMBINATIONS = [
  ['red', 'blue'],
  ['blue', 'yellow'],
  ['red', 'yellow'],
  ['blue', 'green'],
  ['red', 'green'],
  ['purple', 'yellow'],
  ['orange', 'blue'],
  ['pink', 'purple'],
  ['red', 'white'],
  ['blue', 'white'],
  ['black', 'white'],
  ['red', 'black'],
  ['yellow', 'green'],
  ['orange', 'red'],
  ['blue', 'purple'],
  ['green', 'yellow'],
  ['pink', 'blue'],
  ['brown', 'orange'],
];

export const PRESET_MAP = Object.fromEntries(
  PRESET_COLORS.map((c) => [c.name.toLowerCase(), c.hex])
);

export function getCombinationMix(color1Name, color2Name) {
  const hex1 = PRESET_MAP[color1Name.toLowerCase()];
  const hex2 = PRESET_MAP[color2Name.toLowerCase()];
  if (!hex1 || !hex2) return null;
  const result = mixHexColorsRyb(hex1, hex2);
  const closestName = getClosestNamedColor(result.hex);
  return {
    color1: { name: getColorLabel(hex1), hex: hex1 },
    color2: { name: getColorLabel(hex2), hex: hex2 },
    result: { ...result, closestName },
  };
}

export function toTitleCase(value) {
  return value
    .split(' ')
    .map((part) => (part ? `${part[0].toUpperCase()}${part.slice(1)}` : part))
    .join(' ');
}
