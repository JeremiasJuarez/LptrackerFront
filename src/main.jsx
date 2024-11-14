import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { LPTracker } from './LPTracker'

// import '../styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LPTracker />
  </StrictMode>,
)
