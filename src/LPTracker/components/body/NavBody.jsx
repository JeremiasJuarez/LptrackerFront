import { useContext } from "react"
import { LptContext } from "../../../Context/LptContext"

export const NavBody = () => {


  const { summoner } = useContext( LptContext )
  
  return (
    <div className="navBody">
      <img src="src/imgs/faker.jpg" alt="sumIcon" className="sumIcon"/>

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