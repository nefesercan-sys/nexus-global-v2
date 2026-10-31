import '../../globals.css';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { COPY, LANGS, type Lang } from '@/lib/sineklik-panjur';

export function generateStaticParams() {
  return LANGS.filter((l) => l !== 'tr').map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default function IntlLayout({ children, params }: { children: ReactNode; params: { lang: string } }) {
  const lang = params.lang as Lang;
  if (!LANGS.includes(lang) || lang === 'tr') notFound();
  return (
    <html lang={lang} dir={COPY[lang].dir}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
