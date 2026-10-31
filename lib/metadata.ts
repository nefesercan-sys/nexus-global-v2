import type { Metadata } from 'next';
import { COPY, LANGS, pathFor, type Lang } from './sineklik-panjur';
import { SITE } from './site';

export function buildMetadata(lang: Lang): Metadata {
  const c = COPY[lang];
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = SITE.url + pathFor(l);
  languages['x-default'] = SITE.url + pathFor('tr');

  return {
    metadataBase: new URL(SITE.url),
    title: c.metaTitle,
    description: c.metaDesc,
    keywords: c.keywords,
    alternates: { canonical: SITE.url + pathFor(lang), languages },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: c.metaTitle,
      description: c.metaDesc,
      url: SITE.url + pathFor(lang),
      locale: lang,
    },
    twitter: { card: 'summary', title: c.metaTitle, description: c.metaDesc },
    robots: { index: true, follow: true },
  };
}
