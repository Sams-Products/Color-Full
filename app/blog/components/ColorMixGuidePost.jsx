import Link from 'next/link';
import InlineTagLink from '../../components/InlineTagLink';
import BlogArticleSchema from './BlogArticleSchema';
import BlogBreadcrumbs from './BlogBreadcrumbs';
import { PalettePairingsSection, PaletteUiUsageSection } from './PaletteReferenceBlocks';
import AuthorByline from './AuthorByline';
import ComputedMixTable from './ComputedMixTable';
import ColorMixer from '../../tools/color-mixer/components/ColorMixer';
import { textContrastOn } from '../../../lib/textContrast';

function BlogMixerCTA({ mixerHref, mixerLabel }) {
  return (
    <section className="my-12 not-prose">
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 md:p-7">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Try it with our free tools</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-5">
          Simulate mixes in the browser, then build a full palette for your project.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href={mixerHref}
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-orange-400 hover:bg-white hover:text-orange-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-orange-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            {mixerLabel}
          </Link>
          <Link
            href="/tools/palette-generator"
            className="block rounded-lg border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:border-blue-400 hover:bg-white hover:text-blue-800 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:border-blue-400 dark:hover:bg-zinc-700 dark:hover:text-white transition-colors"
          >
            Color Palette Generator
          </Link>
        </div>
      </div>
    </section>
  );
}

const H2 = 'text-2xl font-bold text-gray-900 dark:text-white mb-4';
const BODY = 'space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed';

/**
 * How many of the mixes can carry black or white text at WCAG AA (4.5:1), worked out from the
 * same rows the table shows.
 */
export function MixContrastSummary({ rows }) {
  const scores = rows.map((row) => textContrastOn(row.hex));
  const blackPass = scores.filter((s) => s.black.ratio >= 4.5).length;
  const whitePass = scores.filter((s) => s.white.ratio >= 4.5).length;
  const count = (n) => (n === rows.length ? `all ${n}` : n === 0 ? 'none' : `${n}`);
  return (
    <p>
      Of the {rows.length} mixes in the table, black text reaches the WCAG AA ratio of 4.5:1 on{' '}
      <strong className="text-gray-900 dark:text-white">{count(blackPass)}</strong> and white text on{' '}
      <strong className="text-gray-900 dark:text-white">{count(whitePass)}</strong>. The &ldquo;Best text
      color&rdquo; column shows the stronger of the two for each swatch.
    </p>
  );
}

/**
 * Shared layout for the "what color does X and Y make" guides.
 * Every hex in the ratio table is calculated by the color mixer (colorMixing.js) at build time.
 *
 * @param {object} props
 * @param {string} props.heroGradient
 * @param {string} props.heroAccentText
 * @param {string} props.h1
 * @param {string} props.featuredSnippet
 * @param {string} props.heroSwatchHex
 * @param {string} props.heroSwatchAria
 * @param {string} props.mixTableTitle
 * @param {Array<{ ratio: string, hex: string, screenHex: string, family: string, label?: string }>} props.mixRows
 * @param {boolean} [props.showScreenBlend] show the screen-blend column (only useful when it differs)
 * @param {{ hex: string }} props.color1 first color, used for the embedded mixer
 * @param {{ hex: string }} props.color2 second color, used for the embedded mixer
 * @param {string} [props.shadeSectionTitle]
 * @param {string} [props.shadeSectionBody]
 * @param {string} [props.introParagraph]
 * @param {string} props.paintVsScreenTitle
 * @param {import('react').ReactNode} props.paintVsScreen
 * @param {string} props.cssTitle
 * @param {import('react').ReactNode} props.cssContent
 * @param {string} props.practiceTitle
 * @param {import('react').ReactNode} props.practiceContent
 * @param {import('react').ReactNode} [props.contrastNote]
 * @param {string} props.combinationsTitle
 * @param {string} [props.complementaryTitle]
 * @param {string} [props.complementaryIntro]
 * @param {Array<{ title: string, body: string, swatches: string[] }>} [props.complementaryPairings]
 * @param {string} props.combinationsIntro
 * @param {Array<{ title: string, body: string, swatches: string[] }>} props.combinations
 * @param {string} props.designTitle
 * @param {import('react').ReactNode} props.designContent
 * @param {Array<{ question: string, answer: string }>} props.faq
 * @param {string} props.mixerHref
 * @param {string} props.mixerLabel
 * @param {object} props.faqSchema
 * @param {Record<string, unknown>} props.articleSchema
 * @param {string} props.breadcrumbTitle
 * @param {string} props.breadcrumbSlug
 */
