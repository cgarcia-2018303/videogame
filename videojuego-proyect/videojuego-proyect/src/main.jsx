import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NotFoundPage} from './pages/NotFoundPage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { VideojuegoPage } from './pages/VideojuegoPage.jsx'
import { AddVideogame } from './pages/AddVideogame.jsx'
import { UpdateVideogame } from './pages/UpdateVideogame.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <App></App>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: '/',
        element: <VideojuegoPage></VideojuegoPage>
      },
      {
        path: 'add',
        element: <AddVideogame/>
      },
      {
        path: 'update/:id',
        element: <UpdateVideogame/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
