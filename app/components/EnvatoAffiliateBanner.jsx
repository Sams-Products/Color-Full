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
    badge: 'Design Resources',
    title: 'Ready to design with this palette?',
    description:
      'Download 100,000+ customizable graphic templates, social media kits, fonts, and mockups ready for commercial use.',
    cta: 'Explore Design Templates on Envato',
    href: ENVATO_LINKS.graphics,
    icon: '🎨',
  },
  uiKits: {
    badge: 'UI & UX Kits',
    title: 'Building a modern interface?',
    description:
      'Speed up your workflow with 10,000+ dark mode Figma kits, mobile app designs, icon systems, and web templates.',
    cta: 'Browse Figma & UI Kits on Envato',
    href: ENVATO_LINKS.uiKits,
    icon: '⚡',
  },
  general: {
    badge: 'Creative Toolkit',
    title: 'Turn your colors into complete designs',
    description:
      'Get unlimited downloads of fonts, mockups, stock assets, and AI design tools with an Envato Elements subscription.',
    cta: 'Explore Unlimited Creative Assets',
    href: ENVATO_LINKS.general,
    icon: '✨',
  },
};

export default function EnvatoAffiliateBanner({
  variant = 'general',
  title,
  description,
  ctaText,
  className = '',
}) {
  const config = VARIANTS[variant] || VARIANTS.general;
  const finalTitle = title || config.title;
  const finalDesc = description || config.description;
  const finalCta = ctaText || config.cta;

  return (
    <aside
      className={`my-8 not-prose rounded-2xl border border-purple-200/70 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/60 via-white to-pink-50/40 dark:from-purple-950/20 dark:via-gray-900 dark:to-pink-950/10 p-6 md:p-8 shadow-sm transition-all hover:shadow-md ${className}`}
      aria-label="Sponsored design resources"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xl" aria-hidden="true">{config.icon}</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-900/60 text-purple-800 dark:text-purple-300">
              {config.badge}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">
              Partner
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
            {finalTitle}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {finalDesc}
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={config.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-lg hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{finalCta}</span>
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-2 text-center md:text-right">
            Commercial license • Unlimited downloads
          </p>
        </div>
      </div>
    </aside>
  );
}
