import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LptProvider } from './Context/LptProvider'
import { LPTracker } from './LPTracker'

// import '../styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LptProvider>
        <LPTracker />
      </LptProvider>
  </StrictMode>
)
