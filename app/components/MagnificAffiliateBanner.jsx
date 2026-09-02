'use client';

export const MAGNIFIC_REFERRAL_URL = 'https://referral.magnific.com/mzXrnA4';

export default function MagnificAffiliateBanner({
  title = 'Need high-resolution visuals or AI image enhancement?',
  description = 'Upscale design assets, remove compression artifacts, and generate crystal-clear 4K/8K graphics for your website, branding, and mockups with Magnific AI.',
  ctaText = 'Claim 20% Off Magnific AI',
  className = '',
}) {
  return (
    <aside
      className={`my-8 not-prose rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/50 dark:from-indigo-950/25 dark:via-gray-900 dark:to-blue-950/15 p-6 md:p-8 shadow-sm transition-all hover:shadow-md ${className}`}
      aria-label="Sponsored AI design tool discount"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xl" aria-hidden="true">✨</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 border border-amber-300/40">
              20% Off Invite
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300">
              Magnific AI
            </span>
            <span className="text-[11px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">
              Partner
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white leading-snug mb-2">
            {title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={MAGNIFIC_REFERRAL_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{ctaText}</span>
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
            20% discount on Premium &amp; Premium+ annual plans
          </p>
        </div>
      </div>
    </aside>
  );
}
