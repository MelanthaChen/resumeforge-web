import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { researchFrameworks } from '../data/research'

export function ResearchPage() {
  return (
    <>
      <Seo
        title="Research Center | GeoAIResume"
        description="GeoAIResume research center for RRI, ACR, and ARS methodology, scoring, examples, and limitations."
        path="/research"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'GeoAIResume Research Center',
          url: `${SITE_URL}/research`,
        }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Research center
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            GeoAIResume research frameworks
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Central hub for the Resume Readiness Index, ATS Compatibility
            Rating, and Application Readiness Score.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {researchFrameworks.map((framework) => (
              <article key={framework.id} className="rounded border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                  {framework.abbreviation}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                  {framework.name}
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {framework.definition}
                </p>
                <Link
                  to={`/research/${framework.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-emerald-700"
                >
                  Read methodology
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
