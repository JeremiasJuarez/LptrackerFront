import React, { useContext } from 'react'
import { LptContext } from '../../../Context/LptContext'

export const EmptyLPTBody = () => {

  const { provideSummoner, setFullSummoner, setServer } = useContext( LptContext )


  const onClickStreamer = (e) => {

    const selecteStreamer =  e.currentTarget.innerText

    const name = 'JUNG DIFFFF'
    const tag = 'na1'
    const puuid = 'Ivvr5RrqcIG_jmcl8ZiQrRYhfux6LJfVizqXrbisJpcR_pNGNvdMD_DJsosclzYvCZSIeVvcSK4tRA'
    const server = 'NA1'

    // //*viene de llamar getpuuid, teniendo los datos los puedo hardcodear
    //! provideSummoner( name, tag, puuid )
    // //*setserver viene de tomar el server del boton que aca puedo directamente pasarle el server
    //! setServer( server )
    // //*Fullsumoner viene de getFullsummoner
    //! setFullSummoner( fullSummoner )

    //TODO: hacer funcion aparte y archivo aparte 
    //TODO: con los datos de los 5 streamers( fn debe setear datos en el context)
    //TODO: simplemente llamar funcion con los datos de streamer


 }


  return (
    <>
      <div className='emptyBody'>

          <div className='emptyLeft'>
            <div>
                <span>Search your profile</span>
            </div>
            <div>
                <span>Find how much league points have you earn in your latest games</span>
            </div>
            <div>
                <span>See your recent matchs</span>
            </div>
          </div>

          <div className='emptyRight'>
            <img src="src/imgs/LPTdemo.png" alt="lptdemo" />
          </div>

      </div>

      <div className='famousProfiles'>
        <div>
          <p>See some famous streamers profiles</p>
        </div>
        <div className='profiles'>
          <div onClick={ onClickStreamer } value={ 'Trick2g' }> 
            <p>Trick2g</p> 
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="udyrIcon" />
          </div>
          <div onClick={ onClickStreamer } value={ 'KayPea' }>
            <p>KayPea</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Lux.png" alt="luxIcon" />
          </div>
          <div onClick={ onClickStreamer } value={ 'Tyler1' }> 
            <p>Tyler1</p> 
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Draven.png" alt="dravenIcon" />
          </div>
          <div onClick={ onClickStreamer } value={ 'Annie' }>
            <p>Annie</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Akali.png" alt="akaliIcon" />
          </div>
          <div onClick={ onClickStreamer } value={ 'TFBlade' }>
            <p>TFBlade</p>
            <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Jax.png" alt="jaxIcon" />
          </div>
        </div>
      </div>
    
    </>
  )
}

//*Guardar puuid de famousprofiles en caso de que cambien su nombre de cuenta
//* https://www.op.gg/summoners/euw/Peatri-Pea kaypea
//* https://www.op.gg/summoners/lan/MindCrzy-LAN?hl=es_ES annie
