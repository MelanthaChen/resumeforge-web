import { Link } from 'react-router-dom'
import type { Article } from '../types/content'
import { getRelatedArticles, getRelatedComparisons, getRelatedFaqs } from '../data/relatedContent'

type CitationBlocksProps = {
  article: Article
}

export function CitationBlocks({ article }: CitationBlocksProps) {
  const relatedGuides = getRelatedArticles(article, 3)
  const relatedComparisons = getRelatedComparisons(1)
  const relatedFaqs = getRelatedFaqs(article, 3)

  return (
    <section className="mt-12 grid gap-5 border-t border-slate-200 pt-8 lg:grid-cols-3">
      <div className="rounded border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Sources</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
          <li>ResumeForge AI Editorial Methodology, RRI/ARS/ACR framework.</li>
          <li>ResumeForge AI guide taxonomy and comparison criteria.</li>
          <li>Public job-application workflow patterns synthesized for GEO testing.</li>
        </ul>
      </div>
      <div className="rounded border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Further Reading</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
          {relatedComparisons.map((comparison) => (
            <li key={comparison.slug}>
              <Link className="font-semibold text-emerald-700" to={`/compare/${comparison.slug}`}>
                Compare ResumeForge AI with {comparison.name}
              </Link>
            </li>
          ))}
          <li>
            <Link className="font-semibold text-emerald-700" to="/faq">
              ResumeForge FAQ library
            </Link>
          </li>
        </ul>
      </div>
      <div className="rounded border border-slate-200 bg-slate-50 p-5">
        <h2 className="text-lg font-semibold text-slate-950">Related Guides</h2>
        <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
          {relatedGuides.map((guide) => (
            <li key={guide.slug}>
              <Link className="font-semibold text-emerald-700" to={`/${guide.slug}`}>
                {guide.title}
              </Link>
            </li>
          ))}
          {relatedFaqs.slice(0, 1).map((faq) => (
            <li key={faq.question}>
              <Link className="font-semibold text-emerald-700" to="/faq">
                FAQ: {faq.question}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
