import { useContext, useEffect, useState } from "react"
import { LptContext } from "../../../Context/LptContext"
import { getSummonerId } from "../../../Helpers/fetchApi"

export const NavBody = () => {


  const { summoner } = useContext( LptContext )

  const [{summonerLong}, setsummonerLong] = useState({})

  useEffect(() => {

    if (!summoner?.puuid) return
    
    const getSum = async() => {
      try {
        const sum = await getSummonerId( summoner.puuid )
        setsummonerLong( sum )
      } catch (error) {
        console.log('abc')
      }
    }

    getSum()

  }, [summoner.puuid])

  const sumIconUrl = `https://ddragon.leagueoflegends.com/cdn/14.22.1/img/profileicon/${ summonerLong?.profileIconId }.png`
  const defaultIconUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png'

  return (
    <div className="navBody">
      <img src={ sumIconUrl ? sumIconUrl : defaultIconUrl } alt="sumIcon" className="sumIcon"/>

      <div className="summonerNameNavBody">
        <span className="text">{ summoner?.summonerName || 'Hide on bush' }</span>
        <span style={{display: "block"}}>{ summoner?.tag || '#KR1'}</span>
      </div>

      <div className="rankDiv me-3" style={{width: "100%"}}>
        <img className="rankIcon" src="src/imgs/Rank=Challenger.png" alt="rankIcon"/>
        <span style={{fontSize:"0.9rem", marginTop:"-0.5rem", marginRight: '0.3rem'}}>Challenger</span>
      </div>

    </div>
  )
}

// {`https://ddragon.leagueoflegends.com/cdn/14.22.1/img/profileicon/4561.png`}