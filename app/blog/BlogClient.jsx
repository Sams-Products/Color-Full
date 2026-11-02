'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { PILLAR_GUIDES, TOOL_HUB_LINKS } from '../../lib/site-pillar-links';
import EnvatoAffiliateBanner from '../components/EnvatoAffiliateBanner';

const DEFAULT_PALETTE = ['#8B5CF6', '#EC4899', '#F59E0B', '#10B981', '#3B82F6'];

function getPostCategory(slug = '') {
  if (slug.includes('dark-mode')) return { id: 'dark-mode', label: 'App Dark Mode' };
  if (slug.includes('what-color-does') || slug.includes('60-30-10') || slug.includes('pink-and-')) {
    return { id: 'mixing', label: 'Color Mixing & Theory' };
  }
  if (slug.includes('contrast') || slug.includes('wcag') || slug.includes('accessible')) {
    return { id: 'accessibility', label: 'WCAG Accessibility' };
  }
  return { id: 'hex', label: 'Hex & Palette Guide' };
}

const FILTER_TABS = [
  { id: 'all', label: 'All Guides' },
  { id: 'hex', label: 'Hex & Palette Guides' },
  { id: 'dark-mode', label: 'App Dark Modes' },
  { id: 'mixing', label: 'Color Mixing & Theory' },
  { id: 'accessibility', label: 'WCAG Accessibility' },
];

export default function BlogClient({ posts, cardPalettes = {} }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedHex, setCopiedHex] = useState(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const slug = post.slug?.current || '';
      const cat = getPostCategory(slug);
      const matchesTab = activeTab === 'all' || cat.id === activeTab;
      if (!matchesTab) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        (post.title || '').toLowerCase().includes(q) ||
        (post.excerpt || '').toLowerCase().includes(q) ||
        slug.toLowerCase().includes(q)
      );
    });
  }, [posts, activeTab, searchQuery]);

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-700 via-indigo-700 to-slate-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-purple-100 mb-4">
              50+ Copy-Ready Color References
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Color Design &amp; Hex Code Library
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
              Practical guides on official hex codes, app dark mode themes, RYB mixing ratios, and WCAG 2.1 accessibility standards.
            </p>

            {/* Search Input */}
            <div className="max-w-xl mx-auto relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by color name, hex code, or app (e.g., Sage, Discord, Mauve)..."
                className="w-full px-5 py-3.5 rounded-xl bg-white text-gray-900 placeholder-gray-500 text-sm sm:text-base font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar links: pass equity from /blog to guides + tools */}
      <section className="pb-0 pt-6 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-5 sm:px-6 shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Popular guides &amp; interactive tools
              </p>
              {copiedHex && (
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  ✓ Copied {copiedHex.toUpperCase()} to clipboard!
                </span>
              )}
            </div>
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
              <span className="text-gray-300 dark:text-gray-600 hidden sm:inline" aria-hidden>
                |
              </span>
              {TOOL_HUB_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-gray-700 dark:text-gray-300 font-semibold hover:text-purple-600 dark:hover:text-purple-400 hover:underline"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
              <div className="flex flex-wrap gap-2">
                {FILTER_TABS.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                          : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-purple-400'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'guide' : 'guides'}
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No matching color guides found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  Try clearing your search filter or switching categories.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('all');
                    setSearchQuery('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-purple-600 text-white text-sm font-bold hover:bg-purple-700 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filteredPosts.map((post) => {
                  const slug = post.slug.current;
                  const palette = cardPalettes[slug] || DEFAULT_PALETTE;
                  const cat = getPostCategory(slug);
                  return (
                    <article
                      key={`${post._id}-${slug}`}
                      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      {/* Card image: color palette strips + visible hex pills */}
                      <Link href={`/blog/${slug}`} className="h-40 flex relative overflow-hidden">
                        {palette.map((hex, i) => (
                          <div
                            key={i}
                            className="flex-1 min-w-0 flex items-end justify-center pb-2 transition-all duration-300 group-hover:flex-[1.12]"
                            style={{ backgroundColor: hex }}
                          >
                            <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-black/55 text-white backdrop-blur-xs">
                              {hex.toUpperCase()}
                            </span>
                          </div>
                        ))}
                      </Link>

                      {/* Post Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-700/50">
                            {cat.label}
                          </span>
                          {post.publishedAt && (
                            <time className="text-xs font-medium text-gray-500 dark:text-gray-400">
                              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric',
                              })}
                            </time>
                          )}
                        </div>

                        <Link href={`/blog/${slug}`}>
                          <h2 className="text-lg sm:text-xl font-bold mb-2.5 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors leading-snug">
                            {post.title}
                          </h2>
                        </Link>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 line-clamp-3 flex-grow leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="pt-3.5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {palette.slice(0, 5).map((hex, idx) => (
                              <button
                                key={`${slug}-${hex}-${idx}`}
                                type="button"
                                onClick={(e) => handleCopyHex(e, hex.toUpperCase())}
                                className="w-5 h-5 rounded-md border border-black/15 dark:border-white/15 hover:scale-110 transition-transform"
                                style={{ backgroundColor: hex }}
                                title={`Click to copy ${hex.toUpperCase()}`}
                              />
                            ))}
                          </div>
                          <Link
                            href={`/blog/${slug}`}
                            className="inline-flex items-center text-purple-600 dark:text-purple-400 font-bold text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform"
                          >
                            <span>Read Guide</span>
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            <div className="mt-14">
              <EnvatoAffiliateBanner
                variant="graphics"
                title="Need commercial brand kits, Figma UI systems, or Canva templates?"
                description="Download 100,000+ color-coordinated graphic templates, dark mode dashboards, and wedding/brand stationery on Envato Elements."
                ctaText="Explore Templates on Envato Elements"
              />
            </div>

            {/* Interactive Tools CTA Section (replaces non-functional newsletter box) */}
            <div className="mt-12 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Ready to Test These Hex Codes on Your Own UI?
              </h2>
              <p className="text-base sm:text-lg text-purple-100 mb-6 max-w-2xl mx-auto">
                Identify any shade, generate harmonious 5-color schemes, and verify WCAG 2.1 AA/AAA text contrast in seconds.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Link
                  href="/tools/color-name-finder"
                  className="px-6 py-3 bg-white text-purple-700 rounded-xl font-bold text-sm hover:bg-purple-50 transition-colors shadow-md"
                >
                  Open Color Name Finder
                </Link>
                <Link
                  href="/tools/palette-generator"
                  className="px-6 py-3 bg-purple-900/60 border border-white/25 text-white rounded-xl font-bold text-sm hover:bg-purple-900/80 transition-colors"
                >
                  Color Palette Generator
                </Link>
                <Link
                  href="/tools/contrast-checker"
                  className="px-6 py-3 bg-purple-900/60 border border-white/25 text-white rounded-xl font-bold text-sm hover:bg-purple-900/80 transition-colors"
                >
                  WCAG Contrast Checker
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
