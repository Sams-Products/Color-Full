'use client';

import Link from 'next/link';
import InlineTagLink from './components/InlineTagLink';
import EnvatoAffiliateBanner from './components/EnvatoAffiliateBanner';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { PILLAR_GUIDES, TOOL_HUB_LINKS } from '../lib/site-pillar-links';

const homeToolCards = [
  {
    href: '/tools/color-name-finder',
    name: 'Color Name Finder',
    badge: 'Most Popular',
    category: 'Identification & Naming',
    description:
      'Enter any Hex or RGB value—or use the visual picker—to instantly find the closest official color name, CSS token, and complementary harmonies.',
    swatches: ['#B2AC88', '#E2725B', '#000080', '#E0B0FF', '#228B22'],
    cta: 'Find Color Name →',
  },
  {
    href: '/tools/palette-generator',
    name: 'Color Palette Generator',
    badge: 'Pro Workflow',
    category: 'Harmony & Tokens',
    description:
      'Generate balanced 5-swatch color schemes (complementary, analogous, triadic, monochromatic) from any base color with 1-click hex copy.',
    swatches: ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
    cta: 'Generate Palette →',
  },
  {
    href: '/tools/contrast-checker',
    name: 'WCAG Contrast Checker',
    badge: 'ADA & WCAG 2.1',
    category: 'Accessibility Audit',
    description:
      'Test foreground text and background hex pairs against WCAG AA (4.5:1) and AAA (7:1) standards for body copy, headings, and UI buttons.',
    swatches: ['#0F172A', '#F8FAFC', '#4F46E5', '#10B981', '#E11D48'],
    cta: 'Check Contrast →',
  },
  {
    href: '/tools/color-palette-preview',
    name: 'Live UI Palette Preview',
    badge: '3 Live Mockups',
    category: 'Visual Prototyping',
    description:
      'Preview your 5-color brand palette live on realistic SaaS Dashboard, Marketing Landing Page, and Mobile App UI mockups before writing CSS.',
    swatches: ['#1E293B', '#3B82F6', '#06B6D4', '#F8FAFC', '#64748B'],
    cta: 'Preview on UI →',
  },
  {
    href: '/tools/color-mixer',
    name: 'Color Mixing Simulator',
    badge: 'RYB & RGB',
    category: 'Pigment & Digital Blending',
    description:
      'Blend any two colors using realistic subtractive RYB paint theory or digital RGB ratios and inspect exact midpoint hex codes.',
    swatches: ['#FF69B4', '#BF34CA', '#800080', '#F59E0B', '#16A34A'],
    cta: 'Mix Two Colors →',
  },
  {
    href: '/tools/tint-shade-generator',
    name: 'Tint & Shade Generator',
    badge: 'CSS Scales',
    category: 'Design Systems',
    description:
      'Create 10-step lighter tint and darker shade ladders from a single hex code—ready to paste into Tailwind, Figma variables, or CSS tokens.',
    swatches: ['#EEF2FF', '#C7D2FE', '#818CF8', '#4F46E5', '#312E81'],
    cta: 'Build Scale →',
  },
];

