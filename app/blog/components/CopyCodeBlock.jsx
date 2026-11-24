'use client';

import { useState } from 'react';

/** Code block with a copy button. `code` is plain text. */
export default function CopyCodeBlock({ code, label }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="rounded-lg bg-gray-900 text-gray-100 overflow-hidden">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-300">{label}</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-white/20 px-2.5 py-1 text-xs font-semibold text-gray-100 hover:bg-white/10 transition-colors"
          aria-label={copied ? 'Copied' : `Copy ${label}`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
