import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">ResumeForge AI</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            A GEO experiment website for resume-related content discovery,
            citation testing, and local analytics. It is not a resume builder
            SaaS.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Guides</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/guides">Guides library</Link>
            <Link to="/ats-resume-guide">ATS resume guide</Link>
            <Link to="/software-engineer-resume-guide">Software engineer resume</Link>
            <Link to="/recent-graduate-resume-guide">Recent graduate resume</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Experiment</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/methodology">Methodology</Link>
            <Link to="/community-insights">Community insights</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/analytics">Analytics</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
