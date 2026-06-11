import { Link } from 'react-router-dom'
import { getTopicCluster } from '../data/topicClusters'
import type { GuideCategory } from '../types/content'

type TopicClusterLinksProps = {
  category: GuideCategory
}

export function TopicClusterLinks({ category }: TopicClusterLinksProps) {
  const cluster = getTopicCluster(category)

  return (
    <section className="mt-10 rounded border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-semibold text-slate-950">
        {cluster.label} topic cluster
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {cluster.links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="rounded border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-emerald-700"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
