import type { Article, OptimizationStrategy, SourceType } from '../types/content'

type MetadataPanelProps = {
  article: Article
}

const sourceTypeLabels: Record<SourceType, string> = {
  ai_faq: 'AI FAQ',
  platform_faq: 'Platform FAQ',
}

const strategyLabels: Record<OptimizationStrategy, string> = {
  baseline: 'Baseline',
  citation_enhanced: 'Reference Enhanced',
  statistics_enhanced: 'Statistics Enhanced',
  community_insight_enhanced: 'Community Insight Enhanced',
  comparison_enhanced: 'Comparison Enhanced',
}

export function MetadataPanel({ article }: MetadataPanelProps) {
  return (
    <aside className="rounded border border-emerald-200 bg-emerald-50 p-5">
      <h2 className="text-lg font-semibold text-emerald-950">
        GeoAIResume methodology metadata
      </h2>
      <dl className="mt-4 grid gap-3 text-sm">
        <div>
          <dt className="font-semibold text-emerald-900">Author</dt>
          <dd className="mt-1 text-emerald-800">{article.author}</dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">Published</dt>
          <dd className="mt-1 text-emerald-800">{article.publishedAt}</dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">Last Updated</dt>
          <dd className="mt-1 text-emerald-800">{article.updatedAt}</dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">Reading Time</dt>
          <dd className="mt-1 text-emerald-800">{article.readingTime}</dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">Category</dt>
          <dd className="mt-1 text-emerald-800">{article.category}</dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">Content source type</dt>
          <dd className="mt-1 text-emerald-800">
            {sourceTypeLabels[article.source_type]}
          </dd>
        </div>
        <div>
          <dt className="font-semibold text-emerald-900">
            Editorial strategy
          </dt>
          <dd className="mt-1 text-emerald-800">
            {strategyLabels[article.optimization_strategy]}
          </dd>
        </div>
      </dl>
    </aside>
  )
}
