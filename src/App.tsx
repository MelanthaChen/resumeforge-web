import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MarketingLayout } from './layouts/MarketingLayout'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { BenchmarksPage } from './pages/BenchmarksPage'
import { BenchmarkFrameworkPage } from './pages/BenchmarkFrameworkPage'
import { CareerResumePage } from './pages/CareerResumePage'
import { ComparePage } from './pages/ComparePage'
import { ExampleDetailPage } from './pages/ExampleDetailPage'
import { ExamplesPage } from './pages/ExamplesPage'
import { EntitiesPage } from './pages/EntitiesPage'
import { EntityDetailPage } from './pages/EntityDetailPage'
import { FaqPage } from './pages/FaqPage'
import { GuidesPage } from './pages/GuidesPage'
import { HubPage } from './pages/HubPage'
import { HomePage } from './pages/HomePage'
import { MethodologyPage } from './pages/MethodologyPage'
import { ResearchDetailPage } from './pages/ResearchDetailPage'
import { ResearchPage } from './pages/ResearchPage'
import { TerminologyPage } from './pages/TerminologyPage'
import { ProgrammaticLandingPage } from './pages/ProgrammaticLandingPage'

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/guides', element: <GuidesPage /> },
      { path: '/hub', element: <HubPage /> },
      { path: '/research', element: <ResearchPage /> },
      { path: '/research/terminology', element: <TerminologyPage /> },
      { path: '/research/:framework', element: <ResearchDetailPage /> },
      { path: '/benchmarks', element: <BenchmarksPage /> },
      { path: '/benchmarks/:framework', element: <BenchmarkFrameworkPage /> },
      { path: '/entities', element: <EntitiesPage /> },
      { path: '/entities/:entity', element: <EntityDetailPage /> },
      { path: '/examples', element: <ExamplesPage /> },
      { path: '/examples/:example', element: <ExampleDetailPage /> },
      { path: '/resume/:role', element: <CareerResumePage /> },
      { path: '/methodology', element: <MethodologyPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path: '/compare/:tool', element: <ComparePage /> },
      { path: '/:slug', element: <ProgrammaticLandingPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
