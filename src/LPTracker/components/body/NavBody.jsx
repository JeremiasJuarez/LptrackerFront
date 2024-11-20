
export const NavBody = () => {
  
  return (
    <div className="navBody">
      <img src={`https://ddragon.leagueoflegends.com/cdn/14.22.1/img/profileicon/4561.png`} alt="sumIcon" className="sumIcon"/>

      <div className="summonerNameNavBody">
        <span className="text">Robodexo</span>
        <span style={{display: "block"}}>OLP</span>
      </div>

      <div className="rankDiv me-3" style={{width: "100%"}}>
        <img className="rankIcon" src="src/imgs/Rank=None.png" alt="rankIcon"/>
        <span style={{fontSize:"0.9rem", marginTop:"-0.5rem"}}>Diamond IV</span>
      </div>

    </div>
  )
}
