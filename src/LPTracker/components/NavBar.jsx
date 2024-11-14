
export const NavBar = () => {
  return (
    <div className="row p-2 border navWeb">
      <div className="col-lg-4 col-m-12">LPTRACKER</div>
      <div className="col-lg-8 col-m-12 text-left">
        <input className="inputSummonerName" type="text" placeholder="Summoner Name" /> <input className="inputTag" type="text" placeholder="Tag" /> <button><i className="fa-solid fa-magnifying-glass"></i></button> 
      </div>
    </div>
  )
}
