import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Get basename from environment variable for PR previews
// REACT_APP_PR_PATH will be set to 'previews/pr-<NUMBER>' for PR builds
const basename = import.meta.env.REACT_APP_PR_PATH ? `/${import.meta.env.REACT_APP_PR_PATH}` : '/'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
