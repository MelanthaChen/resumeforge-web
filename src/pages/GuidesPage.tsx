import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { trackArticleClick } from '../analytics/analytics'
import { Seo } from '../components/Seo'
import { SITE_URL } from '../config/site'
import { articles } from '../data/articles'
import type { GuideCategory } from '../types/content'

const categories: Array<'All' | GuideCategory> = [
  'All',
  'Resume Writing',
  'ATS',
  'Career Change',
  'Students',
  'Interviews',
  'Job Search',
  'Resume Builders',
]

export function GuidesPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(
    () =>
      articles.filter((article) => {
        const matchesCategory = category === 'All' || article.guideCategory === category
        const matchesQuery = `${article.title} ${article.description} ${article.guideCategory}`
          .toLowerCase()
          .includes(query.toLowerCase())

        return matchesCategory && matchesQuery
      }),
    [category, query],
  )

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ResumeForge AI Guides Library',
    description:
      'Searchable ResumeForge AI library of resume, ATS, job search, and career preparation guides.',
    url: `${SITE_URL}/guides`,
  }

  return (
    <>
      <Seo
        title="Guides Library | ResumeForge AI"
        description="Search the ResumeForge AI guides library for resume writing, ATS, career change, student, interview, job search, and resume builder topics."
        path="/guides"
        structuredData={structuredData}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            Guides library
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-950">
            ResumeForge AI topical library
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Search long-form guides across resume writing, ATS systems, career
            changes, students, interviews, job search, and resume builders.
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-[360px_1fr]">
            <label className="relative block">
              <Search className="pointer-events-none absolute left-3 top-3 size-5 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search guides"
                className="w-full rounded border border-slate-300 py-3 pl-10 pr-3 text-sm outline-none focus:border-emerald-600"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded border px-3 py-2 text-sm font-semibold ${
                    category === item
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <article key={article.slug} className="rounded border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                  {article.guideCategory}
                </p>
                <h2 className="mt-3 text-xl font-semibold leading-tight text-slate-950">
                  <Link
                    to={`/${article.slug}`}
                    onClick={() => trackArticleClick(article.slug, article.title)}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {article.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                  <span>{article.readingTime}</span>
                  <span>Updated {article.updatedAt}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
