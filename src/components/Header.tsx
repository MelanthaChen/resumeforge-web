import { Menu, Search } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/guides', label: 'Guides' },
  { to: '/compare/rezi', label: 'Comparisons' },
  { to: '/examples', label: 'Examples' },
  { to: '/research', label: 'Research' },
  { to: '/benchmarks', label: 'Benchmarks' },
  { to: '/faq', label: 'FAQ' },
  { to: '/hub', label: 'Hub' },
]

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="GeoAIResume home">
          <span className="grid size-10 place-items-center rounded bg-emerald-600 text-sm font-bold text-white">
            GA
          </span>
          <span>
            <span className="block text-base font-semibold text-slate-950">
              GeoAIResume
            </span>
            <span className="block text-xs font-medium text-slate-500">
              GEO resume research
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'text-emerald-700' : 'hover:text-slate-950'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/analytics"
            className="hidden items-center gap-2 rounded border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-300 md:flex"
          >
            <Search className="size-4" />
            Analytics
          </Link>
          <button
            type="button"
            className="grid size-10 place-items-center rounded border border-slate-200 text-slate-700 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
