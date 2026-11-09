/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove X-Powered-By header (minor security/SEO tidiness)
  poweredByHeader: false,
  // Ensure good compression and caching for Core Web Vitals
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/tools/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/blog/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/tools/color-mixer/',
        destination: '/tools/color-mixer',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/white-and-black',
        destination: '/tools/color-mixer/black-and-white',
        permanent: true,
      },
      // Consolidate cannibalizing color-mixer combo routes → authoritative blog mix guides
      {
        source: '/tools/color-mixer/blue-and-yellow',
        destination: '/blog/what-color-does-blue-and-yellow-make',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/yellow-and-blue',
        destination: '/blog/what-color-does-blue-and-yellow-make',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/red-and-yellow',
        destination: '/blog/what-color-does-red-and-yellow-make',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/yellow-and-red',
        destination: '/blog/what-color-does-red-and-yellow-make',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/red-and-white',
        destination: '/blog/what-color-does-red-and-white-make',
        permanent: true,
      },
      {
        source: '/tools/color-mixer/pink-and-purple',
        destination: '/blog/what-color-does-pink-and-purple-make',
        permanent: true,
      },
      // Consolidate forest green cluster → single canonical hex page
      {
        source: '/blog/forest-green',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/forest-green-color-palette',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/forest-green-rgb',
        destination: '/blog/forest-green-hex-code',
        permanent: true,
      },
      // Consolidate pink/purple duplicates
      {
        source: '/blog/pink-and-purple-color',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/what-color-is-between-pink-and-purple',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/what-color-is-between-pink-purple-color-name',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/what-color-does-pink-end-purple-make-magenta-hex-codes',
        destination: '/blog/what-color-does-pink-and-purple-make',
        permanent: true,
      },
      {
        source: '/blog/sage-green-color-code',
        destination: '/blog/sage-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/sage-green-health',
        destination: '/blog/sage-green-hex-code',
        permanent: true,
      },
      {
        source: '/blog/sunset-vibes',
        destination: '/blog/sunset-color-palette',
        permanent: true,
      },
      {
        source: '/blog/ocean-breeze',
        destination: '/blog/ocean-breeze-hex-code',
        permanent: true,
      },
      {
        source: '/blog/pink-and-blue-color',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      // Nov 2026: 12 short per-app dark mode posts merged into one comparison guide (section anchors per app)
      {
        source: '/blog/slack-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#slack',
        permanent: true,
      },
      {
        source: '/blog/ios-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#ios',
        permanent: true,
      },
      {
        source: '/blog/telegram-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#telegram',
        permanent: true,
      },
      {
        source: '/blog/spotify-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#spotify',
        permanent: true,
      },
      {
        source: '/blog/chrome-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#chrome',
        permanent: true,
      },
      {
        source: '/blog/notion-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#notion',
        permanent: true,
      },
      {
        source: '/blog/twitter-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#twitter',
        permanent: true,
      },
      {
        source: '/blog/github-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#github',
        permanent: true,
      },
      {
        source: '/blog/reddit-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#reddit',
        permanent: true,
      },
      {
        source: '/blog/vscode-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#vscode',
        permanent: true,
      },
      {
        source: '/blog/linkedin-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#linkedin',
        permanent: true,
      },
      {
        source: '/blog/figma-dark-mode-colors',
        destination: '/blog/app-dark-mode-colors#figma',
        permanent: true,
      },
      // Nov 2026: hex-code / color-palette twins merged into the hex-code page
      {
        source: '/blog/burgundy-color-palette',
        destination: '/blog/burgundy-hex-code',
        permanent: true,
      },
      {
        source: '/blog/navy-blue-color-palette',
        destination: '/blog/navy-blue-hex-code',
        permanent: true,
      },
      {
        source: '/blog/terracotta-color-palette',
        destination: '/blog/terracotta-hex-code',
        permanent: true,
      },
      // Nov 2026: small lavender/mauve posts folded into the pink-purple color names guide
      {
        source: '/blog/mauve-color',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/lavender-hex-code',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      {
        source: '/blog/c4b5fd-color',
        destination: '/blog/pink-purple-color-name',
        permanent: true,
      },
      // Nov 2026: duplicate mixer combo (same colors, reversed order)
      {
        source: '/tools/color-mixer/green-and-yellow',
        destination: '/tools/color-mixer/yellow-and-green',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
