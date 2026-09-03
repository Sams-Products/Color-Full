'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STORAGE_KEY = 'tc_creative_offer_dismissed';

export default function CreativeOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('envato'); // 'envato' | 'magnific'

  useEffect(() => {
    // Check if dismissed in this session
    try {
      if (typeof window !== 'undefined' && sessionStorage.getItem(STORAGE_KEY)) {
        return;
      }
    } catch {
      // ignore storage errors
    }

    // 12-second timer trigger
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 12000);

    // Scroll trigger (if scrolled down and at least 6s on page)
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const scrollTimer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(scrollTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // ignore storage errors
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-[420px]"
          role="dialog"
          aria-labelledby="offer-modal-title"
        >
          {/* Glassmorphism Card Container */}
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 dark:border-purple-400/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl p-5 sm:p-6 shadow-2xl shadow-purple-900/15 dark:shadow-purple-950/40">
            {/* Top decorative gradient glow line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500" />

            {/* Header row with Badge & Close Button */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-950/80 dark:to-pink-950/80 text-purple-900 dark:text-purple-200 border border-purple-200/60 dark:border-purple-800/40">
                  <span aria-hidden="true">🎁</span>
                  <span>Creator Toolkit</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 dark:text-gray-500">
                  Partner
                </span>
              </div>

              <button
                type="button"
                onClick={handleDismiss}
                className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close offer popup"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Dual Tabs Switcher */}
            <div className="grid grid-cols-2 gap-1.5 p-1 rounded-xl bg-gray-100/90 dark:bg-gray-800/80 mb-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('envato')}
                className={`py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'envato'
                    ? 'bg-white dark:bg-gray-700 text-purple-900 dark:text-white shadow-sm font-bold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <span>🎨</span>
                <span>Design Assets</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('magnific')}
                className={`py-2 px-2.5 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'magnific'
                    ? 'bg-white dark:bg-gray-700 text-indigo-900 dark:text-white shadow-sm font-bold'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <span>✨</span>
                <span>AI Upscaler (20% Off)</span>
              </button>
            </div>

            {/* Tab 1: Envato Elements */}
            {activeTab === 'envato' && (
              <div>
                <h4
                  id="offer-modal-title"
                  className="text-base sm:text-lg font-extrabold text-gray-950 dark:text-white leading-snug mb-1.5"
                >
                  Bring your palette to life with 100K+ templates
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3.5">
                  Stop building from scratch. Get unlimited access to UI kits, Figma design systems, social templates, and fonts on Envato Elements.
                </p>

                {/* Feature Chips */}
                <div className="grid grid-cols-2 gap-1.5 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-purple-50/70 dark:bg-purple-950/40 px-2 py-1 rounded-md">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>10,000+ Figma Kits</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-purple-50/70 dark:bg-purple-950/40 px-2 py-1 rounded-md">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Canva &amp; Social Packs</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-purple-50/70 dark:bg-purple-950/40 px-2 py-1 rounded-md">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Commercial License</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-purple-50/70 dark:bg-purple-950/40 px-2 py-1 rounded-md">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                    <span>Unlimited Downloads</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href="https://1.envato.market/L0yyLZ"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={handleDismiss}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-500 hover:to-pink-500 shadow-md hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Explore 100,000+ Templates on Envato</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}

            {/* Tab 2: Magnific AI */}
            {activeTab === 'magnific' && (
              <div>
                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-100/90 dark:bg-amber-950/60 px-2 py-0.5 rounded-full mb-1.5">
                  <span>⚡</span>
                  <span>Exclusive 20% Discount Invite</span>
                </div>
                <h4
                  id="offer-modal-title"
                  className="text-base sm:text-lg font-extrabold text-gray-950 dark:text-white leading-snug mb-1.5"
                >
                  Upscale &amp; enhance images with Magnific AI
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3.5">
                  Transform pixelated graphics and screenshots into crystal-clear 4K/8K visuals. Used by 700K+ top designers worldwide.
                </p>

                {/* Feature Chips */}
                <div className="grid grid-cols-2 gap-1.5 mb-4">
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-2 py-1 rounded-md">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
                    <span>4K &amp; 8K Upscaling</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-2 py-1 rounded-md">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
                    <span>Fix Blur &amp; Pixelation</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-2 py-1 rounded-md">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
                    <span>AI Texture Synthesis</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-700 dark:text-gray-300 bg-indigo-50/70 dark:bg-indigo-950/40 px-2 py-1 rounded-md">
                    <span className="text-amber-600 dark:text-amber-400 font-bold">✓</span>
                    <span>20% Off Annual Plans</span>
                  </div>
                </div>

                {/* Primary CTA */}
                <a
                  href="https://referral.magnific.com/mzXrnA4"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  onClick={handleDismiss}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-md hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Claim 20% Off Magnific AI</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )}

            {/* Bottom Dismiss Option */}
            <div className="mt-3 text-center">
              <button
                type="button"
                onClick={handleDismiss}
                className="text-[11px] font-medium text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline"
              >
                Maybe later
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
