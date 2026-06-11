import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getCareerPage } from '../data/careerPages'

export function CareerResumePage() {
  const { role = '' } = useParams()
  const page = getCareerPage(role)

  if (!page) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">Role page not found</h1>
          <Link to="/examples" className="mt-6 inline-flex font-semibold text-emerald-700">
            Browse examples
          </Link>
        </div>
      </section>
    )
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <>
      <Seo
        title={`${page.role} Resume Guide | ResumeForge AI`}
        description={page.overview}
        path={`/resume/${page.slug}`}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: `${page.role} Resume Guide`,
            author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
            datePublished: '2026-06-11',
            dateModified: '2026-06-11',
            description: page.overview,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/resume/${page.slug}` },
          },
          faqSchema,
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Programmatic resume guide
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            {page.role} resume guide
          </h1>
          <section className="mt-8 rounded border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-2xl font-semibold text-slate-950">Role overview</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{page.overview}</p>
          </section>
          <div className="mt-10 grid gap-5">
            {[
              ['Common mistakes', page.mistakes],
              ['Resume structure', page.structure],
              ['Bullet examples', page.bullets],
              ['ATS tips', page.atsTips],
            ].map(([title, rows]) => (
              <section key={title as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-2xl font-semibold text-slate-950">{title as string}</h2>
                <ul className="mt-4 grid gap-3 text-slate-600">
                  {(rows as string[]).map((row) => <li key={row}>{row}</li>)}
                </ul>
              </section>
            ))}
            <section className="rounded border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
              <div className="mt-4 grid gap-4">
                {page.faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                    <p className="mt-1 text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
