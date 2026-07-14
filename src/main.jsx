import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@fontsource/inter";
import "@fontsource/anton";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

