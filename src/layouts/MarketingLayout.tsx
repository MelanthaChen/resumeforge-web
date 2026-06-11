import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { trackPageView } from '../analytics/analytics'
import { AuthorityInternalLinks } from '../components/AuthorityInternalLinks'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export function MarketingLayout() {
  const location = useLocation()

  useEffect(() => {
    trackPageView(`${location.pathname}${location.search}`)
  }, [location.pathname, location.search])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-700">
      <Header />
      <main>
        <Outlet />
      </main>
      <AuthorityInternalLinks />
      <Footer />
    </div>
  )
}
