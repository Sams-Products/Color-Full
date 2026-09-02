import HomeClient from './HomeClient';
import { buildPageMetadata } from '../lib/buildPageMetadata';

export const metadata = buildPageMetadata({
  path: '/',
  title: 'Free Color Tools: Palette Generator, Contrast Checker & Hex Codes',
  description:
    'Free online color tools — generate palettes, check WCAG contrast, mix colors, find color names, and browse hex code guides. No signup needed.',
  keywords: [
    'color tools',
    'free color tools',
    'palette generator',
    'contrast checker',
    'color mixing',
    'WCAG',
    'hex codes',
    'color name finder',
  ],
});

export default function Home() {
  return <HomeClient />;
}
