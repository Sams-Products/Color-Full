'use client';

/**
 * Verified Envato Affiliate Tracking Links
 */
export const ENVATO_LINKS = {
  general: 'https://1.envato.market/vD99ke',        // Unlimited Creative Assets & AI Tools
  uiKits: 'https://1.envato.market/YVvvAR',         // UI/UX Kits (Figma, Sketch, XD, App Templates)
  graphics: 'https://1.envato.market/L0yyLZ',       // Graphic Design Templates (Logos, Social, Branding)
};

const VARIANTS = {
  graphics: {
    tag: 'Graphic Templates & Mockups',
    title: 'Bring your palette to life with 100,000+ templates',
    description:
      'Skip building from scratch. Download professional logo packs, social media kits, typography, and brand mockups matching your chosen colors.',
    cta: 'Explore Graphic Templates on Envato',
    href: ENVATO_LINKS.graphics,
    previewTitle: 'Brand & Social Pack',
    previewCategory: 'Graphic Templates',
    previewSwatches: ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981'],
    previewTag: 'Canva & AI Ready',
  },
  uiKits: {
    tag: 'Figma UI Kits & Design Systems',
    title: 'Building a modern interface or dark mode app?',
    description:
      'Speed up development with 10,000+ Figma UI kits, dark mode design systems, mobile app components, and responsive landing pages.',
    cta: 'Browse Figma & UI Kits on Envato',
    href: ENVATO_LINKS.uiKits,
    previewTitle: 'Dark Mode UI System',
    previewCategory: 'Mobile & Web Kits',
    previewSwatches: ['#1E1F22', '#2B2D31', '#5865F2', '#DBDEE1'],
    previewTag: 'Figma (.fig) + React',
  },
  general: {
    tag: 'Unlimited Creative Assets',
    title: 'Turn your colors into complete commercial designs',
    description:
      'Get unlimited downloads of 10M+ design assets—including fonts, 3D mockups, web themes, and AI creative tools—on Envato Elements.',
    cta: 'Get Unlimited Creative Assets',
    href: ENVATO_LINKS.general,
    previewTitle: 'Creative Designer Suite',
    previewCategory: 'Fonts, UI & Stock',
    previewSwatches: ['#6366F1', '#EC4899', '#06B6D4', '#F43F5E'],
    previewTag: 'Unlimited Access',
  },
};

export default function EnvatoAffiliateBanner({
  variant = 'graphics',
  title,
  description,
  ctaText,
  className = '',
}) {
  const config = VARIANTS[variant] || VARIANTS.graphics;
  const finalTitle = title || config.title;
  const finalDesc = description || config.description;
  const finalCta = ctaText || config.cta;

  return (
    <aside
      className={`my-10 not-prose relative overflow-hidden rounded-2xl border border-purple-300/60 dark:border-purple-500/30 bg-gradient-to-br from-purple-50/80 via-white to-pink-50/60 dark:from-purple-950/30 dark:via-gray-900 dark:to-pink-950/20 p-6 sm:p-8 md:p-9 shadow-lg shadow-purple-950/5 transition-all hover:shadow-xl hover:shadow-purple-900/10 ${className}`}
      aria-label="Sponsored design assets showcase"
    >
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Value Proposition & Copy */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/60 text-purple-950 dark:text-purple-200 border border-purple-300 dark:border-purple-700/50">
              <span aria-hidden="true">🎨</span>
              <span className="text-purple-950 dark:text-purple-200 font-bold">{config.tag}</span>
            </span>
            <span className="text-[11px] uppercase font-extrabold tracking-widest text-gray-600 dark:text-gray-400">
              Partner
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-white leading-tight mb-3">
            {finalTitle}
          </h3>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            {finalDesc}
          </p>

          {/* Value feature chips */}
          <div className="grid grid-cols-2 gap-2.5 mb-6 text-xs text-gray-900 dark:text-gray-200">
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-extrabold">✓</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Commercial License Included</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-extrabold">✓</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Unlimited Downloads</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-extrabold">✓</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">Figma &amp; Canva Compatible</span>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] font-extrabold">✓</span>
              <span className="text-gray-900 dark:text-gray-100 font-semibold">10,000+ Premium Fonts</span>
            </div>
          </div>

          {/* Call to Action button */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={config.href}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{finalCta}</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Starts with simple subscription • Cancel anytime
            </span>
          </div>
        </div>

        {/* Right column: Visual Asset Mockup Card Showcase */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-xl border border-gray-200/80 dark:border-gray-700 bg-white/95 dark:bg-gray-800/90 p-4 sm:p-5 shadow-md">
            {/* Visual asset header */}
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700/60">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  {config.previewCategory}
                </p>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  {config.previewTitle}
                </h4>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {config.previewTag}
              </span>
            </div>

            {/* Visual preview color palette & layout mock */}
            <div className="rounded-lg bg-gray-50 dark:bg-gray-900/60 p-3 mb-3 border border-gray-100 dark:border-gray-700/40">
              <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                Sample Coordinated Palette
              </p>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {config.previewSwatches.map((hex, i) => (
                  <div key={i} className="text-center">
                    <div
                      className="w-full h-8 rounded-md shadow-inner border border-black/10"
                      style={{ backgroundColor: hex }}
                      aria-label={`Color swatch ${hex}`}
                    />
                    <span className="text-[10px] font-mono text-gray-600 dark:text-gray-400 mt-1 block">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>

              {/* Wireframe design preview lines */}
              <div className="space-y-1.5 pt-1 border-t border-gray-200/60 dark:border-gray-700/60">
                <div className="h-2 w-3/4 rounded bg-purple-200 dark:bg-purple-900/40" />
                <div className="h-2 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>

            {/* Social proof & stats */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-1">
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                <span>★</span>
                <span className="text-gray-700 dark:text-gray-300">4.9/5 Rating</span>
              </span>
              <span>10M+ Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
