import BlogClient from './BlogClient'
import { buildPageMetadata } from '../../lib/buildPageMetadata'

export const metadata = buildPageMetadata({
  path: '/blog',
  title: 'Color Design Blog',
  description:
    'Articles on color trends, WCAG accessibility, palette ideas, hex codes, and practical guides for web, UI, and brand design — from Theme & Color.',
  keywords: [
    'color blog',
    'design trends',
    'color palettes',
    'WCAG',
    'hex codes',
    'UI color',
    'Theme & Color',
  ],
})

// Card image: color palette (array of hex) per post — matches Theme & Color brand
const CARD_PALETTES = {
  '60-30-10-color-rule': ['#f5f5f5', '#1e3a8a', '#ffd700', '#b2ac88', '#0066ff'],
  '10-color-trends-for-2025': ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'],
  'color-palette-ideas-for-small-business': ['#1e3a8a', '#ffffff', '#d4af37', '#059669', '#6b7280'],
  'ocean-breeze': ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981'],
  'sunset-vibes': ['#f97316', '#ef4444', '#ec4899', '#8b5cf6'],
  'forest-green': ['#228b22', '#166534', '#15803d', '#86efac', '#dcfce7'],
  'forest-green-color-palette': ['#228b22', '#e2725b', '#fff8f0', '#b2ac88', '#065f46'],
  'forest-green-hex-code': ['#228b22', '#065f46', '#047857', '#10b981', '#34d399'],
  'forest-green-rgb': ['#228b22', '#3cb371', '#355e3b', '#006400', '#1a4d1a'],
  'mauve-color': ['#e0b0ff', '#dda0dd', '#374151', '#fff8f0', '#9966cc'],
  'olive-green-hex-code': ['#808000', '#556b2f', '#e2725b', '#000080', '#fff8f0'],
  'dusty-rose-hex-code': ['#dcae96', '#b2ac88', '#fff8f0', '#e2725b', '#36454f'],
  'charcoal-hex-code': ['#36454f', '#f8f9fa', '#818cf8', '#64748b', '#111827'],
  'burgundy-hex-code': ['#800020', '#722f37', '#ffd700', '#000080', '#fff8f0'],
  'burgundy-color-palette': ['#800020', '#ffd700', '#000080', '#fff8f0', '#e8b4b8'],
  'c4b5fd-color': ['#c4b5fd', '#7c3aed', '#ede9fe', '#111827', '#fffbec'],
  'lavender-hex-code': ['#e6e6fa', '#b57edc', '#9370db', '#734f96', '#4b0082'],
  'pink-purple-color-name': ['#ff69b4', '#ff00ff', '#e0b0ff', '#9966cc', '#374151'],
  'discord-dark-mode-colors': ['#313338', '#2b2d31', '#1e1f22', '#dbdee1', '#5865f2'],
  'spotify-dark-mode-colors': ['#121212', '#181818', '#282828', '#1db954', '#b3b3b3'],
  'notion-dark-mode-colors': ['#191919', '#202020', '#2f2f2f', '#e6e6e6', '#2383e2'],
  'instagram-dark-mode-colors': ['#000000', '#121212', '#262626', '#0095f6', '#dd2a7b'],
  'slack-dark-mode-colors': ['#1a1d21', '#22252a', '#2c2d30', '#1d9bd1', '#d1d2d3'],
  'whatsapp-dark-mode-colors': ['#111b21', '#202c33', '#2a3942', '#25d366', '#e9edef'],
  'youtube-dark-mode-colors': ['#0f0f0f', '#212121', '#272727', '#ff0000', '#aaaaaa'],
  'vscode-dark-mode-colors': ['#1e1e1e', '#252526', '#333333', '#007acc', '#d4d4d4'],
  'github-dark-mode-colors': ['#0d1117', '#161b22', '#30363d', '#2f81f7', '#e6edf3'],
  'figma-dark-mode-colors': ['#2c2c2c', '#1e1e1e', '#383838', '#0d99ff', '#9747ff'],
  'chrome-dark-mode-colors': ['#202124', '#292a2d', '#3c4043', '#8ab4f8', '#e8eaed'],
  'telegram-dark-mode-colors': ['#0e1621', '#17212b', '#182533', '#2aabee', '#2b5278'],
  'yellow-green-hex-code': ['#9acd32', '#7fff00', '#32cd32', '#000080', '#374151'],
  'dark-mode-color-palette': ['#121212', '#1e1e1e', '#3f3f46', '#f5f5f5', '#818cf8'],
  'navy-blue-color-palette': ['#000080', '#ffd700', '#ff6b6b', '#6ee7b7', '#f472b6'],
  'navy-blue-hex-code': ['#000080', '#4682b4', '#ffd700', '#ffffff', '#ff6b6b'],
  'ocean-breeze-hex-code': ['#0ea5e9', '#06b6d4', '#14b8a6', '#10b981', '#34d399'],
  'sage-green-hex-code': ['#b2ac88', '#e2725b', '#fffdd0', '#36454f', '#87a96b'],
  'terracotta-hex-code': ['#e2725b', '#b2ac88', '#fffdd0', '#000080', '#9e9e9e'],
  'purple-dream': ['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#ede9fe'],
  'how-to-check-color-contrast-accessibility': ['#111827', '#374151', '#6b7280', '#9ca3af', '#ffffff'],
  'best-neutral-colors-pair-with-brand': ['#1c1917', '#57534e', '#a8a29e', '#e7e5e4', '#fafaf9'],
  'ecommerce-color-palettes-product-first-vs-brand-first': ['#2563eb', '#0ea5e9', '#f59e0b', '#ef4444', '#111827'],
  'accessible-dark-mode-color-palette': ['#0a0a0a', '#171717', '#3f3f46', '#e4e4e7', '#818cf8'],
  'accessibility-color-contrast-checker': ['#111827', '#ffffff', '#000080', '#9ca3af', '#10b981'],
  'wcag-accessible-buttons-and-links': ['#ffffff', '#1e40af', '#1d4ed8', '#1e293b', '#0ea5e9'],
  'what-color-does-red-and-yellow-make': ['#ff0000', '#ffff00', '#ff8000', '#ffc000', '#ffd700'],
  'what-color-does-blue-and-yellow-make': ['#0000ff', '#ffff00', '#008000', '#33aa33', '#66cc00'],
  'what-color-does-red-and-white-make': ['#ff0000', '#ffffff', '#ff8080', '#ffcccc', '#ffe6e6'],
  'what-color-does-pink-and-purple-make': ['#ff69b4', '#bf34ca', '#800080', '#f06bb8', '#8c2d9a'],
  'pink-and-purple-color': ['#ff69b4', '#bf34ca', '#800080', '#ffd700', '#374151'],
  'pink-and-blue-color': ['#ff69b4', '#8034da', '#0000ff', '#b2ac88', '#fffbec'],
  'sunset-color-palette': ['#f97316', '#ef4444', '#ec4899', '#8b5cf6', '#f59e0b'],
  'terracotta-color-palette': ['#e2725b', '#b2ac88', '#fffdd0', '#000080', '#b7410e'],
};

