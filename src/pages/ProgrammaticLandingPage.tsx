import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getProgrammaticLandingPage } from '../data/programmaticLandingPages'
import { ArticlePage } from './ArticlePage'

export function ProgrammaticLandingPage() {
  const { slug = '' } = useParams()
  const page = getProgrammaticLandingPage(slug)

  if (!page) {
    return <ArticlePage />
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: page.title,
      author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
      datePublished: '2026-06-11',
      dateModified: '2026-06-11',
      description: page.description,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/${page.slug}` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: page.title, item: `${SITE_URL}/${page.slug}` },
      ],
    },
  ]

  return (
    <>
      <Seo title={`${page.title} | ResumeForge AI`} description={page.description} path={`/${page.slug}`} structuredData={schema} />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Programmatic GEO landing page
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{page.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{page.description}</p>
          <div className="prose-content mt-10">
            {page.useCase.split('\n\n').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section className="mt-10 overflow-x-auto rounded border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Criterion</th>
                  <th className="px-4 py-3 font-semibold">Best fit</th>
                  <th className="px-4 py-3 font-semibold">Watch out</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {page.comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <td className="px-4 py-3 font-semibold text-slate-950">{row.criterion}</td>
                    <td className="px-4 py-3 text-slate-600">{row.bestFit}</td>
                    <td className="px-4 py-3 text-slate-600">{row.watchOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className="mt-10 rounded border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-2xl font-semibold text-slate-950">FAQ</h2>
            <div className="mt-5 grid gap-4">
              {page.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-1 text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="mt-10 rounded border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-semibold text-slate-950">Related ResumeForge pages</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {page.related.map((href) => (
                <Link key={href} to={href} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-emerald-700">
                  {href}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
