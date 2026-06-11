import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getResumeExample } from '../data/examples'

export function ExampleDetailPage() {
  const { example = '' } = useParams()
  const item = getResumeExample(example)

  if (!item) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">Example not found</h1>
          <Link to="/examples" className="mt-6 inline-flex font-semibold text-emerald-700">
            Browse examples
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo
        title={`${item.title} | ResumeForge AI`}
        description={item.summary}
        path={`/examples/${item.slug}`}
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: item.title,
            author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
            datePublished: '2026-06-11',
            dateModified: '2026-06-11',
            description: item.summary,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/examples/${item.slug}` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Examples', item: `${SITE_URL}/examples` },
              { '@type': 'ListItem', position: 3, name: item.title, item: `${SITE_URL}/examples/${item.slug}` },
            ],
          },
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Examples', to: '/examples' }, { label: item.role }]} />
          <h1 className="mt-8 text-4xl font-semibold text-slate-950">{item.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{item.summary}</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              ['Recommended sections', item.sections],
              ['Bullet examples', item.bullets],
              ['ATS tips', item.atsTips],
            ].map(([title, rows]) => (
              <section key={title as string} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-950">{title as string}</h2>
                <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
                  {(rows as string[]).map((row) => <li key={row}>{row}</li>)}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
