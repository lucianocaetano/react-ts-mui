import React from 'react'
import { ThemeConfig } from './context/theme.config.tsx'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeConfig>

      <App />
    </ThemeConfig>

  </React.StrictMode>,
)
