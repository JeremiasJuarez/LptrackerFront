import { Footer, LPTBody, NavBar, NavBody } from "./components"
import '../../styles.css'

export const LPTracker = () => {

  return (
    <div className="container-fluid LPTRacker">

      <NavBar/>

      <div className="container bodyContainer">
      <NavBody/>
      <LPTBody/>
      <div></div>
      </div>

      <Footer/>

    </div>

  )
}
