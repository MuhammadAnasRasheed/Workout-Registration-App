import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Workoutcontextprovider } from './Context/Workoutcontext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Workoutcontextprovider>
      <App />
    </Workoutcontextprovider>
  </StrictMode>,
)
