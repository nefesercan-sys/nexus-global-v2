# Nexus Global — Sineklik ve Panjur (Antalya)

10 dilli sineklik ve panjur hizmet sayfası (tr, en, de, ru, es, fr, pl, uk, nl, ar). Next.js 14 (App Router).

## Adresler
- TR: `/sineklik-panjur-antalya`
- Diğer diller: `/{dil}/{slug}` — slug'lar `lib/sineklik-panjur.ts` içindedir.
- `/sitemap.xml`, `/robots.txt` otomatik üretilir (hreflang + x-default dahil).

## Düzenleme
- Telefon, marka, alan adı: `lib/site.ts` (tek yer).
- Metinler, SSS, anahtar kelimeler: `lib/sineklik-panjur.ts`.
- Yapmadığınız bir ürün varsa ilgili satırı o dosyadan silin.

## Kendi alan adına taşıma (ör. sineklikpanjur.com)
1. Vercel → Settings → Domains: yeni alan adını ekleyin.
2. Vercel → Environment Variables: `NEXT_PUBLIC_SITE_URL=https://sineklikpanjur.com`
3. Yeniden dağıtın. Canonical, hreflang, sitemap ve şema adresleri otomatik güncellenir.
4. Eski adresten yeni adrese 301 yönlendirme ekleyin (Vercel → Domains → Redirect).

## Görseller
Sayfadaki çizimler orijinaldir (`components/Illustration.tsx`). Gerçek iş fotoğrafları gelince
`public/` altına koyup bu bileşenin yerine `next/image` kullanın; alt metinleri `lib/sineklik-panjur.ts` içindeki `alt` alanlarından alın.
