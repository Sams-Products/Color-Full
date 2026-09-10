import { buildPageMetadata } from '../../lib/buildPageMetadata';

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
              We understand that choosing the right colors can make or break a design project. That's why we've created 
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

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Editorial Standards &amp; Accuracy</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              All content, guides, and tools published on Theme &amp; Color adhere to strict accuracy and technical standards:
            </p>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">WCAG 2.1 Compliance Math</h3>
                <p>
                  Our contrast evaluation algorithms strictly implement the official W3C Web Content Accessibility Guidelines (WCAG 2.1). Ratios are calculated using standardized relative luminance formulas (\(L = 0.2126R + 0.7152G + 0.0722B\)) after sRGB gamma expansion, ensuring 100% reliable pass/fail ratings for AA and AAA compliance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Empirical Design Research</h3>
                <p>
                  Our color system breakdowns (e.g., Discord Dark Mode, Instagram Dark Mode, VS Code color themes) are empirically extracted directly from verified application style sheets, design tokens, and official design system specifications.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who We Are</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Theme &amp; Color is founded and maintained by an independent group of frontend engineers, UI/UX designers, and accessibility advocates. Having experienced the daily friction of hunting down accessible color combinations and cross-format color codes across different software suites, we built Theme &amp; Color as a unified, fast, and completely free web utility for the global creative community.
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
              or email our engineering team at <a href="mailto:sams02092000@gmail.com" className="text-purple-600 dark:text-purple-400 hover:underline">sams02092000@gmail.com</a>.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}


