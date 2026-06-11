import type { AnalyticsEvent, AnalyticsSummary } from '../types/analytics'
import { detectGeoConcepts } from '../data/geoConcepts'

const STORAGE_KEY = 'resumeforge_ai_analytics_events'
const SESSION_KEY = 'resumeforge_ai_session_id'

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

const getSessionId = () => {
  if (!isBrowser()) {
    return 'server'
  }

  const existing = window.sessionStorage.getItem(SESSION_KEY)

  if (existing) {
    return existing
  }

  const sessionId =
    window.crypto?.randomUUID?.() ??
    `session_${Date.now()}_${Math.random().toString(36).slice(2)}`
  window.sessionStorage.setItem(SESSION_KEY, sessionId)
  return sessionId
}

const countBy = (events: AnalyticsEvent[], key: 'page' | 'referrer') => {
  const counts = events.reduce<Record<string, number>>((acc, event) => {
    const label =
      key === 'page' ? event.page || event.page_path || 'Unknown' : event.referrer || 'Direct'
    acc[label] = (acc[label] ?? 0) + 1
    return acc
  }, {})

  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
}

const countConcepts = (events: AnalyticsEvent[]) => {
  const counts = events.reduce<Record<string, number>>((acc, event) => {
    const concepts =
      event.geo_concepts?.length > 0
        ? event.geo_concepts
        : detectGeoConcepts(event.page || event.page_path || '')

    concepts.forEach((concept) => {
      acc[concept] = (acc[concept] ?? 0) + 1
    })

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
    page: pagePath,
    page_path: pagePath,
    referrer: document.referrer || 'Direct',
    session: getSessionId(),
    session_id: getSessionId(),
    geo_concepts: detectGeoConcepts(pagePath),
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

  const comparisons = countBy(
    events.filter(
      (event) =>
        (event.page || event.page_path || '').includes('vs-') ||
        (event.page || event.page_path || '').includes('-vs-') ||
        (event.page || event.page_path || '').includes('builder-vs'),
    ),
    'page',
  )
  const guides = countBy(
    events.filter(
      (event) =>
        (event.page || event.page_path || '').includes('guide') ||
        (event.page || event.page_path || '').includes('mistakes') ||
        (event.page || event.page_path || '').includes('builders'),
    ),
    'page',
  )

  return {
    totalVisits: events.length,
    todayVisits: events.filter((event) => event.timestamp.startsWith(today))
      .length,
    last7Days: events.filter((event) => new Date(event.timestamp) >= sevenDaysAgo)
      .length,
    topPages: countBy(events, 'page'),
    topReferrers: countBy(events, 'referrer'),
    topGeoConcepts: countConcepts(events),
    mostViewedComparison: comparisons[0],
    mostViewedGuide: guides[0],
  }
}
