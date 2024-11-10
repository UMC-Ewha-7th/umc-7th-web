import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthContextPRovider } from './context/AuthContext.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <AuthContextPRovider>
    <App />
  </AuthContextPRovider>,
)
