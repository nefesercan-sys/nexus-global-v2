import Link from 'next/link';
import { COPY, LANGS, pathFor, type Lang } from '@/lib/sineklik-panjur';
import { SITE, whatsappLink } from '@/lib/site';
import Illustration from './Illustration';

export default function SineklikPanjurSayfasi({ lang }: { lang: Lang }) {
  const c = COPY[lang];
  const url = SITE.url + pathFor(lang);
  const wa = whatsappLink(c.waMsg);

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: c.serviceName,
      serviceType: c.sinekH + ' / ' + c.panjurH,
      description: c.metaDesc,
      inLanguage: lang,
      url,
      areaServed: { '@type': 'City', name: SITE.city },
      provider: {
        '@type': 'Organization',
        name: SITE.name,
        telephone: SITE.phoneTel,
        url: SITE.url,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: lang,
      mainEntity: c.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: c.home, item: SITE.url },
        { '@type': 'ListItem', position: 2, name: c.h1, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      url,
      name: c.metaTitle,
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.answer'] },
    },
  ];

  const gallery = [
    { kind: 'sabit', cap: c.sinek[0].t, alt: c.alt[0] },
    { kind: 'surme', cap: c.sinek[2].t, alt: c.alt[1] },
    { kind: 'plise', cap: c.sinek[3].t, alt: c.alt[2] },
    { kind: 'rulo', cap: c.sinek[4].t, alt: c.alt[3] },
    { kind: 'panjur', cap: c.panjurH, alt: c.alt[4] },
  ] as const;

  return (
    <div dir={c.dir}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="top">
        <div className="wrap top-in">
          <Link href="/" className="brand">{SITE.name}</Link>
          <nav className="langs" aria-label="Languages">
            {LANGS.map((l) => (
              <Link
                key={l}
                href={pathFor(l)}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? 'page' : undefined}
                className={l === lang ? 'on' : ''}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <nav className="crumbs wrap" aria-label="Breadcrumb">
        <Link href="/">{c.home}</Link> <span aria-hidden>›</span> <span>{c.h1}</span>
      </nav>

      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>{c.h1}</h1>
          <p className="lead">{c.lead}</p>
          <div className="btns">
            <a className="btn wa" href={wa} rel="noopener">{c.wa}</a>
            <a className="btn tel" href={`tel:${SITE.phoneTel}`}>
              {c.call}: <bdi>{SITE.phoneDisplay}</bdi>
            </a>
          </div>
        </div>
      </section>

      <main className="wrap">
        <section className="answer-box">
          <h2>{c.answerH}</h2>
          <p className="answer">{c.answer}</p>
        </section>

        <section className="gallery" aria-label={c.sinekH + ' / ' + c.panjurH}>
          {gallery.map((g) => (
            <figure key={g.kind}>
              <Illustration kind={g.kind} label={g.alt} />
              <figcaption>{g.cap}</figcaption>
            </figure>
          ))}
        </section>

        <section>
          <h2>{c.sinekH}</h2>
          <p>{c.sinekIntro}</p>
          <div className="cards">
            {c.sinek.map((i) => (
              <article key={i.t} className="card">
                <h3>{i.t}</h3>
                <p>{i.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>{c.panjurH}</h2>
          <p>{c.panjurIntro}</p>
          <div className="cards">
            {c.panjur.map((i) => (
              <article key={i.t} className="card">
                <h3>{i.t}</h3>
                <p>{i.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2>{c.chooseH}</h2>
          <ul className="ticks">
            {c.choose.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{c.stepsH}</h2>
          <ol className="steps">
            {c.steps.map((s) => (
              <li key={s.t}>
                <strong>{s.t}</strong>
                <span>{s.d}</span>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2>{c.sendH}</h2>
          <ul className="ticks">
            {c.send.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>{c.faqH}</h2>
          <div className="faq">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>{c.ctaH}</h2>
          <p>{c.ctaText}</p>
          <div className="btns">
            <a className="btn wa" href={wa} rel="noopener">{c.wa}</a>
            <a className="btn tel" href={`tel:${SITE.phoneTel}`}>
              <bdi>{SITE.phoneDisplay}</bdi>
            </a>
          </div>
        </section>

        <section>
          <h2 className="small">{c.langsH}</h2>
          <p className="langs-list">
            {LANGS.filter((l) => l !== lang).map((l) => (
              <Link key={l} href={pathFor(l)} hrefLang={l} lang={l}>
                {COPY[l].label}
              </Link>
            ))}
          </p>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          © {new Date().getFullYear()} {SITE.name} · {SITE.city} · <bdi>{SITE.phoneDisplay}</bdi>
        </div>
      </footer>

      <a className="fab" href={wa} rel="noopener" aria-label={c.wa}>WhatsApp</a>
    </div>
  );
}
