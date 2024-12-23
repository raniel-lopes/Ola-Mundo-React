import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoates from './Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoates />
  </StrictMode>,
)
