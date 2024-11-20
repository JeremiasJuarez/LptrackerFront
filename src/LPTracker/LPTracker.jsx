import '../../styles.css'
import { NavBar, NavBody, LPTBody, Footer } from './components'

//*161 usecontext

export const LPTracker = () => {

  return (
    <div className="container-fluid LPTRacker">

      <NavBar/>

      <div className="container bodyContainer">
      <NavBody/>
      <LPTBody/>
      </div>

      <Footer/>

    </div>

  )
}
