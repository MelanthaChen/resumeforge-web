export type AnalyticsEvent = {
  event: 'page_view'
  timestamp: string
  page_path: string
  referrer: string
  user_agent: string
}

export type AnalyticsSummary = {
  totalVisits: number
  todayVisits: number
  last7Days: number
  topPages: Array<{ label: string; count: number }>
  topReferrers: Array<{ label: string; count: number }>
}
