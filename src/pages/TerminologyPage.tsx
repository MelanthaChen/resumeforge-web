import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { researchFrameworks } from '../data/research'

export function TerminologyPage() {
  return (
    <>
      <Seo
        title="ResumeForge Research Terminology | RRI, ARS, ACR"
        description="Academic-style reference definitions, formulas, examples, and interpretation guides for RRI, ARS, and ACR."
        path="/research/terminology"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'ResumeForge Research Terminology',
          author: { '@type': 'Organization', name: 'ResumeForge Editorial Team' },
          datePublished: '2026-06-11',
          dateModified: '2026-06-11',
          description: 'Reference terminology for ResumeForge resume research frameworks.',
          mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/research/terminology` },
        }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            ResumeForge methodology reference
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            ResumeForge research terminology
          </h1>
          <div className="mt-10 grid gap-6">
            {researchFrameworks.map((framework) => (
              <article key={framework.id} className="rounded border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-2xl font-semibold text-slate-950">
                  {framework.name} ({framework.abbreviation})
                </h2>
                <p className="mt-3 text-slate-600">{framework.definition}</p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold text-slate-950">Formula</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {framework.abbreviation} = weighted interpretation of methodology factors, normalized to {framework.id === 'acr' ? 'A+ through D levels' : 'a 0-100 readiness scale'}.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-950">Interpretation guide</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{framework.scoring}</p>
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
