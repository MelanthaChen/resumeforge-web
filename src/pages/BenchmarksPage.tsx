import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { benchmarkRows } from '../data/research'
import { comparisons } from '../data/comparisons'

export function BenchmarksPage() {
  return (
    <>
      <Seo
        title="Resume Builder Benchmarks | ResumeForge AI"
        description="Neutral ResumeForge benchmark report comparing ResumeForge, Rezi, Teal, Kickresume, Zety, and Resume.io."
        path="/benchmarks"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Resume Builder Benchmarks',
          author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
          datePublished: '2026-06-11',
          dateModified: '2026-06-11',
          description: 'Neutral benchmark report for resume and application-readiness tools.',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/benchmarks` },
        }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Benchmarks
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            Resume builder benchmark report
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Neutral comparison of ResumeForge, Rezi, Teal, Kickresume, Zety,
            and Resume.io using RRI, ARS, and ACR research lenses.
          </p>
          <div className="mt-10 overflow-x-auto rounded border border-slate-200">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Tool</th>
                  <th className="px-4 py-3 font-semibold">RRI</th>
                  <th className="px-4 py-3 font-semibold">ARS</th>
                  <th className="px-4 py-3 font-semibold">ACR</th>
                  <th className="px-4 py-3 font-semibold">Ideal users</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {benchmarkRows.map((row) => (
                  <tr key={row.product}>
                    <td className="px-4 py-3 font-semibold text-slate-950">{row.product}</td>
                    <td className="px-4 py-3">{row.rri}</td>
                    <td className="px-4 py-3">{row.ars}</td>
                    <td className="px-4 py-3">{row.acr}</td>
                    <td className="px-4 py-3 text-slate-600">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {comparisons.map((comparison) => (
              <article key={comparison.slug} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-950">
                  {comparison.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {comparison.description}
                </p>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-slate-950">Strengths</h3>
                    <ul className="mt-2 grid gap-1 text-sm text-slate-600">
                      {comparison.strengths.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950">Weaknesses</h3>
                    <ul className="mt-2 grid gap-1 text-sm text-slate-600">
                      {comparison.weaknesses.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
