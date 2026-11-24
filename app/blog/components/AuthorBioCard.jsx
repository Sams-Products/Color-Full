'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_AUTHOR } from '../../../lib/siteConfig';

/**
 * "About the author" box shown under every blog post (rendered from app/blog/layout.js).
 * Hidden on the /blog index itself.
 */
export default function AuthorBioCard() {
  const pathname = usePathname();
  if (!pathname || pathname === '/blog' || pathname === '/blog/') return null;

  const initials = SITE_AUTHOR.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <aside
      aria-label="About the author"
      className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12"
    >
      <div className="max-w-4xl mx-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/60 p-6 md:p-7 flex flex-col sm:flex-row gap-5">
        <div
          aria-hidden
          className="shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-pink-500 text-white font-bold text-lg flex items-center justify-center"
        >
          {initials}
        </div>
        <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1">
            About the author
          </p>
          <p className="text-base font-semibold text-gray-900 dark:text-white mb-2">
            {SITE_AUTHOR.name} · {SITE_AUTHOR.jobTitle}
          </p>
          <p className="mb-3">
            {SITE_AUTHOR.bio}
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href={`${SITE_AUTHOR.aboutPath}#editorial-standards`} className="font-semibold text-violet-700 dark:text-violet-300 hover:underline">
              How we check our colors
            </Link>
            <a
              href={SITE_AUTHOR.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="font-semibold text-violet-700 dark:text-violet-300 hover:underline"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="font-semibold text-violet-700 dark:text-violet-300 hover:underline">
              Report a wrong value
            </Link>
          </p>
        </div>
      </div>
    </aside>
  );
}
