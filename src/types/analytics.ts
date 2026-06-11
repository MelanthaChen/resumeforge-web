export type AnalyticsEvent = {
  event: 'page_view' | 'article_click'
  timestamp: string
  page: string
  page_path: string
  referrer: string
  session: string
  session_id: string
  resume_frameworks: string[]
  article_slug?: string
  article_title?: string
  user_agent: string
}

export type AnalyticsSummary = {
  totalVisits: number
  todayVisits: number
  last7Days: number
  topPages: Array<{ label: string; count: number }>
  topLandingPages: Array<{ label: string; count: number }>
  topArticles: Array<{ label: string; count: number }>
  benchmarkViews: Array<{ label: string; count: number }>
  articleClickThroughs: Array<{ label: string; count: number }>
  topReferrers: Array<{ label: string; count: number }>
  topResumeFrameworks: Array<{ label: string; count: number }>
  mostViewedComparison?: { label: string; count: number }
  mostViewedGuide?: { label: string; count: number }
}
