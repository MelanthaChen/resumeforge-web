import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getEntity } from '../data/entities'

export function EntityDetailPage() {
  const { entity = '' } = useParams()
  const item = getEntity(entity)

  if (!item) return null

  return (
    <>
      <Seo title={`${item.title} Definition | ResumeForge Entity Library`} description={item.definition} path={`/entities/${item.slug}`} structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: `${item.title} Definition`,
        author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
        datePublished: '2026-06-11',
        dateModified: '2026-06-11',
        description: item.definition,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/entities/${item.slug}` },
      }} />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Entity reference</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{item.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{item.definition}</p>
          <section className="mt-10 rounded border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-2xl font-semibold text-slate-950">Relationships</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.relationships.map((relationship) => (
                <span key={relationship} className="rounded bg-white px-3 py-2 text-sm font-semibold text-slate-700">{relationship}</span>
              ))}
            </div>
          </section>
          <section className="mt-10 rounded border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-semibold text-slate-950">Relevant ResumeForge guides</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['/guides', '/research', '/benchmarks', '/faq', '/ats-resume-guide'].map((href) => (
                <Link key={href} to={href} className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-emerald-700">{href}</Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
