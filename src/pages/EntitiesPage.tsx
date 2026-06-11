import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { entities } from '../data/entities'

export function EntitiesPage() {
  return (
    <>
      <Seo title="Resume Entity Library | ResumeForge AI" description="Wikipedia-style entity reference pages for resume builders, ATS, resume screening, optimization, job applications, and keyword matching." path="/entities" />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <h1 className="text-4xl font-semibold text-slate-950">Resume entity library</h1>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {entities.map((entity) => (
              <Link key={entity.slug} to={`/entities/${entity.slug}`} className="rounded border border-slate-200 bg-slate-50 p-5">
                <h2 className="text-xl font-semibold text-slate-950">{entity.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{entity.definition}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