const featuredPalettes = [
  {
    id: 1,
    name: 'Sage Green & Warm Terracotta',
    tag: 'Wellness & Organic',
    description: 'Calm botanical sage balanced with sun-baked terracotta clay, soft linen cream, and grounded charcoal type.',
    colors: ['#B2AC88', '#E2725B', '#FFFDD0', '#DCAE96', '#36454F'],
    slug: 'sage-green-hex-code',
  },
  {
    id: 2,
    name: 'Discord Dark Mode UI System',
    tag: 'App Dark Theme',
    description: 'Layered low-glare dark surfaces (#313338, #2B2D31, #1E1F22) paired with high-legibility ash text and Blurple.',
    colors: ['#313338', '#2B2D31', '#1E1F22', '#DBDEE1', '#5865F2'],
    slug: 'discord-dark-mode-colors',
  },
  {
    id: 3,
    name: 'Sunset Vibes Gradient',
    tag: 'Creative & Editorial',
    description: 'Warm golden-hour transition from radiant orange and coral red through magenta-pink into deep twilight violet.',
    colors: ['#F97316', '#EF4444', '#EC4899', '#8B5CF6', '#F59E0B'],
    slug: 'sunset-color-palette',
  },
  {
    id: 4,
    name: 'Pink-Purple Mauve & Orchid',
    tag: 'Beauty & Lifestyle',
    description: 'Soft dusty mauve (#E0B0FF) and vibrant magenta-purple (#BF34CA) anchored by deep plum and charcoal.',
    colors: ['#FF69B4', '#BF34CA', '#E0B0FF', '#9966CC', '#374151'],
    slug: 'pink-purple-color-name',
  },
  {
    id: 5,
    name: 'Forest Green Botanical Ramp',
    tag: 'Eco & Finance UI',
    description: 'Rich evergreen (#228B22 and #065F46) stepping smoothly into emerald and mint for trustworthy interfaces.',
    colors: ['#065F46', '#228B22', '#059669', '#10B981', '#34D399'],
    slug: 'forest-green-hex-code',
  },
  {
    id: 6,
    name: 'Navy Blue & Classic Gold',
    tag: 'Corporate & Luxury',
    description: 'Authoritative web navy (#000080) and steel blue paired with warm metallic gold (#FFD700) and crisp alabaster.',
    colors: ['#000080', '#4682B4', '#FFD700', '#FF6B6B', '#F8FAFC'],
    slug: 'navy-blue-hex-code',
  },
  {
    id: 7,
    name: 'Material & SaaS Dark Mode',
    tag: 'Developer UI',
    description: 'WCAG-tested dark canvas (#121212) and elevated card surfaces (#1E1E1E) with soft indigo interactive accents.',
    colors: ['#121212', '#1E1E1E', '#3F3F46', '#F5F5F5', '#818CF8'],
    slug: 'dark-mode-color-palette',
  },
  {
    id: 8,
    name: 'Burgundy Wine & Warm Cream',
    tag: 'Hospitality & Print',
    description: 'Deep burgundy (#800020) and oxblood paired with antique gold and warm stationery cream (#FFF8F0).',
    colors: ['#800020', '#722F37', '#FFD700', '#000080', '#FFF8F0'],
    slug: 'burgundy-hex-code',
  },
];

const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Guides' },
  { id: 'hex', label: 'Hex & Color Guides' },
  { id: 'dark-mode', label: 'App Dark Mode Colors' },
  { id: 'mixing', label: 'Color Mixing & Theory' },
  { id: 'accessibility', label: 'UI & WCAG Accessibility' },
];

