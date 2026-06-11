import { Link, useParams } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { getBenchmarkFramework } from '../data/benchmarkFrameworks'

export function BenchmarkFrameworkPage() {
  const { framework = '' } = useParams()
  const item = getBenchmarkFramework(framework)

  if (!item) {
    return (
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">Benchmark not found</h1>
          <Link to="/benchmarks" className="mt-6 inline-flex font-semibold text-emerald-700">Back to benchmarks</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <Seo title={`${item.title} | ResumeForge Benchmarks`} description={item.description} path={`/benchmarks/${item.slug}`} structuredData={{
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: item.title,
        author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
        datePublished: '2026-06-11',
        dateModified: '2026-06-11',
        description: item.description,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/benchmarks/${item.slug}` },
      }} />
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Benchmark framework</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">{item.title}</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{item.description}</p>
          <div className="mt-10 overflow-x-auto rounded border border-slate-200">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3">Dimension</th><th className="px-4 py-3">Definition</th></tr></thead>
              <tbody className="divide-y divide-slate-200">
                {item.dimensions.map((dimension) => (
                  <tr key={dimension}><td className="px-4 py-3 font-semibold text-slate-950">{dimension}</td><td className="px-4 py-3 text-slate-600">Evaluated as a benchmark signal for resume and application readiness.</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <section className="mt-10 rounded border border-slate-200 bg-slate-50 p-5">
            <h2 className="text-2xl font-semibold text-slate-950">Scoring example</h2>
            <p className="mt-3 leading-7 text-slate-600">{item.example}</p>
          </section>
        </div>
      </section>
    </>
  )
}
