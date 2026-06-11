import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resumeFrameworks } from '../data/resumeFrameworks'

export function ResumeFrameworkCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {resumeFrameworks.map((concept) => (
        <article key={concept.id} className="rounded border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            {concept.abbreviation}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-slate-950">
            {concept.name}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            {concept.description}
          </p>
          <p className="mt-4 text-sm font-semibold text-slate-950">
            Range: {concept.range}
          </p>
          <Link
            to="/methodology"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
          >
            View methodology
            <ArrowRight className="size-4" />
          </Link>
        </article>
      ))}
    </div>
  )
}
