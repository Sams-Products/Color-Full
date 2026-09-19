'use client';

import { useMemo, useState } from 'react';
import { COLOR_NAME_DATABASE } from '../../../lib/colorNameDatabase';
import { getColorResult, hexToRgb, rgbToHex } from '../../../lib/colorNameFinderUtils';
import ToolHexInput from '../components/ToolHexInput';

const POPULAR_PRESETS = [
  { name: 'Sage Green', hex: 'B2AC88' },
  { name: 'Terracotta', hex: 'E2725B' },
  { name: 'Forest Green', hex: '228B22' },
  { name: 'Sunset Orange', hex: 'F97316' },
  { name: 'Discord Blurple', hex: '5865F2' },
  { name: 'Mauve', hex: 'E0B0FF' },
  { name: 'Navy Blue', hex: '000080' },
  { name: 'Lavender', hex: 'E6E6FA' },
  { name: 'Charcoal', hex: '36454F' },
  { name: 'Dusty Rose', hex: 'DCAE96' },
];

function relativeLuminance(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return 0;
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((val) => {
    const n = val / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function readableTextOnColor(hex) {
  return relativeLuminance(hex) > 0.45 ? '#0f172a' : '#ffffff';
}

function generateShadesAndTints(rgb) {
  if (!rgb) return [];
  const steps = [-40, -20, 0, 20, 40];
  return steps.map((percent) => {
    let r, g, b;
    if (percent < 0) {
      const factor = (100 + percent) / 100;
      r = Math.round(rgb.r * factor);
      g = Math.round(rgb.g * factor);
      b = Math.round(rgb.b * factor);
    } else if (percent > 0) {
      const factor = percent / 100;
      r = Math.round(rgb.r + (255 - rgb.r) * factor);
      g = Math.round(rgb.g + (255 - rgb.g) * factor);
      b = Math.round(rgb.b + (255 - rgb.b) * factor);
    } else {
      r = rgb.r;
      g = rgb.g;
      b = rgb.b;
    }
    const hex = rgbToHex({ r, g, b });
    return {
      label: percent === 0 ? 'Base' : percent < 0 ? `${Math.abs(percent)}% Darker` : `${percent}% Lighter`,
      hex,
    };
  });
}

function CopyButton({ value, label, variant = 'default' }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      console.error(e);
    }
  };

  if (variant === 'chip') {
    return (
      <button
        type="button"
        onClick={copy}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
          copied
            ? 'bg-emerald-500 text-white shadow-md'
            : 'bg-black/20 hover:bg-black/30 dark:bg-white/20 dark:hover:bg-white/30 text-current shadow-sm'
        }`}
        aria-label={copied ? 'Copied to clipboard' : `Copy ${label}`}
      >
        <span>{copied ? '✓ Copied' : `Copy ${label}`}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all shadow-sm shrink-0 ${
        copied
          ? 'border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-purple-400'
      }`}
      aria-label={copied ? 'Copied' : `Copy ${label}`}
    >
      <span>{copied ? '✓ Copied' : 'Copy'}</span>
    </button>
  );
}

function FormatCard({ label, value, subtext }) {
  return (
    <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-white dark:bg-gray-800/80 hover:border-purple-300 dark:hover:border-purple-600 transition-colors shadow-xs">
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            {label}
          </span>
          {subtext && <span className="text-[11px] text-gray-400 dark:text-gray-500 font-normal">{subtext}</span>}
        </div>
        <div className="mt-0.5 font-mono text-sm sm:text-base font-semibold text-gray-900 dark:text-gray-100 truncate">
          {value}
        </div>
      </div>
      <CopyButton value={value} label={label} />
    </div>
  );
}

