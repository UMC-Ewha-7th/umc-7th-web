// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TodoContextProvider from '../context/ToDoContext.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
    <TodoContextProvider>
        <App />
    </TodoContextProvider>
)