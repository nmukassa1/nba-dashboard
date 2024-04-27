import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import './scss/styles.css'
import Standings from './pages/Standings.jsx'
import Games from './pages/Games.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index  element={<Home />}/>
      <Route path="/standings" element={<Standings />}/>
      <Route path="/games" element={<Games />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
