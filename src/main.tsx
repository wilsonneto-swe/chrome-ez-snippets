import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './shared/App.tsx'
import './shared/theme/theme.scss'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
