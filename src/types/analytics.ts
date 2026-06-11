export type AnalyticsEvent = {
  event: 'page_view'
  timestamp: string
  page: string
  page_path: string
  referrer: string
  session: string
  session_id: string
  geo_concepts: string[]
  user_agent: string
}

export type AnalyticsSummary = {
  totalVisits: number
  todayVisits: number
  last7Days: number
  topPages: Array<{ label: string; count: number }>
  topReferrers: Array<{ label: string; count: number }>
  topGeoConcepts: Array<{ label: string; count: number }>
  mostViewedComparison?: { label: string; count: number }
  mostViewedGuide?: { label: string; count: number }
}
