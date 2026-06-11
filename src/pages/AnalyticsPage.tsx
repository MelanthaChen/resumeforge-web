import { useMemo } from 'react'
import { BarChart3 } from 'lucide-react'
import { getAnalyticsEvents, getAnalyticsSummary } from '../analytics/analytics'
import { Seo } from '../components/Seo'

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded border border-slate-200 bg-white p-6">
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-slate-950">{value}</p>
    </div>
  )
}

function RankingList({
  title,
  items,
}: {
  title: string
  items: Array<{ label: string; count: number }>
}) {
  return (
    <section className="rounded border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.length === 0 ? (
          <p className="text-sm text-slate-500">No data recorded yet.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 rounded bg-slate-50 px-4 py-3 text-sm"
            >
              <span className="truncate text-slate-700">{item.label}</span>
              <span className="font-semibold text-slate-950">{item.count}</span>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export function AnalyticsPage() {
  const summary = useMemo(() => getAnalyticsSummary(), [])
  const recentEvents = useMemo(() => getAnalyticsEvents().slice(-8).reverse(), [])

  return (
    <>
      <Seo
        title="Analytics Dashboard | ResumeForge AI"
        description="Local analytics dashboard showing ResumeForge AI visits, top pages, referrers, and recent page views."
        path="/analytics"
      />
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="size-8 text-emerald-700" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
                Local analytics
              </p>
              <h1 className="mt-2 text-4xl font-semibold text-slate-950">
                ResumeForge AI analytics
              </h1>
            </div>
          </div>
          <p className="mt-5 max-w-3xl leading-7 text-slate-600">
            Page views are stored locally in this browser. No account, payment,
            upload, or third-party tracking system is connected.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <StatCard label="Total Visits" value={summary.totalVisits} />
            <StatCard label="Today Visits" value={summary.todayVisits} />
            <StatCard label="Last 7 Days" value={summary.last7Days} />
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="rounded border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-500">
                Most Viewed Comparison
              </p>
              <p className="mt-3 truncate text-2xl font-semibold text-slate-950">
                {summary.mostViewedComparison?.label ?? 'No comparison views yet'}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {summary.mostViewedComparison?.count ?? 0} visits
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <p className="text-sm font-semibold text-slate-500">
                Most Viewed Guide
              </p>
              <p className="mt-3 truncate text-2xl font-semibold text-slate-950">
                {summary.mostViewedGuide?.label ?? 'No guide views yet'}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                {summary.mostViewedGuide?.count ?? 0} visits
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <RankingList title="Top Pages" items={summary.topPages} />
            <RankingList title="Top Referrers" items={summary.topReferrers} />
          </div>

          <section className="mt-8 rounded border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-slate-950">
              Recent page views
            </h2>
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="border-b border-slate-200 text-slate-500">
                  <tr>
                    <th className="py-3 pr-4 font-semibold">Timestamp</th>
                    <th className="py-3 pr-4 font-semibold">Page Path</th>
                    <th className="py-3 pr-4 font-semibold">Referrer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentEvents.map((event) => (
                    <tr key={`${event.timestamp}-${event.page_path}`}>
                      <td className="py-3 pr-4 text-slate-600">
                        {new Date(event.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 pr-4 font-medium text-slate-950">
                        {event.page || event.page_path}
                      </td>
                      <td className="py-3 pr-4 text-slate-600">
                        {event.referrer}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
