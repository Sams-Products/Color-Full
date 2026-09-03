'use client';

export const MAGNIFIC_REFERRAL_URL = 'https://referral.magnific.com/mzXrnA4';

export default function MagnificAffiliateBanner({
  title = 'Turn blurry, compressed graphics into crystal-clear 4K/8K visuals',
  description = 'Upscale design assets, restore pixelated photos, and synthesize hyper-detailed textures for your websites and client branding with Magnific AI.',
  ctaText = 'Claim 20% Off Magnific AI',
  className = '',
}) {
  return (
    <aside
      className={`my-10 not-prose relative overflow-hidden rounded-2xl border border-indigo-300/70 dark:border-indigo-500/30 bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/60 dark:from-indigo-950/30 dark:via-gray-900 dark:to-blue-950/20 p-6 sm:p-8 md:p-9 shadow-lg shadow-indigo-950/5 transition-all hover:shadow-xl hover:shadow-indigo-900/10 ${className}`}
      aria-label="Sponsored AI design tool discount"
    >
      {/* Top decorative accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left column: Value Proposition & Discount Hook */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-200 border border-amber-300/60 dark:border-amber-700/60">
              <span aria-hidden="true">✨</span>
              <span>20% Off Invite Included</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-700 dark:text-indigo-400">
              Magnific AI
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-950 dark:text-white leading-tight mb-3">
            {title}
          </h3>

          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
            {description}
          </p>

          {/* Feature list */}
          <div className="grid grid-cols-2 gap-2 mb-6 text-xs text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2 font-medium">
              <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>4K &amp; 8K AI Upscaling</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>Removes Blur &amp; Pixelation</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>Texture &amp; Detail Synthesis</span>
            </div>
            <div className="flex items-center gap-2 font-medium">
              <span className="w-4 h-4 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 flex items-center justify-center text-[10px] font-bold">✓</span>
              <span>20% Off Annual Plans</span>
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <a
              href={MAGNIFIC_REFERRAL_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md hover:shadow-lg hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{ctaText}</span>
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
              Applies to Premium &amp; Premium+ annual plans
            </span>
          </div>
        </div>

        {/* Right column: Visual Upscaler Simulation Card */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-xl border border-gray-200/80 dark:border-gray-700 bg-white/95 dark:bg-gray-800/90 p-4 sm:p-5 shadow-md">
            {/* Simulation Header */}
            <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-gray-100 dark:border-gray-700/60">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Magnific AI Engine
                </p>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                  Visual Upscale Preview
                </h4>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded-md font-bold bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                -20% Coupon
              </span>
            </div>

            {/* Split comparison preview */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="rounded-lg bg-gray-100 dark:bg-gray-900/80 p-3 text-center border border-gray-200/60 dark:border-gray-700/60">
                <span className="text-[10px] uppercase font-bold text-gray-500 block mb-1.5">Original (72 DPI)</span>
                <div className="w-full h-14 rounded bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-[10px] text-gray-500 font-mono">
                  Pixelated
                </div>
              </div>
              <div className="rounded-lg bg-indigo-50/80 dark:bg-indigo-950/60 p-3 text-center border border-indigo-200 dark:border-indigo-800/60">
                <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 block mb-1.5">Magnific 4K Ultra HD</span>
                <div className="w-full h-14 rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-[10px] text-white font-bold shadow-md">
                  Crystal Clear
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 pt-1">
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                <span>★</span>
                <span className="text-gray-700 dark:text-gray-300">4.9/5 Rating</span>
              </span>
              <span>700,000+ Creators</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
