import { useContext, useEffect, useState } from 'react'
import '../../styles.css'
import { NavBar, NavBody, LPTBody, Footer, EmptyLPTBody } from './components'
import { LptContext } from '../Context/LptContext'
import { LoadingBody } from './components/Loaders'
import { getSummonerId } from '../Helpers/fetchApi'

//?LoadingBody
//*161 usecontext


export const LPTracker = () => {

  const { fullProfile } = useContext( LptContext )

  const [showComponent, setShowComponent] = useState(null);

  // useEffect(() => {
  //   if (!summoner.summonerName) {

  //     setShowComponent('Home');
  //   }
  // }, [summoner.summonerName]);

  // useEffect(() => {
  //   if( summoner.summonerName )
      
  //     setShowComponent('Loading')

  // }, [summoner.summonerName])

  // useEffect(() => {
  //   if( showComponent === 'Loading' )

  //     setTimeout(() => {
  //       setShowComponent('Body')
  //     }, 1000);
      
  // }, [showComponent])

  useEffect(() => {
    // Si no hay nombre de invocador, se muestra 'Home'
    if (!fullProfile?.profileIconId) {
      setShowComponent('Home');
      return;
    }

    // Si hay nombre de invocador, se muestra 'Loading'
    setShowComponent('Loading');

    // Después de 1 segundo, cambia a 'Body'
    const timer = setTimeout(() => {
      setShowComponent('Body');
    }, 1000);

    // Limpia el timeout
    return () => clearTimeout(timer);

  }, [fullProfile.profileIconId]);


  return (
    <div className="container-fluid LPTRacker">
      
      <NavBar/>

      <div className="container bodyContainer">

      {   
        showComponent === 'Home' ? <EmptyLPTBody/> 
        : showComponent === 'Loading' ? <LoadingBody/> 
        : showComponent === 'Body' ? (<><NavBody/><LPTBody/></>) 
        : <LoadingBody/>
      }
      
      </div>

      <Footer/>

    </div>

  )
}

//* mostrar este componente en ruta /robodexo#olp
//* cambiar eventualmente el settimeout por una funcion que este pendiente de los valores en el context
//* se debera mostrar el loading hasta que esten todos los valores
        //? : showComponent === 'Body' ? (<><NavBody/><LPTBody/></>) mostrar cuando termine de implementar la opciuon de servidor
