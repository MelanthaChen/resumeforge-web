import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MarketingLayout } from './layouts/MarketingLayout'
import { AnalyticsPage } from './pages/AnalyticsPage'
import { ArticlePage } from './pages/ArticlePage'
import { FaqPage } from './pages/FaqPage'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter([
  {
    element: <MarketingLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/faq', element: <FaqPage /> },
      { path: '/analytics', element: <AnalyticsPage /> },
      { path: '/:slug', element: <ArticlePage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
