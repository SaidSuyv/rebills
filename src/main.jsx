import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'virtual:uno.css'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import DashboardLayout from './layouts/dashboard.layout'
import DashboardIndex from './views/dashboard/dashboard.index'

const router = createBrowserRouter([
    {
        path: '',
        element: <DashboardLayout/>,
        children: [
            {
                index: true,
                element: <DashboardIndex />
            }
        ]
    }
], { basename: '/rebills' });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ router }/>
  </StrictMode>,
)
