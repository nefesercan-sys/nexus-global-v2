import type { MetadataRoute } from 'next';
import { LANGS, pathFor } from '@/lib/sineklik-panjur';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of LANGS) languages[l] = SITE.url + pathFor(l);
  languages['x-default'] = SITE.url + pathFor('tr');
  const now = new Date();
  return [
    { url: SITE.url + '/', lastModified: now },
    ...LANGS.map((l) => ({
      url: SITE.url + pathFor(l),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: l === 'tr' ? 1 : 0.8,
      alternates: { languages },
    })),
  ];
}
