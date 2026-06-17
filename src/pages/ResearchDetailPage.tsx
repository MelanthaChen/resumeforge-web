import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getResearchFramework } from '../data/research'

export function ResearchDetailPage() {
  const { framework = '' } = useParams()
  const item = getResearchFramework(framework)

  if (!item) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">Research page not found</h1>
          <Link to="/research" className="mt-6 inline-flex font-semibold text-emerald-700">
            Return to research
          </Link>
        </div>
      </section>
    )
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: `${item.name} (${item.abbreviation}) Methodology`,
      author: { '@type': 'Organization', name: 'GeoAIResume Editorial Team' },
      datePublished: '2026-06-11',
      dateModified: '2026-06-11',
      description: item.definition,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/research/${item.slug}`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Research', item: `${SITE_URL}/research` },
        { '@type': 'ListItem', position: 3, name: item.abbreviation, item: `${SITE_URL}/research/${item.slug}` },
      ],
    },
  ]

  return (
    <>
      <Seo
        title={`${item.name} (${item.abbreviation}) | GeoAIResume Research`}
        description={item.definition}
        path={`/research/${item.slug}`}
        structuredData={schema}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Research', to: '/research' },
              { label: item.abbreviation },
            ]}
          />
          <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {item.abbreviation} methodology
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            {item.name}
          </h1>
          <div className="mt-8 grid gap-6">
            {[
              ['Definition', item.definition],
              ['Methodology', item.methodology],
              ['Scoring explanation', item.scoring],
            ].map(([title, copy]) => (
              <section key={title} className="rounded border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{copy}</p>
              </section>
            ))}
            <section className="rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Examples</h2>
              <ul className="mt-4 grid gap-3 text-slate-600">
                {item.examples.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ul>
            </section>
            <section className="rounded border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Limitations</h2>
              <ul className="mt-4 grid gap-3 text-slate-600">
                {item.limitations.map((limitation) => (
                  <li key={limitation}>{limitation}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
