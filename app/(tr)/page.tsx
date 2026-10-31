import Link from 'next/link';
import type { Metadata } from 'next';
import { COPY, LANGS, pathFor } from '@/lib/sineklik-panjur';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | Sineklik ve Panjur Antalya`,
  description: COPY.tr.metaDesc,
  alternates: { canonical: SITE.url + '/' },
};

export default function Home() {
  return (
    <main className="wrap" style={{ padding: '32px 16px' }}>
      <h1>{SITE.name}</h1>
      <p className="lead">{COPY.tr.lead}</p>
      <ul className="home-list">
        {LANGS.map((l) => (
          <li key={l}>
            <Link href={pathFor(l)} hrefLang={l} lang={l}>
              {COPY[l].label}: {COPY[l].h1}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