const latestPosts = [
  {
    id: 1,
    title: 'Dark Mode Color Palette: Official Hex Codes for Canvas, Cards & Text',
    slug: 'dark-mode-color-palette',
    category: 'dark-mode',
    categoryLabel: 'Dark Mode UI',
    readTime: '8 min read',
    excerpt:
      'Build eye-friendly dark interfaces using Material #121212, elevated surface tokens, off-white typography, and WCAG-verified accent ramps.',
    palette: ['#121212', '#1E1E1E', '#3F3F46', '#F5F5F5', '#818CF8'],
    publishedAt: '2026-06-15',
  },
  {
    id: 2,
    title: 'Sage Green Hex Code, RGB & 10 Light/Dark Shades (+ Canva)',
    slug: 'sage-green-hex-code',
    category: 'hex',
    categoryLabel: 'Hex Reference',
    readTime: '10 min read',
    excerpt:
      'Copy the canonical sage green hex code (#B2AC88), RGB(178, 172, 136), 10 light to dark sage shades, and custom Canva brand kit swatches.',
    palette: ['#B2AC88', '#E2725B', '#FFFDD0', '#36454F', '#87A96B'],
    publishedAt: '2026-06-26',
  },
  {
    id: 3,
    title: 'Discord Dark Mode Colors: Complete UI & Sidebar Hex Breakdown',
    slug: 'discord-dark-mode-colors',
    category: 'dark-mode',
    categoryLabel: 'App Theme Breakdown',
    readTime: '7 min read',
    excerpt:
      'Copy every Discord dark theme token: primary chat canvas (#313338), channel sidebar (#2B2D31), app frame (#1E1F22), and Blurple (#5865F2).',
    palette: ['#313338', '#2B2D31', '#1E1F22', '#DBDEE1', '#5865F2'],
    publishedAt: '2026-06-15',
  },
  {
    id: 4,
    title: 'Pink-Purple Color Names: Mauve, Magenta, Orchid & Plum Swatches',
    slug: 'pink-purple-color-name',
    category: 'hex',
    categoryLabel: 'Color Dictionary',
    readTime: '9 min read',
    excerpt:
      'What color sits between pink and purple? Compare visual swatches and exact hex codes for Mauve (#E0B0FF), Magenta, Fuchsia, Orchid, and Berry.',
    palette: ['#FF69B4', '#FF00FF', '#E0B0FF', '#9966CC', '#374151'],
    publishedAt: '2026-06-05',
  },
  {
    id: 5,
    title: 'What Color Does Pink and Purple Make? 7 Mix Ratios & Swatches',
    slug: 'what-color-does-pink-and-purple-make',
    category: 'mixing',
    categoryLabel: 'Color Mixing',
    readTime: '7 min read',
    excerpt:
      'See the exact color pink and purple make across 7 mixing ratios (from 90/10 rose magenta to 50/50 vibrant magenta #BF34CA and 10/90 deep violet).',
    palette: ['#FF8FC8', '#F06BB8', '#BF34CA', '#A640B0', '#7A2585'],
    publishedAt: '2026-06-05',
  },
  {
    id: 6,
    title: 'Instagram Dark Mode Colors: OLED Black, Surface & Gradient Hexes',
    slug: 'instagram-dark-mode-colors',
    category: 'dark-mode',
    categoryLabel: 'App Theme Breakdown',
    readTime: '7 min read',
    excerpt:
      'Explore Instagram’s OLED-friendly #000000 canvas, #121212 elevated cards, #0095F6 action blue, and the 5-stop Story ring gradient hex codes.',
    palette: ['#000000', '#121212', '#262626', '#0095F6', '#DD2A7B'],
    publishedAt: '2026-07-02',
  },
  {
    id: 7,
    title: 'Sunset Color Palette: 6 Warm Gradient Schemes & Hex Swatches',
    slug: 'sunset-color-palette',
    category: 'hex',
    categoryLabel: 'Curated Palette',
    readTime: '8 min read',
    excerpt:
      'Six complete sunset color palettes—from tropical golden hour to desert dusk—with copy-ready hex codes, RGB values, and CSS gradients.',
    palette: ['#F97316', '#EF4444', '#EC4899', '#8B5CF6', '#F59E0B'],
    publishedAt: '2026-06-01',
  },
  {
    id: 8,
    title: 'Terracotta Hex Code, RGB & 10 Warm Clay Shades (+ Canva)',
    slug: 'terracotta-hex-code',
    category: 'hex',
    categoryLabel: 'Hex Reference',
    readTime: '9 min read',
    excerpt:
      'Sun-baked clay as a digital swatch (#E2725B): 10 shades from linen to burnt umber, plus sage green, cream, and navy blue pairings.',
    palette: ['#E2725B', '#B2AC88', '#FFFDD0', '#000080', '#B7410E'],
    publishedAt: '2026-06-26',
  },
  {
    id: 9,
    title: 'Forest Green Hex Code, RGB & 10 Dark/Light Shades (+ Canva)',
    slug: 'forest-green-hex-code',
    category: 'hex',
    categoryLabel: 'Hex Reference',
    readTime: '10 min read',
    excerpt:
      'Compare CSS forestgreen (#228B22) with deep evergreen UI tokens (#065F46), 10 pine-to-mint shades, and WCAG contrast tips.',
    palette: ['#228B22', '#065F46', '#047857', '#10B981', '#34D399'],
    publishedAt: '2026-06-26',
  },
  {
    id: 10,
    title: 'Navy Blue Hex Code, RGB & 10 Dark/Light Shades (+ Canva)',
    slug: 'navy-blue-hex-code',
    category: 'hex',
    categoryLabel: 'Hex Reference',
    readTime: '9 min read',
    excerpt:
      'Canonical web navy (#000080) and 10 shades from Alice blue to midnight navy—with gold, coral, and crisp white brand pairings.',
    palette: ['#000080', '#4682B4', '#FFD700', '#FFFFFF', '#FF6B6B'],
    publishedAt: '2026-05-21',
  },
  {
    id: 11,
    title: 'WhatsApp & Telegram Dark Mode Colors: Official Chat UI Hexes',
    slug: 'whatsapp-dark-mode-colors',
    category: 'dark-mode',
    categoryLabel: 'App Theme Breakdown',
    readTime: '7 min read',
    excerpt:
      'Deep teal-slate chat backgrounds (#111B21), incoming/outgoing message bubble tokens (#202C33, #005C4B), and #25D366 accent green.',
    palette: ['#111B21', '#202C33', '#2A3942', '#25D366', '#E9EDEF'],
    publishedAt: '2026-07-09',
  },
  {
    id: 12,
    title: 'The 60-30-10 Color Rule: How to Balance UI & Brand Palettes',
    slug: '60-30-10-color-rule',
    category: 'mixing',
    categoryLabel: 'Color Theory',
    readTime: '8 min read',
    excerpt:
      'Master the 60% dominant, 30% secondary, 10% accent proportion rule with real website, dashboard, and interior hex examples.',
    palette: ['#F5F5F5', '#1E3A8A', '#FFD700', '#B2AC88', '#0066FF'],
    publishedAt: '2026-05-13',
  },
  {
    id: 13,
    title: 'What Color Does Blue and Yellow Make? 7 Mix Ratios & Swatches',
    slug: 'what-color-does-blue-and-yellow-make',
    category: 'mixing',
    categoryLabel: 'Color Mixing',
    readTime: '7 min read',
    excerpt:
      'See how blue and yellow blend across 7 ratios—from deep teal-green and forest to balanced green (#008000), chartreuse, and lime.',
    palette: ['#003300', '#006600', '#008000', '#33AA33', '#99CC00'],
    publishedAt: '2026-05-21',
  },
  {
    id: 14,
    title: 'What Color Does Red and Yellow Make? 7 Mix Ratios & Swatches',
    slug: 'what-color-does-red-and-yellow-make',
    category: 'mixing',
    categoryLabel: 'Color Mixing',
    readTime: '7 min read',
    excerpt:
      'Explore 7 red-to-yellow mixing steps with visual swatches and copy-ready hex codes for red-orange, burnt orange, true orange (#FF8000), and amber.',
    palette: ['#FF1A00', '#FF5500', '#FF8000', '#FFAA00', '#FFD700'],
    publishedAt: '2026-05-21',
  },
  {
    id: 15,
    title: 'ADA & Section 508 Color Contrast Guide — WCAG AA/AAA Rules',
    slug: 'accessibility-color-contrast-checker',
    category: 'accessibility',
    categoryLabel: 'Accessibility Guide',
    readTime: '11 min read',
    excerpt:
      'Complete breakdown of WCAG 2.1 Level AA (4.5:1) and AAA (7:1) contrast requirements, non-text UI component rules, and pass/fail hex pairs.',
    palette: ['#111827', '#FFFFFF', '#000080', '#4F46E5', '#10B981'],
    publishedAt: '2026-06-01',
  },
  {
    id: 16,
    title: 'Burgundy Hex Code, RGB & 10 Wine/Maroon Shades (+ Canva)',
    slug: 'burgundy-hex-code',
    category: 'hex',
    categoryLabel: 'Hex Reference',
    readTime: '9 min read',
    excerpt:
      'Copy burgundy (#800020), wine (#722F37), and oxblood (#4A0E0E) hex codes with luxury gold, cream, and collegiate navy pairings.',
    palette: ['#800020', '#722F37', '#FFD700', '#000080', '#FFF8F0'],
    publishedAt: '2026-07-16',
  },
  {
    id: 17,
    title: 'Spotify & Notion Dark Mode Colors: Official UI Token Reference',
    slug: 'spotify-dark-mode-colors',
    category: 'dark-mode',
    categoryLabel: 'App Theme Breakdown',
    readTime: '8 min read',
    excerpt:
      'Compare Spotify’s #121212 canvas and #1DB954 green accent with elevated card surfaces (#181818, #282828) and subdued metadata text.',
    palette: ['#121212', '#181818', '#282828', '#1DB954', '#B3B3B3'],
    publishedAt: '2026-07-02',
  },
  {
    id: 18,
    title: 'WCAG Accessible Buttons & Links: High-Contrast Hex Examples',
    slug: 'wcag-accessible-buttons-and-links',
    category: 'accessibility',
    categoryLabel: 'Accessibility Guide',
    readTime: '9 min read',
    excerpt:
      'Design primary CTAs, outline buttons, focus rings, and inline text links that pass 4.5:1 text contrast and 3:1 non-text contrast.',
    palette: ['#FFFFFF', '#1E40AF', '#1D4ED8', '#1E293B', '#0EA5E9'],
    publishedAt: '2026-04-02',
  },
];

