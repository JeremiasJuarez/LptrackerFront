
export const NavBar = () => {
  return (
    <div className="row p-2 navWeb">
      <div className="col-lg-4 col-m-12"><span className="lpLogo">LP</span><span className="trackerLogo">Tracker</span></div>
      <div className="col-lg-8 col-m-12 text-left">
        <form>
          <input className="inputSummonerName" type="text" placeholder="Summoner Name" /><input className="inputTag" type="text" placeholder="Tag" /><button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button> 
        </form>
      </div>
    </div>
  )
}
