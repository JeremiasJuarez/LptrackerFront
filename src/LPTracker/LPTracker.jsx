
import '../../styles.css'
import { NavBar, NavBody, LPTBody, Footer } from './components'


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
