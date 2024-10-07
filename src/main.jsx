import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import WalletConnection from "./components/WalletConnection.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WalletConnection>
    <App />
    </WalletConnection>
  </StrictMode>,
)
