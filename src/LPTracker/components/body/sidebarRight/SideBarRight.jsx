
export const SideBarRight = () => {
  

  //*Aca iria un map() llenando los datos de las ultimas 5 partidas
  return (
    <section className="col-lg-4 col-12-md sideBarRight">
      <div className="row col-12">

        <h3 style={{ color: "white", marginTop: "0.8rem" }}>Match History</h3>

        <div className="row matchContainer">

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+50</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard remake">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpRemake">Remake <span className="matchLpRemake">+0</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard loss">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpLoss">Defeat <span className="matchLpLoss">-35</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          
          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+50</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+50</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard loss">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpLoss">Defeat <span className="matchLpLoss">-35</span> LP</p>
              <p>10/10/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
