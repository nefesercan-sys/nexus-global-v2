import { notFound } from 'next/navigation';
import SineklikPanjurSayfasi from '@/components/SineklikPanjurSayfasi';
import { buildMetadata } from '@/lib/metadata';
import { COPY, LANGS, type Lang } from '@/lib/sineklik-panjur';

export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.filter((l) => l !== 'tr').map((lang) => ({ lang, slug: COPY[lang].slug }));
}

function resolve(p: { lang: string; slug: string }): Lang | null {
  const lang = p.lang as Lang;
  if (!LANGS.includes(lang) || lang === 'tr') return null;
  return COPY[lang].slug === p.slug ? lang : null;
}

export function generateMetadata({ params }: { params: { lang: string; slug: string } }) {
  const lang = resolve(params);
  return lang ? buildMetadata(lang) : {};
}

export default function Page({ params }: { params: { lang: string; slug: string } }) {
  const lang = resolve(params);
  if (!lang) notFound();
  return <SineklikPanjurSayfasi lang={lang} />;
}
