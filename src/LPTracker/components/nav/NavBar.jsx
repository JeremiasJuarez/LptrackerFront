
export const NavBar = () => {
  return (
    <div className="row p-2 navWeb flex-row ">

      <div className="col-lg-3 col-md-12 fullLogo">
        <span className="lpLogo">LP</span><span className="trackerLogo">Tracker</span>
      </div>

        <form className="col-lg-3 col-md-12 introLPT">
              <p style={{marginBottom: "-0.2rem", fontSize: "0.8rem", textAlign: "center"}}>Search your profile and start monitoring your league points earnings.</p>
        </form>
      
      <div className="col-lg-6 col-md-12 inputsContainer">
        <div className="row d-inline-flex justify-content-center">


        <div className="col-12">
            <input className="inputSummonerName" type="text" placeholder="Summoner Name" /><input className="inputTag" type="text" placeholder="Tag" /><button className="searchButton"><i className="fa-solid fa-magnifying-glass"></i></button> 
        </div>

        </div>
      </div>
    </div>
  )
}