export default function HomeClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedHex, setCopiedHex] = useState(null);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return latestPosts;
    return latestPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const handleCopyHex = (e, hex) => {
    e.preventDefault();
    e.stopPropagation();
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      setTimeout(() => setCopiedHex(null), 1600);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgb(139, 92, 246) 1px, transparent 0)`,
              backgroundSize: '36px 36px',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left: Messaging (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 dark:bg-purple-900/40 px-3.5 py-1.5 text-xs font-semibold text-purple-700 dark:text-purple-200 mb-5 border border-purple-200/80 dark:border-purple-800">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400 animate-pulse" />
                <span>Free Color Suite for Designers, Developers &amp; Brands</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.12] tracking-tight text-gray-900 dark:text-white">
                Find color names, build palettes &amp; ship{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  accessible UI.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl leading-relaxed">
                Identify any hex code with the{' '}
                <InlineTagLink href="/tools/color-name-finder">Color Name Finder</InlineTagLink>, generate harmonious schemes in the{' '}
                <InlineTagLink href="/tools/palette-generator">Palette Generator</InlineTagLink>, verify readability with our{' '}
                <InlineTagLink href="/tools/contrast-checker">WCAG Contrast Checker</InlineTagLink>, and preview colors live on real UI mockups.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center mb-8">
                <Link
                  href="/tools/color-name-finder"
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white rounded-xl font-bold text-base shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Open Color Name Finder</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/tools/palette-generator"
                  className="inline-flex items-center justify-center px-7 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl font-semibold text-base hover:border-purple-500 dark:hover:border-purple-400 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-all duration-200"
                >
                  Generate Color Palette
                </Link>
              </div>

              {/* Quick Tool Pills */}
              <div className="pt-5 border-t border-gray-100 dark:border-gray-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Jump directly to a tool:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: '🎨 Color Name Finder', href: '/tools/color-name-finder' },
                    { label: '✨ Palette Generator', href: '/tools/palette-generator' },
                    { label: '♿ WCAG Contrast Checker', href: '/tools/contrast-checker' },
                    { label: '🖥️ Live UI Preview', href: '/tools/color-palette-preview' },
                    { label: '🧪 Color Mixer (RYB)', href: '/tools/color-mixer' },
                    { label: '🌗 Tint & Shade Scale', href: '/tools/tint-shade-generator' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Interactive-Style Studio Preview Card (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -top-6 -right-4 w-28 h-28 bg-gradient-to-br from-purple-500/30 to-pink-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-6 w-32 h-32 bg-gradient-to-tr from-emerald-400/20 to-indigo-400/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 rounded-2xl shadow-2xl p-5 sm:p-6">
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-300" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                      Theme &amp; Color Studio
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold">
                    1-Click Copy
                  </span>
                </div>

                {/* Live Color Name Match Preview */}
                <div className="mb-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/50 p-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Color Name Finder Match
                    </span>
                    <Link
                      href="/tools/color-name-finder"
                      className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Try live →
                    </Link>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-12 h-12 rounded-xl border border-black/10 shadow-inner shrink-0"
                      style={{ backgroundColor: '#B2AC88' }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-bold text-gray-900 dark:text-white truncate">Sage Green</p>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300">
                          Exact Match
                        </span>
                      </div>
                      <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mt-0.5">
                        HEX #B2AC88 · RGB(178, 172, 136) · HSL(51°, 18%, 62%)
                      </p>
                    </div>
                  </div>
                </div>

                {/* 5-Swatch Interactive Strip */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Coordinated Brand Ramp (Click to Copy)
                    </span>
                    {copiedHex && (
                      <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Copied {copiedHex}!
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {[
                      { hex: '#B2AC88', name: 'Sage' },
                      { hex: '#E2725B', name: 'Terracotta' },
                      { hex: '#FFFDD0', name: 'Cream' },
                      { hex: '#DCAE96', name: 'Dusty Rose' },
                      { hex: '#36454F', name: 'Charcoal' },
                    ].map((swatch) => (
                      <button
                        key={swatch.hex}
                        type="button"
                        onClick={(e) => handleCopyHex(e, swatch.hex)}
                        className="group text-center focus:outline-none"
                        title={`Copy ${swatch.hex}`}
                      >
                        <div
                          className="h-14 rounded-lg border border-black/10 dark:border-white/10 shadow-sm group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <p className="text-[10px] font-mono font-semibold text-gray-700 dark:text-gray-300 mt-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                          {swatch.hex}
                        </p>
                        <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">{swatch.name}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* WCAG Contrast Audit Mini Bar */}
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-3 bg-gray-900 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold">WCAG 2.1 Contrast Check</p>
                    <p className="text-[11px] text-gray-300 font-mono">#36454F on #FFFDD0</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 px-2.5 py-1 text-xs font-bold">
                    ✓ AAA 8.9:1
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Complete 6-Tool Suite Section */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-800/40 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
              Interactive Web Apps — 100% Free
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Color Design &amp; Accessibility Suite
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
              Every tool runs directly in your browser with instant hex, RGB, and HSL conversion—no account or signup required.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {homeToolCards.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden group"
              >
                {/* Top Swatch Bar with Hex Overlay */}
                <div className="h-16 flex relative">
                  {tool.swatches.map((hex) => (
                    <div
                      key={hex}
                      className="flex-1 flex items-end justify-center pb-1.5 transition-all duration-300 group-hover:flex-[1.15]"
                      style={{ backgroundColor: hex }}
                    >
                      <span className="text-[9px] font-mono font-bold px-1 py-0.5 rounded bg-black/45 text-white backdrop-blur-xs opacity-90">
                        {hex}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      {tool.category}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/50">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2.5">
                    {tool.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                    {tool.description}
                  </p>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <span className="text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform">
                      {tool.cta}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">Free Tool</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Popular Color Palettes Section (With Visible Copyable Hex Codes!) */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
                  Copy-Ready Hex Palettes
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Popular Color Palettes &amp; Hex Schemes
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-2xl">
                  Click any hex badge below to copy the color code immediately, or open the full guide for 10+ shades, RGB values, and Canva instructions.
                </p>
              </div>
              {copiedHex && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-200 text-sm font-bold self-start md:self-auto">
                  <span>✓ Copied {copiedHex} to clipboard</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredPalettes.map((palette) => (
                <div
                  key={palette.id}
                  className="flex flex-col bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 overflow-hidden group"
                >
                  {/* Color Strip */}
                  <Link href={`/blog/${palette.slug}`} className="block h-32 flex relative overflow-hidden">
                    {palette.colors.map((color, i) => (
                      <div
                        key={i}
                        className="flex-1 transition-all duration-300 group-hover:flex-[1.12]"
                        style={{ backgroundColor: color }}
                        title={`${palette.name} — ${color}`}
                      />
                    ))}
                    <span className="absolute top-2.5 right-2.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/55 text-white backdrop-blur-xs">
                      {palette.tag}
                    </span>
                  </Link>

                  {/* Card Body with Title, Description & Copyable Hex Chips */}
                  <div className="p-5 flex-1 flex flex-col">
                    <Link href={`/blog/${palette.slug}`}>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-1.5">
                        {palette.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {palette.description}
                    </p>

                    {/* Click-to-copy Hex Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {palette.colors.map((hex) => (
                        <button
                          key={hex}
                          type="button"
                          onClick={(e) => handleCopyHex(e, hex)}
                          className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono font-semibold bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 hover:bg-purple-100 dark:hover:bg-purple-900/50 hover:text-purple-700 dark:hover:text-purple-300 border border-gray-200/80 dark:border-gray-700 transition-colors"
                          title={`Click to copy ${hex}`}
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-xs border border-black/15 shrink-0"
                            style={{ backgroundColor: hex }}
                          />
                          <span>{hex}</span>
                        </button>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${palette.slug}`}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center"
                    >
                      <span>View 10 shades &amp; guide</span>
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pillar Quick-Jump Bar */}
            <div className="mt-10 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 px-5 py-5 sm:px-7">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                Direct Hex &amp; Color Reference Index
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3.5">
                Explore our most-referenced guides—then test any combination in the{' '}
                {TOOL_HUB_LINKS.map(({ href, label }, i) => (
                  <span key={href}>
                    {i > 0 ? ' or ' : ''}
                    <InlineTagLink href={href}>{label}</InlineTagLink>
                  </span>
                ))}
                .
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {PILLAR_GUIDES.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Color Guides & Articles (Full Editorial Cards with Titles, Hex Codes & Category Filter!) */}
      <section id="latest-blog-section" className="py-16 md:py-20 bg-gray-50/60 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-2">
                  Color Reference Library
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  Color Guides, App Dark Modes &amp; Mixing Tables
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Every guide includes copy-ready Hex, RGB, and HSL tables, shade ladders, and WCAG contrast notes.
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline font-bold text-sm shrink-0"
              >
                <span>View All 50+ Guides</span>
                <span className="ml-1">→</span>
              </Link>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {BLOG_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                        : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Editorial Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col bg-white dark:bg-gray-800/90 rounded-2xl border border-gray-200/90 dark:border-gray-700/80 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden group"
                >
                  {/* Top Palette Strip with Hex Labels */}
                  <Link href={`/blog/${post.slug}`} className="block h-36 flex relative overflow-hidden">
                    {post.palette.map((color, i) => (
                      <div
                        key={i}
                        className="flex-1 min-w-0 flex items-end justify-center pb-2 transition-all duration-300 group-hover:flex-[1.12]"
                        style={{ backgroundColor: color }}
                      >
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/55 text-white backdrop-blur-xs">
                          {color.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </Link>

                  {/* Card Content: Category Badge, Title, Excerpt, Swatch Chips & Read Link */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/50">
                        {post.categoryLabel}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {post.readTime}
                      </span>
                    </div>

                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug mb-2.5">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="pt-3.5 border-t border-gray-100 dark:border-gray-700/70 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {post.palette.slice(0, 5).map((hex) => (
                          <button
                            key={hex}
                            type="button"
                            onClick={(e) => handleCopyHex(e, hex)}
                            className="w-5 h-5 rounded-md border border-black/15 dark:border-white/15 hover:scale-110 transition-transform"
                            style={{ backgroundColor: hex }}
                            title={`Copy ${hex}`}
                          />
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-xs sm:text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Open Guide</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-sm hover:border-purple-500 dark:hover:border-purple-400 shadow-xs transition-all"
              >
                <span>Browse All 50+ Color Guides &amp; Hex Tables</span>
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Curated Designer Templates Banner */}
            <div className="mt-14">
              <EnvatoAffiliateBanner
                variant="general"
                title="Turn your brand palette into finished UI, logos & social kits"
                description="Download 10,000+ Figma UI kits, dark mode dashboards, Canva brand templates, and commercial fonts on Envato Elements."
                ctaText="Explore UI Kits & Brand Templates on Envato"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
