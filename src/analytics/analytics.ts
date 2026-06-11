import type { AnalyticsEvent, AnalyticsSummary } from '../types/analytics'

const STORAGE_KEY = 'resumeforge_ai_analytics_events'

const isBrowser = () => typeof window !== 'undefined'

const readEvents = (): AnalyticsEvent[] => {
  if (!isBrowser()) {
    return []
  }

  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return value ? (JSON.parse(value) as AnalyticsEvent[]) : []
  } catch {
    return []
  }
}

const writeEvents = (events: AnalyticsEvent[]) => {
  if (!isBrowser()) {
    return
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
}

const countBy = (events: AnalyticsEvent[], key: 'page_path' | 'referrer') => {
  const counts = events.reduce<Record<string, number>>((acc, event) => {
    const label = event[key] || 'Direct'
    acc[label] = (acc[label] ?? 0) + 1
    return acc
  }, {})

  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
}

export const trackPageView = (pagePath: string) => {
  if (!isBrowser()) {
    return
  }

  const event: AnalyticsEvent = {
    event: 'page_view',
    timestamp: new Date().toISOString(),
    page_path: pagePath,
    referrer: document.referrer || 'Direct',
    user_agent: window.navigator.userAgent,
  }

  writeEvents([...readEvents(), event].slice(-1000))
}

export const getAnalyticsEvents = () => readEvents()

export const getAnalyticsSummary = (): AnalyticsSummary => {
  const events = readEvents()
  const now = new Date()
  const today = now.toISOString().slice(0, 10)
  const sevenDaysAgo = new Date(now)
  sevenDaysAgo.setDate(now.getDate() - 6)
  sevenDaysAgo.setHours(0, 0, 0, 0)

  return {
    totalVisits: events.length,
    todayVisits: events.filter((event) => event.timestamp.startsWith(today))
      .length,
    last7Days: events.filter((event) => new Date(event.timestamp) >= sevenDaysAgo)
      .length,
    topPages: countBy(events, 'page_path'),
    topReferrers: countBy(events, 'referrer'),
  }
}
