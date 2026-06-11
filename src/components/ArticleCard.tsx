import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../types/content'

type ArticleCardProps = {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="rounded border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wide text-emerald-700">
        <span>{article.category}</span>
        <span className="text-slate-400">{article.readingTime}</span>
      </div>
      <h3 className="mt-4 text-xl font-semibold leading-tight text-slate-950">
        <Link to={`/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{article.description}</p>
      <Link
        to={`/${article.slug}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700"
      >
        Read guide
        <ArrowRight className="size-4" />
      </Link>
    </article>
  )
}
