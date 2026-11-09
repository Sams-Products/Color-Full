import Link from 'next/link';
import { SITE_AUTHOR } from '../../../lib/siteConfig';

/**
 * Author credit for blog posts.
 * - variant "inline" (default): drops into a post's date / read-time row, followed by a separator dot.
 * - variant "block": a standalone line under the H1 for posts without a date row.
 */
export default function AuthorByline({ variant = 'inline', className = '' }) {
  const link = (
    <Link href={SITE_AUTHOR.aboutPath} rel="author" className="font-semibold underline-offset-2 hover:underline">
      {SITE_AUTHOR.name}
    </Link>
  );

  if (variant === 'block') {
    return (
      <p className={`text-sm mb-4 ${className}`}>
        By {link} · {SITE_AUTHOR.jobTitle}
      </p>
    );
  }

  return (
    <>
      <span>By {link}</span>
      <span aria-hidden>•</span>
    </>
  );
}
