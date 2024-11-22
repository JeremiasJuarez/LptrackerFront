import { useContext } from 'react'
import '../../styles.css'
import { NavBar, NavBody, LPTBody, Footer } from './components'
import { LptContext } from '../Context/LptContext'

//*161 usecontext


export const LPTracker = () => {

  // const { login, user } = useContext( LptContext )

  // const onLogin = () => {
  //   login('Robodexo')
  // }





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