// Static blog posts data
const staticPosts = [
  {
    _id: '1',
    title: '10 Color Trends for 2026: Modern Palettes for Web & UI Design',
    slug: { current: '10-color-trends-for-2025' },
    excerpt:
      'Discover the top 10 color trends shaping web and UI design in 2026—with copy-ready hex codes per trend.',
    publishedAt: '2025-01-15',
  },
  {
    _id: '2',
    title: 'Color Palette Ideas for Small Business: A Practical Guide',
    slug: { current: 'color-palette-ideas-for-small-business' },
    excerpt: 'Practical color palette ideas for small business: how many colors to use, industry examples, and where to apply them on your website and branding.',
    publishedAt: '2025-02-08',
  },
  {
    _id: '3',
    title: 'Ocean Breeze Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'ocean-breeze' },
    excerpt:
      'Ocean breeze hex anchors (#0EA5E9–#10B981), eight blue-teal shades, UI pairings, and links to our palette generator and contrast checker.',
    publishedAt: '2025-02-09',
  },
  {
    _id: '12',
    title: 'Forest Green Hex Code #228B22 — 10 Shades + Canva',
    slug: { current: 'forest-green-hex-code' },
    excerpt:
      'Forest green hex code #228B22 (RGB 34,139,34) plus 10 shades, dark UI greens, palette pairings & Canva steps. Copy free.',
    publishedAt: '2026-04-11',
  },
  {
    _id: '31',
    title: 'Mauve Color #E0B0FF — Hex Code Between Pink & Purple',
    slug: { current: 'mauve-color' },
    excerpt:
      'Mauve color hex code #E0B0FF · RGB(224,176,255). Copy mauve colour code, shades, pairings and why mauve sits between pink and purple.',
    publishedAt: '2026-06-11',
  },
  {
    _id: '20',
    title: 'Olive Green Hex Code: #808000 — Copy + RGB, Shades & Pairings',
    slug: { current: 'olive-green-hex-code' },
    excerpt:
      'Olive green hex code is #808000. Copy instantly. RGB(128,128,0), 10 olive shades, palette pairings with terracotta and navy. One click copy.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '29',
    title: 'Dusty Rose Hex Code: #DCAE96 — Copy + RGB, Shades & Pairings',
    slug: { current: 'dusty-rose-hex-code' },
    excerpt:
      'Dusty rose hex code is #DCAE96. Copy instantly. RGB(220,174,150), 10 dusty rose shades, palette pairings with sage, navy and cream. One click copy.',
    publishedAt: '2026-06-11',
  },
  {
    _id: '30',
    title: 'Charcoal Hex Code: #36454F — Copy + RGB, Shades & Dark Palettes',
    slug: { current: 'charcoal-hex-code' },
    excerpt:
      'Charcoal hex code is #36454F. Copy instantly. RGB(54,69,79), 10 charcoal shades, dark color palette pairings. Perfect for dark UI and professional design.',
    publishedAt: '2026-06-11',
  },
  {
    _id: '26',
    title: 'Burgundy Color Palette: Hex Codes, Shades & Combinations',
    slug: { current: 'burgundy-color-palette' },
    excerpt:
      'Burgundy color palette hex codes starting with #800020. Shades, pairings with gold, navy and cream, and UI examples for luxury and fashion brands.',
    publishedAt: '2026-05-30',
  },
  {
    _id: '27',
    title: 'Yellow Green Hex Code: #9ACD32 — Shades, RGB & Palette Pairings',
    slug: { current: 'yellow-green-hex-code' },
    excerpt:
      'Yellow green hex code is #9ACD32. Copy hex codes for yellow-green shades, see palette pairings and find out what colors go with yellow-green.',
    publishedAt: '2026-05-30',
  },
  {
    _id: '28',
    title: 'Dark Mode Color Palette: Hex Codes, Backgrounds & UI Examples',
    slug: { current: 'dark-mode-color-palette' },
    excerpt:
      'Build a dark mode color palette with hex codes for backgrounds, surfaces, text and accents. WCAG-compliant dark mode examples included.',
    publishedAt: '2026-05-30',
  },
  {
    _id: '21',
    title: 'Burgundy Hex Code #800020 — 10 Shades + Palettes',
    slug: { current: 'burgundy-hex-code' },
    excerpt:
      'Burgundy hex code #800020 (RGB 128,0,32) plus 10 wine-to-oxblood shades, gold & cream pairings, luxury palette schemes.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '13',
    title: 'Ocean Breeze Hex Codes: Color & Colour Codes (Copy-Paste)',
    slug: { current: 'ocean-breeze-hex-code' },
    excerpt:
      'Ocean Breeze color and colour codes with RGB values: #0EA5E9, #06B6D4, #14B8A6, #10B981, and #34D399. Copy-ready swatches, CSS variables, and contrast tips.',
    publishedAt: '2026-04-17',
  },
  {
    _id: '14',
    title: 'Navy Blue Hex Code: #000080 — Shades, Palettes & Copy-Paste Codes',
    slug: { current: 'navy-blue-hex-code' },
    excerpt:
      'Navy blue hex code is #000080. Copy hex codes for 10 navy shades, see palette pairings with gold, white and coral, and explore UI examples for web design.',
    publishedAt: '2026-05-10',
  },
  {
    _id: '18',
    title: 'Navy Blue Color Palette: Hex Codes, Combinations & UI Examples',
    slug: { current: 'navy-blue-color-palette' },
    excerpt:
      'Navy blue color palette hex codes and combinations. Pair navy (#000080) with gold, coral, mint, and gray—six four-color palettes plus UI and branding guidance.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '15',
    title: 'Sage Green Hex Code #B2AC88 — 10 Shades + Canva',
    slug: { current: 'sage-green-hex-code' },
    excerpt:
      'Sage green hex code #B2AC88 (RGB 178,172,136) plus 10 sage shades, dark & light sage codes, palette pairings & step-by-step Canva instructions.',
    publishedAt: '2026-05-11',
  },
  {
    _id: '16',
    title: 'Terracotta Hex Code #E2725B — 10 Shades + Canva',
    slug: { current: 'terracotta-hex-code' },
    excerpt:
      'Terracotta hex code #E2725B (RGB 226,114,91) plus 10 terracotta shades, sage pairings, palette schemes & Canva steps.',
    publishedAt: '2026-05-12',
  },
  {
    _id: '17',
    title: 'The 60-30-10 Color Rule: How to Use It for Web & Brand Design',
    slug: { current: '60-30-10-color-rule' },
    excerpt:
      'The 60-30-10 rule makes color easy: 60% dominant, 30% secondary, 10% accent. Learn how to apply it to websites and brands with real hex code examples.',
    publishedAt: '2026-05-13',
  },
  {
    _id: '6',
    title: 'Purple Dream Color Palette: Hex Codes, Shades & Pairings',
    slug: { current: 'purple-dream' },
    excerpt:
      'Purple dream hex ramp (#7C3AED–#EDE9FE), eight lavender shades, pairings for luxury and creative brands, plus tool links.',
    publishedAt: '2025-02-12',
  },
  {
    _id: '7',
    title: 'How to Check Color Contrast for Accessibility (WCAG Guide)',
    slug: { current: 'how-to-check-color-contrast-accessibility' },
    excerpt: 'Learn how to check color contrast for accessibility. WCAG AA and AAA ratios, contrast checker tools, and practical tips for readable, compliant text and UI.',
    publishedAt: '2025-03-13',
  },
  {
    _id: '8',
    title: 'Best Neutral Colors to Pair With Your Brand Color',
    slug: { current: 'best-neutral-colors-pair-with-brand' },
    excerpt: 'Neutral colors for branding: grays, off-whites, and warm vs cool neutrals that pair with blue, green, and any brand color. Plus contrast-safe text and background combos.',
    publishedAt: '2025-03-15',
  },
  {
    _id: '9',
    title: 'E-commerce Color Palettes: Product-First vs Brand-First Approaches',
    slug: { current: 'ecommerce-color-palettes-product-first-vs-brand-first' },
    excerpt: 'Learn ecommerce color palette strategies: product-first vs brand-first store colors, with hex examples and WCAG-safe testing using our palette generator and contrast checker.',
    publishedAt: '2025-03-19',
  },
  {
    _id: '25',
    title: 'Accessibility Color Contrast Checker — Free WCAG & ADA Tool',
    slug: { current: 'accessibility-color-contrast-checker' },
    excerpt:
      'Instantly check if your colors meet WCAG AA, AAA and ADA accessibility standards. Free tool — no signup. Used by designers and developers worldwide.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '10',
    title: 'How to Build an Accessible Dark Mode Color Palette (With Hex Examples)',
    slug: { current: 'accessible-dark-mode-color-palette' },
    excerpt:
      'Define canvas, surface, text, and accent roles for dark UI. Three WCAG-oriented palette examples with hex codes, plus how to test with a contrast checker and palette generator.',
    publishedAt: '2026-04-01',
  },
  {
    _id: '11',
    title: 'WCAG Contrast for Buttons and Links: Hex Examples for Web UI',
    slug: { current: 'wcag-accessible-buttons-and-links' },
    excerpt:
      'Pick link and button colors that pass WCAG AA: filled CTAs, outline buttons, dark bands, focus rings—with hex swatches next to each tip and our contrast checker to verify.',
    publishedAt: '2026-04-02',
  },
  {
    _id: '22',
    title: 'What Color Does Red and Yellow Make? Orange — Hex Codes & Mixing Guide',
    slug: { current: 'what-color-does-red-and-yellow-make' },
    excerpt:
      'Red and yellow make orange when mixed. See exact hex codes for every red-yellow mix ratio, explore orange shades, and try our free color mixer tool.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '23',
    title: 'What Color Does Blue and Yellow Make? Green — Hex Codes & Mixing Guide',
    slug: { current: 'what-color-does-blue-and-yellow-make' },
    excerpt:
      'Blue and yellow make green when mixed. See exact hex codes for every blue-yellow ratio, explore green shades, and try our free color mixer.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '24',
    title: 'What Color Does Red and White Make? Pink — Hex Codes & Shades',
    slug: { current: 'what-color-does-red-and-white-make' },
    excerpt:
      'Red and white make pink when mixed. See exact hex codes for every red-white ratio, explore pink shades, and try our free color mixer tool.',
    publishedAt: '2026-05-21',
  },
  {
    _id: '27',
    title: 'Pink and Blue Color: What They Make, Palettes & Hex Codes',
    slug: { current: 'pink-and-blue-color' },
    excerpt:
      'Pink and blue mixed make lavender or light purple. See hex codes, palette combinations and design tips for using pink and blue together.',
    publishedAt: '2026-06-01',
  },
  {
    _id: '28',
    title: 'Sunset Color Palette: Hex Codes, RGB Values & Design Examples',
    slug: { current: 'sunset-color-palette' },
    excerpt:
      'Sunset color palette hex codes: orange #F97316, pink #EC4899, purple #8B5CF6, red #EF4444. Copy RGB values and see UI examples for warm creative brands.',
    publishedAt: '2026-06-01',
  },
  {
    _id: '29',
    title: 'Terracotta Color Palette: Hex Codes, Shades & Combinations',
    slug: { current: 'terracotta-color-palette' },
    excerpt:
      'Terracotta color palette hex codes starting with #E2725B. See shades, combinations with sage, navy and cream, and branding examples for earthy warm design.',
    publishedAt: '2026-06-01',
  },
  {
    _id: '30',
    title: '#C4B5FD Color Name — Soft Lavender (Copy Hex + RGB)',
    slug: { current: 'c4b5fd-color' },
    excerpt:
      '#C4B5FD is soft lavender purple (Tailwind purple-300). RGB(196,181,253). Copy hex, RGB, similar shades & palette pairings.',
    publishedAt: '2026-06-01',
  },
  {
    _id: '31',
    title: 'Lavender Hex Code: #E6E6FA — Shades, RGB & Palette Pairings',
    slug: { current: 'lavender-hex-code' },
    excerpt:
      'Lavender hex code is #E6E6FA. Copy instantly. Get RGB values, 10 lavender shades from pale to deep purple, and palette pairings for soft elegant design.',
    publishedAt: '2026-06-05',
  },
  {
    _id: '32',
    title: 'Pink Purple Color Name — Mauve #E0B0FF + Magenta',
    slug: { current: 'pink-purple-color-name' },
    excerpt:
      'What color is between pink and purple? Mauve #E0B0FF, magenta #FF00FF, fuchsia #FF77FF. Copy every pink-purple hex name instantly.',
    publishedAt: '2026-06-05',
  },
  {
    _id: '33',
    title: 'Discord Dark Mode Color Palette: Hex Codes & Background Colors',
    slug: { current: 'discord-dark-mode-colors' },
    excerpt:
      'Discord dark mode hex codes: background #313338, dark #2B2D31, darker #1E1F22, darkest #111214. Copy all Discord dark theme colors instantly.',
    publishedAt: '2026-06-05',
  },
  {
    _id: '40',
    title: 'Spotify Dark Mode Colors: Every Hex Code (#121212 & Green)',
    slug: { current: 'spotify-dark-mode-colors' },
    excerpt:
      'Spotify dark mode hex codes: background #121212, cards #181818, elevated #282828, green #1DB954, text #FFFFFF. Copy every Spotify UI color instantly.',
    publishedAt: '2026-07-02',
  },
  {
    _id: '41',
    title: 'Notion Dark Mode Colors: Every Hex Code (#191919 & Blue)',
    slug: { current: 'notion-dark-mode-colors' },
    excerpt:
      'Notion dark mode hex codes: background #191919, sidebar #202020, hover #2F2F2F, text #E6E6E6, blue #2383E2. Copy every Notion dark theme color.',
    publishedAt: '2026-07-02',
  },
  {
    _id: '42',
    title: 'Instagram Dark Mode Colors: Every Hex Code (#000000 & Gradient)',
    slug: { current: 'instagram-dark-mode-colors' },
    excerpt:
      'Instagram dark mode hex codes: background #000000, surface #121212, blue #0095F6, plus the story-ring gradient. Copy every Instagram color instantly.',
    publishedAt: '2026-07-02',
  },
  {
    _id: '43',
    title: 'Slack Dark Mode Colors: Every Hex Code (#1A1D21 & Blue)',
    slug: { current: 'slack-dark-mode-colors' },
    excerpt:
      'Slack dark mode hex codes: background #1A1D21, sidebar #22252A, hover #2C2D30, blue #1D9BD1. Copy every Slack dark theme color instantly.',
    publishedAt: '2026-07-09',
  },
  {
    _id: '44',
    title: 'WhatsApp Dark Mode Colors: Every Hex Code (#111B21 & Green)',
    slug: { current: 'whatsapp-dark-mode-colors' },
    excerpt:
      'WhatsApp dark mode hex codes: background #111B21, panel #202C33, green #25D366, text #E9EDEF. Copy every WhatsApp UI color instantly.',
    publishedAt: '2026-07-09',
  },
  {
    _id: '45',
    title: 'YouTube Dark Mode Colors: Every Hex Code (#0F0F0F & Red)',
    slug: { current: 'youtube-dark-mode-colors' },
    excerpt:
      'YouTube dark mode hex codes: background #0F0F0F, elevated #212121, text #FFFFFF, red #FF0000. Copy every YouTube dark theme color.',
    publishedAt: '2026-07-16',
  },
  {
    _id: '46',
    title: 'VS Code Dark Mode Colors: Every Hex Code (#1E1E1E & Blue)',
    slug: { current: 'vscode-dark-mode-colors' },
    excerpt:
      'VS Code dark mode hex codes: editor #1E1E1E, sidebar #252526, activity bar #333333, blue #007ACC. Copy every Dark+ color.',
    publishedAt: '2026-07-16',
  },
  {
    _id: '47',
    title: 'GitHub Dark Mode Colors: Every Hex Code (#0D1117 & Blue)',
    slug: { current: 'github-dark-mode-colors' },
    excerpt:
      'GitHub dark mode hex codes: background #0D1117, canvas #161B22, border #30363D, accent #2F81F7. Copy every GitHub dark theme color.',
    publishedAt: '2026-07-23',
  },
  {
    _id: '48',
    title: 'Figma Dark Mode Colors: Every Hex Code (#2C2C2C & Blue)',
    slug: { current: 'figma-dark-mode-colors' },
    excerpt:
      'Figma dark mode hex codes: toolbar #2C2C2C, panels #1E1E1E, blue #0D99FF, component purple #9747FF. Copy every Figma UI color.',
    publishedAt: '2026-07-23',
  },
  {
    _id: '49',
    title: 'Chrome Dark Mode Colors: Every Hex Code (#202124 & Blue)',
    slug: { current: 'chrome-dark-mode-colors' },
    excerpt:
      'Chrome dark mode hex codes: background #202124, toolbar #292A2D, text #E8EAED, blue #8AB4F8. Copy every Chrome dark theme color.',
    publishedAt: '2026-07-30',
  },
  {
    _id: '50',
    title: 'Telegram Dark Mode Colors: Every Hex Code (#0E1621 & Blue)',
    slug: { current: 'telegram-dark-mode-colors' },
    excerpt:
      'Telegram dark mode hex codes: background #0E1621, bubbles #182533, accent #2AABEE. Copy every Telegram dark theme color.',
    publishedAt: '2026-07-30',
  },
];

export { CARD_PALETTES };

export default function BlogPage() {
  return (
    <BlogClient
      posts={staticPosts}
      cardPalettes={CARD_PALETTES}
    />
  )
}
