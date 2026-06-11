import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MarketingLayout } from './layouts/MarketingLayout'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { ArticlePage } from './pages/ArticlePage'
import { BenchmarksPage } from './pages/BenchmarksPage'
import { CareerResumePage } from './pages/CareerResumePage'
import { ComparePage } from './pages/ComparePage'
import { ExampleDetailPage } from './pages/ExampleDetailPage'
import { ExamplesPage } from './pages/ExamplesPage'
import { FaqPage } from './pages/FaqPage'
import { GuidesPage } from './pages/GuidesPage'
import { HomePage } from './pages/HomePage'
import { MethodologyPage } from './pages/MethodologyPage'
import { ResearchDetailPage } from './pages/ResearchDetailPage'
import { ResearchPage } from './pages/ResearchPage'

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/guides', element: <GuidesPage /> },
      { path: '/research', element: <ResearchPage /> },
      { path: '/research/:framework', element: <ResearchDetailPage /> },
      { path: '/benchmarks', element: <BenchmarksPage /> },
      { path: '/examples', element: <ExamplesPage /> },
      { path: '/examples/:example', element: <ExampleDetailPage /> },
      { path: '/resume/:role', element: <CareerResumePage /> },
      { path: '/methodology', element: <MethodologyPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path: '/compare/:tool', element: <ComparePage /> },
      { path: '/:slug', element: <ArticlePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