export default function ColorNameFinderTool() {
  const [hexInput, setHexInput] = useState('228B22');

  const result = useMemo(() => getColorResult(hexInput, COLOR_NAME_DATABASE), [hexInput]);

  const previewHex = result?.hex ?? '#228B22';
  const previewName = result?.closest?.name ?? null;
  const previewTextColor = readableTextOnColor(previewHex);
  const luminance = relativeLuminance(previewHex);
  const isLight = luminance > 0.45;

  const shadesAndTints = useMemo(() => {
    return result?.rgb ? generateShadesAndTints(result.rgb) : [];
  }, [result?.rgb]);

  const setRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase();
    setHexInput(randomHex);
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const clean = text.trim().replace(/^#/, '').replace(/[^a-fA-F0-9]/g, '').slice(0, 6);
      if (clean) {
        setHexInput(clean.toUpperCase());
      }
    } catch {
      // clipboard access denied
    }
  };

  const openEyedropper = async () => {
    if (!window.EyeDropper) {
      document.getElementById('hex-input-picker')?.click();
      return;
    }
    try {
      const dropper = new window.EyeDropper();
      const { sRGBHex } = await dropper.open();
      setHexInput(sRGBHex.replace('#', '').toUpperCase());
    } catch {
      /* user cancelled */
    }
  };

  const cssVarSnippet = previewName
    ? `--color-${previewName.toLowerCase().replace(/[^a-z0-9]/g, '-')}: ${previewHex};`
    : `--color-custom: ${previewHex};`;
  const tailwindSnippet = `bg-[${previewHex}] text-[${previewHex}]`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Main Input & Action Section */}
      <div className="bg-white dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-200/90 dark:border-gray-700/90 p-6 sm:p-8">
        <div className="mb-6">
          <ToolHexInput
            id="hex-input"
            label="Enter any Hex Color Code"
            value={hexInput}
            onChange={(e) => setHexInput(e.target.value.replace(/[^a-fA-F0-9]/g, '').slice(0, 6))}
            onPickerChange={(e) => setHexInput(e.target.value.replace('#', '').toUpperCase())}
            previewHex={previewHex}
            placeholder="228B22"
            accent="purple"
            pickerId="hex-input-picker"
          />

          {/* Quick Action Buttons */}
          <div className="mt-3.5 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={openEyedropper}
              className="inline-flex items-center gap-1.5 rounded-xl border border-purple-200 dark:border-purple-800/70 bg-purple-50/80 dark:bg-purple-950/40 px-3.5 py-2 text-xs font-semibold text-purple-900 dark:text-purple-200 hover:bg-purple-100 dark:hover:bg-purple-900/60 transition-colors shadow-xs"
              title="Sample a color from your screen (Chrome/Edge)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M4.136 4.136l-1.72-1.72M2.239 7.188l2.897.777M4.136 19.864l-1.72 1.72M7.188 21.761l.777-2.897M19.864 19.864l1.72 1.72M21.761 16.812l-2.897-.777"
                />
              </svg>
              <span>Eyedropper</span>
            </button>

            <button
              type="button"
              onClick={setRandomColor}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/60 px-3.5 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-xs"
              title="Generate a random color"
            >
              <span>🎲 Random Color</span>
            </button>

            <button
              type="button"
              onClick={pasteFromClipboard}
              className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/60 px-3.5 py-2 text-xs font-semibold text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-xs"
              title="Paste hex from clipboard"
            >
              <span>📋 Paste Hex</span>
            </button>
          </div>

          {/* Preset Swatches Row */}
          <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/60">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
              Popular color lookups:
            </p>
            <div className="flex flex-wrap gap-2">
              {POPULAR_PRESETS.map((preset) => (
                <button
                  key={preset.hex}
                  type="button"
                  onClick={() => setHexInput(preset.hex)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs font-medium transition-all ${
                    hexInput.toUpperCase() === preset.hex
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/60 text-purple-950 dark:text-purple-200 ring-2 ring-purple-400/40'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-purple-300'
                  }`}
                >
                  <span
                    className="w-3 h-3 rounded-full border border-black/15 flex-shrink-0"
                    style={{ backgroundColor: `#${preset.hex}` }}
                  />
                  <span>{preset.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Interactive Color Swatch Card */}
        <div
          className="relative w-full rounded-2xl border-2 border-black/10 dark:border-white/10 shadow-2xl transition-all duration-200 flex flex-col items-center justify-between p-6 sm:p-8 text-center min-h-[14rem] overflow-hidden"
          style={{ backgroundColor: previewHex, color: previewTextColor }}
          role="img"
          aria-label={
            previewName
              ? `Color preview ${previewHex}, closest name ${previewName}`
              : `Color preview ${previewHex}`
          }
        >
          {/* Top meta tags */}
          <div className="w-full flex items-center justify-between text-xs font-semibold">
            <span
              className="px-3 py-1 rounded-full backdrop-blur-md bg-black/15 dark:bg-white/15 text-current shadow-xs"
            >
              {isLight ? '☀️ Light Hue' : '🌙 Deep Hue'}
            </span>
            <span className="px-3 py-1 rounded-full backdrop-blur-md bg-black/15 dark:bg-white/15 text-current font-mono text-[11px] shadow-xs">
              Luminance: {Math.round(luminance * 100)}%
            </span>
          </div>

          {/* Main Color Name Title */}
          <div className="my-4">
            {previewName ? (
              <>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight"
                  style={{ color: previewTextColor }}
                >
                  {previewName}
                </h2>
                <p
                  className="mt-1.5 text-base sm:text-lg font-mono font-bold opacity-90"
                  style={{ color: previewTextColor }}
                >
                  {previewHex}
                </p>
              </>
            ) : (
              <p className="text-base font-semibold opacity-90">
                Enter a 3 or 6-digit hex code
              </p>
            )}
          </div>

          {/* Bottom Quick Copy Actions */}
          {previewName && (
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-2">
              <CopyButton value={previewName} label="Name" variant="chip" />
              <CopyButton value={previewHex} label="Hex" variant="chip" />
            </div>
          )}
        </div>
      </div>

      {/* Result Breakdown & Conversions */}
      {result ? (
        <div className="bg-white dark:bg-gray-800/95 rounded-2xl shadow-xl border border-gray-200/90 dark:border-gray-700/90 p-6 sm:p-8 space-y-8">
          <div>
            <div className="flex items-baseline justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Standardized Match
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                  {result.closest?.name ?? 'Unknown'}
                </h3>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-semibold">
                Delta: {result.closest?.distance === 0 ? 'Exact Match (100%)' : 'Closest Match'}
              </span>
            </div>

            {/* Code Format Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <FormatCard label="HEX Code" value={result.hex} subtext="Web & UI" />
              <FormatCard label="RGB Format" value={result.rgbFormatted} subtext="Screen Displays" />
              <FormatCard label="HSL Format" value={result.hslFormatted} subtext="Hue, Sat, Lightness" />
              <FormatCard label="CMYK Format" value={result.cmykFormatted} subtext="Print Inks" />
              <FormatCard label="CSS Variable" value={cssVarSnippet} subtext="Design Tokens" />
              <FormatCard label="Tailwind Class" value={tailwindSnippet} subtext="Utility CSS" />
            </div>
          </div>

          {/* Quick Shade & Tint Ramp */}
          {shadesAndTints.length > 0 && (
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Shades &amp; Tints of {result.closest?.name || result.hex}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3.5">
                Click any swatch to test that variation:
              </p>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {shadesAndTints.map((item) => (
                  <button
                    key={item.hex}
                    type="button"
                    onClick={() => setHexInput(item.hex.replace('#', ''))}
                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all group"
                  >
                    <div
                      className="w-full h-10 sm:h-12 rounded-lg border border-black/10 shadow-xs group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: item.hex }}
                    />
                    <span className="text-[11px] font-mono font-semibold text-gray-800 dark:text-gray-200 truncate w-full text-center">
                      {item.hex}
                    </span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium truncate w-full text-center">
                      {item.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Similar Named Colors */}
          {result.similar.length > 0 && (
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Similar Named Colors
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3.5">
                Nearby color families with verified CSS &amp; design system names:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {result.similar.map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    onClick={() => setHexInput(c.hex.replace('#', ''))}
                    className="flex flex-col items-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 p-3 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-md transition-all group text-left"
                    title={`${c.name} (${c.hex})`}
                  >
                    <div
                      className="w-full h-12 rounded-lg border border-black/10 shadow-inner group-hover:scale-105 transition-transform"
                      style={{ backgroundColor: c.hex }}
                      aria-hidden
                    />
                    <div className="w-full text-center">
                      <div className="text-xs font-bold text-gray-900 dark:text-white truncate">
                        {c.name}
                      </div>
                      <div className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-0.5">
                        {c.hex}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 dark:bg-gray-800/40 rounded-xl border border-gray-200 dark:border-gray-700">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Please enter a valid 3- or 6-character hex code (e.g. <code>228B22</code> or <code>B2AC88</code>).
          </p>
        </div>
      )}
    </div>
  );
}
