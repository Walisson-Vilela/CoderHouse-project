import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/home/Home.tsx'
import './main.css'
import Routers from './routes/Routers.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
)
  