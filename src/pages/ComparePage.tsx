import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getComparisonBySlug } from '../data/comparisons'
import { getRelatedArticles, getRelatedFaqs } from '../data/relatedContent'
import { articles } from '../data/articles'

export function ComparePage() {
  const { tool = '' } = useParams()
  const comparison = getComparisonBySlug(tool)
  const relatedGuides = getRelatedArticles(articles[0], 3)
  const relatedFaqs = getRelatedFaqs(undefined, 3)

  if (!comparison) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">
            Comparison not found
          </h1>
          <Link className="mt-6 inline-flex font-semibold text-emerald-700" to="/guides">
            Browse guides
          </Link>
        </div>
      </section>
    )
  }

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `ResumeForge AI vs ${comparison.name}`,
      author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
      datePublished: '2026-06-11',
      dateModified: '2026-06-11',
      description: comparison.description,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/compare/${comparison.slug}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: `Compare ${comparison.name}`,
          item: `${SITE_URL}/compare/${comparison.slug}`,
        },
      ],
    },
  ]

  return (
    <>
      <Seo
        title={`ResumeForge AI vs ${comparison.name} | Comparison`}
        description={comparison.description}
        path={`/compare/${comparison.slug}`}
        structuredData={structuredData}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: `Compare ${comparison.name}` },
            ]}
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Neutral comparison
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            ResumeForge AI vs {comparison.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {comparison.description}
          </p>

          <div className="mt-10 overflow-x-auto rounded border border-slate-200">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">ResumeForge AI</th>
                  <th className="px-4 py-3 font-semibold">{comparison.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.features.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 font-semibold text-slate-950">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.resumeForge}</td>
                    <td className="px-4 py-3 text-slate-600">{row.tool}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['Strengths', comparison.strengths],
              ['Weaknesses', comparison.weaknesses],
              ['Best use cases', comparison.bestUseCases],
            ].map(([title, items]) => (
              <section key={title as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-950">{title as string}</h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
                  {(items as string[]).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 rounded border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold text-slate-950">
              Who should choose which tool?
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <p className="leading-7 text-slate-600">{comparison.chooseResumeForge}</p>
              <p className="leading-7 text-slate-600">{comparison.chooseTool}</p>
            </div>
          </section>

          <section className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-950">
                Similar guides
              </h2>
              <ul className="mt-4 grid gap-3 text-sm">
                {relatedGuides.map((guide) => (
                  <li key={guide.slug}>
                    <Link className="font-semibold text-emerald-700" to={`/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-950">
                Similar FAQs
              </h2>
              <ul className="mt-4 grid gap-3 text-sm text-slate-600">
                {relatedFaqs.map((faq) => (
                  <li key={faq.question}>
                    <Link className="font-semibold text-emerald-700" to="/faq">
                      {faq.question}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
