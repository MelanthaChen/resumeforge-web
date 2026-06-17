import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { resumeExamples } from '../data/examples'

export function ExamplesPage() {
  return (
    <>
      <Seo
        title="Resume Examples Library | GeoAIResume"
        description="Resume examples for software engineers, data analysts, product managers, marketing roles, recent graduates, and internships."
        path="/examples"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Resume Examples Library',
          url: `${SITE_URL}/examples`,
        }}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Resume examples
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            Resume examples library
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Role-specific examples with structure, bullet models, and ATS tips.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {resumeExamples.map((example) => (
              <article key={example.slug} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-950">
                  <Link to={`/examples/${example.slug}`}>{example.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {example.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