export default function ColorMixGuidePost({
  heroGradient,
  heroAccentText,
  h1,
  featuredSnippet,
  heroSwatchHex,
  heroSwatchAria,
  mixTableTitle,
  mixRows,
  showScreenBlend = false,
  color1,
  color2,
  shadeSectionTitle,
  shadeSectionBody,
  introParagraph,
  paintVsScreenTitle,
  paintVsScreen,
  cssTitle,
  cssContent,
  practiceTitle,
  practiceContent,
  contrastNote,
  combinationsTitle,
  combinationsIntro,
  combinations,
  complementaryTitle,
  complementaryIntro,
  complementaryPairings,
  designTitle,
  designContent,
  faq,
  mixerHref,
  mixerLabel,
  faqSchema,
  articleSchema,
  breadcrumbTitle,
  breadcrumbSlug,
}) {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900">
      {articleSchema ? <BlogArticleSchema schema={articleSchema} /> : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="max-w-4xl mx-auto">
          <BlogBreadcrumbs postTitle={breadcrumbTitle} slug={breadcrumbSlug} />
        </div>
      </div>

      <section className={`bg-gradient-to-br ${heroGradient} text-white py-12 md:py-16`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className={`inline-flex items-center ${heroAccentText} hover:text-white mb-6 transition-colors text-sm`}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{h1}</h1>
            <AuthorByline variant="block" className="text-white/90" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium text-gray-900 dark:text-white leading-relaxed mb-6 border-l-4 border-amber-500 bg-amber-50/90 dark:bg-amber-950/30 dark:border-amber-400 pl-5 pr-4 py-4 rounded-r-xl">
            {featuredSnippet}
          </p>

          <div
            className="w-full h-40 md:h-52 rounded-2xl border-2 border-gray-200 dark:border-gray-600 shadow-lg mb-10"
            style={{ backgroundColor: heroSwatchHex }}
            role="img"
            aria-label={heroSwatchAria}
          />

          <section className="mb-10">
            <h2 className={H2}>{mixTableTitle}</h2>
            <ComputedMixTable rows={mixRows} showScreenBlend={showScreenBlend} caption={mixTableTitle} />
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Every hex code here is calculated by our{' '}
              <InlineTagLink href="/tools/color-mixer">color mixer</InlineTagLink>, not picked by eye, so you can
              reproduce each row with the mixer below. &ldquo;Best text color&rdquo; is the WCAG contrast ratio of
              black or white text on that swatch.
            </p>
          </section>

          {introParagraph ? (
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg mb-10">{introParagraph}</p>
          ) : null}

          {shadeSectionTitle && shadeSectionBody ? (
            <section className="mb-10">
              <h2 className={H2}>{shadeSectionTitle}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{shadeSectionBody}</p>
            </section>
          ) : null}

          <section className="mb-10">
            <h2 className={H2}>Try Any Ratio Yourself</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              The table stops at seven ratios. Drag the slider to see every step in between, or swap either color
              for the exact shade you are working with.
            </p>
            <div className="not-prose">
              <ColorMixer initialColor1={color1.hex} initialColor2={color2.hex} />
            </div>
          </section>

          <section className="mb-10">
            <h2 className={H2}>{paintVsScreenTitle}</h2>
            <div className={BODY}>{paintVsScreen}</div>
          </section>

          <section className="mb-10">
            <h2 className={H2}>{cssTitle}</h2>
            <div className={BODY}>{cssContent}</div>
          </section>

          <PalettePairingsSection title={combinationsTitle} intro={combinationsIntro} pairings={combinations} />

          {complementaryTitle && complementaryPairings?.length ? (
            <div className="mt-10">
              <PalettePairingsSection
                title={complementaryTitle}
                intro={complementaryIntro ?? ''}
                pairings={complementaryPairings}
              />
            </div>
          ) : null}

          <div className="mt-10">
            <PaletteUiUsageSection title={designTitle}>
              {designContent}
              <MixContrastSummary rows={mixRows} />
              {contrastNote}
            </PaletteUiUsageSection>
          </div>

          <section className="mt-10">
            <h2 className={H2}>{practiceTitle}</h2>
            <div className={BODY}>{practiceContent}</div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">FAQ</h2>
            <div className="space-y-6">
              {faq.map((item) => (
                <div key={item.question}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <BlogMixerCTA mixerHref={mixerHref} mixerLabel={mixerLabel} />

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Validate text on your new palette with our{' '}
            <InlineTagLink href="/tools/contrast-checker">WCAG contrast checker</InlineTagLink>.
          </p>
        </div>
      </div>
    </article>
  );
}
