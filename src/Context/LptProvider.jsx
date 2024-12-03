import { useMemo, useReducer } from 'react'
import { LptContext } from './LptContext'
import { setSummonerReducer } from './setSummonerReducer'
import { types } from '../types/types'

const initialState = {
  summoner: {},
  fullProfile: {},
  server: ''
}


export const LptProvider = ({ children }) => {

  const [ summonerState, dispatch ] = useReducer( setSummonerReducer, initialState )

  const setFullSummoner = ( fullSummoner ) => {

    const action = {
      type: types.setFullSummoner,
      payload: {
        ...fullSummoner
      }
    }

    dispatch( action )

  }

  const setServer = ( server ) => {

    const action = {
      type: types.setServer,
      payload: server
    }

    dispatch( action )

  }

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
      ...summonerState,
      provideSummoner: provideSummoner,
      setFullSummoner: setFullSummoner,
      setServer: setServer
      // login: login
     }}>
        { children }
    </LptContext.Provider>
  )
}



