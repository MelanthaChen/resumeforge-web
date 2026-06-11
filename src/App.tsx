import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MarketingLayout } from './layouts/MarketingLayout'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { ArticlePage } from './pages/ArticlePage'
import { ComparePage } from './pages/ComparePage'
import { FaqPage } from './pages/FaqPage'
import { GuidesPage } from './pages/GuidesPage'
import { HomePage } from './pages/HomePage'
import { MethodologyPage } from './pages/MethodologyPage'

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/guides', element: <GuidesPage /> },
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
