// Tek yerden değişen site ayarları.
// Kendi alan adına (ör. sineklikpanjur.com) taşırken sadece NEXT_PUBLIC_SITE_URL ortam değişkenini güncellemek yeterlidir.

export const SITE = {
  name: 'Nexus Global',
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://nexus-global-v2.vercel.app').replace(/\/$/, ''),
  city: 'Antalya',
  phoneDisplay: '+90 541 350 81 13',
  phoneTel: '+905413508113',
  whatsapp: '905413508113', // wa.me biçimi: + ve boşluk yok
} as const;

export const whatsappLink = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
