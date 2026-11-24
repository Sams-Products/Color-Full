import { buildPageMetadata } from '../../lib/buildPageMetadata';
import { SITE_AUTHOR } from '../../lib/siteConfig';

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_AUTHOR.name,
  jobTitle: SITE_AUTHOR.jobTitle,
  url: `https://themeandcolor.com${SITE_AUTHOR.aboutPath}`,
  sameAs: [SITE_AUTHOR.linkedin],
  worksFor: { '@type': 'Organization', name: 'Theme & Color', url: 'https://themeandcolor.com' },
};

export const metadata = buildPageMetadata({
  path: '/about',
  title: 'About Us',
  description:
    'Learn about Theme & Color, our mission to help designers create perfect color schemes, and our commitment to providing free, accessible color tools.',
  keywords: ['about Theme & Color', 'color tools', 'design mission', 'accessibility', 'color schemes'],
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Us
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              At Theme & Color, we believe that great design starts with great colors. Our mission is to empower designers, 
              developers, and creators with powerful, accessible tools that make color selection and palette creation 
              effortless and enjoyable.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We understand that choosing the right colors can make or break a design project. That&apos;s why we&apos;ve created 
              a comprehensive suite of color tools that help you make informed decisions, ensure accessibility compliance, 
              and create harmonious color schemes that resonate with your audience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Color Palette Generator:</strong> Create harmonious color palettes based on classical color theory principles (monochromatic, analogous, complementary, triadic, and tetradic).</li>
              <li><strong>Accessibility Contrast Checker:</strong> Verify WCAG 2.1 AA and AAA compliance using real-time relative luminance formulas to guarantee accessible web experiences.</li>
              <li><strong>Color Name Finder &amp; Converter:</strong> Convert between Hex, RGB, HSL, and CMYK formats while matching exact CSS color keywords and standardized color names.</li>
              <li><strong>Color Mixing Simulator:</strong> Predict authentic pigment-based RYB paint blending for physical and digital design projects.</li>
              <li><strong>Tint &amp; Shade Generator:</strong> Instantly generate 10 tints and 10 shades with one-click export to Tailwind CSS config and CSS Custom Properties.</li>
              <li><strong>In-Depth Design Research &amp; Guides:</strong> Expert articles documenting brand color systems, UI dark mode implementations, and modern aesthetic palettes.</li>
            </ul>
          </section>

          <section id="editorial-standards" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Editorial Standards &amp; Accuracy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Every guide and tool on Theme &amp; Color is written and checked by the person named below. This is how we keep the numbers right:
            </p>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">WCAG 2.1 Compliance Math</h3>
                <p>
                  Our contrast evaluation algorithms strictly implement the official W3C Web Content Accessibility Guidelines (WCAG 2.1). Ratios are calculated using standardized relative luminance formulas (<code className="text-base">L = 0.2126R + 0.7152G + 0.0722B</code>) after sRGB gamma expansion, so the pass/fail ratings for AA and AAA match what the W3C formula gives.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Empirical Design Research</h3>
                <p>
                  Our app color breakdowns (for example Discord, Instagram, WhatsApp and YouTube dark mode) are taken from the apps&apos; own stylesheets, design tokens and published design system specifications. Apps update their themes, so a value can drift over time; when we re-check a post we change its &ldquo;Updated&rdquo; date.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Updates and corrections</h3>
                <p>
                  A post&apos;s &ldquo;Updated&rdquo; date only changes when its content changes, not for layout or styling tweaks. If you find a hex code, contrast ratio or app color that is wrong or out of date, email us from the{' '}
                  <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">contact page</a> and we will check it and fix the post.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Advertising and independence</h3>
                <p>
                  The site is free to use and may show ads from Google AdSense to cover hosting. Advertisers do not choose topics, review articles or influence which tools and colors we recommend.
                </p>
              </div>
            </div>
          </section>

          <section id="author" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who Builds Theme &amp; Color</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Theme &amp; Color is built and maintained by <strong>{SITE_AUTHOR.name}</strong>, a software engineer. He started it after
              running into the same daily friction many designers and developers know: hunting down accessible color combinations and
              converting color codes between tools. Theme &amp; Color is his answer: one fast, free set of color utilities and
              reference guides in a single place.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can find him on{' '}
              <a href={SITE_AUTHOR.linkedin} target="_blank" rel="me noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">
                LinkedIn
              </a>
              .
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Whether you are an engineer building design tokens in Tailwind, a digital artist calibrating color swatches, or a brand strategist designing accessible identity systems, our tools are built to make your creative workflow seamless.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Have questions, technical suggestions, or feedback about our algorithms? We welcome community input! Reach out directly via our{' '}
              <a href="/contact" className="text-purple-600 dark:text-purple-400 hover:underline">Contact Us</a> page 
              or email <a href="mailto:sams02092000@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">sams02092000@gmail.com</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}


