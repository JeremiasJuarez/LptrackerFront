import { useReducer } from 'react'
import { LptContext } from './LptContext'
import { setSummonerReducer } from './setSummonerReducer'
import { types } from '../types/types'

const initialState = {
  summoner: {}
}


export const LptProvider = ({ children }) => {

  const [ setSummonerState, dispatch ] = useReducer( setSummonerReducer, initialState )

  // const login = ( name = "" ) => {
    
  //   const action = {
  //     type: types.search,
  //     payload: {
  //       id: 'ABC',
  //       name: name
  //     }
  //   }
    
  //   dispatch( action )
  // }

  const provideSummoner = ( summonerName, tag, puuid ) => {

    const action = {
      type: types.search,
      payload: {
        summonerName: summonerName,
        tag: tag,
        puuid: puuid,
      }
    }

    dispatch( action )

  }


  return (
    <LptContext.Provider value={{ 
      ...setSummonerState,
      provideSummoner: provideSummoner
      // login: login
     }}>
        { children }
    </LptContext.Provider>
  )
}
