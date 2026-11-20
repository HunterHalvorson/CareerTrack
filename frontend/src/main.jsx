import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

const router = createBrowserRouter([
  {path: '/', element: <LoginPage/>},
  {path: '/dashboard', element: <Dashboard/>},
  {path: "*", element: <NotFoundPage/>}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
