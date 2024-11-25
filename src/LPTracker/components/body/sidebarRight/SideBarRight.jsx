
export const SideBarRight = () => {
  

  //*Aca iria un map() llenando los datos de las ultimas 5 partidas
  return (
    <section className="col-lg-4 col-12-md sideBarRight">
      <div className="row col-12">

        <h3 style={{ color: "white", marginTop: "0.8rem" }}>Match History</h3>

        <div className="row matchContainer">

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Orianna.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+20</span> LP</p>
              <p>10/0/9</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Ryze.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+18</span> LP</p>
              <p>16/0/10</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Ryze.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+21</span> LP</p>
              <p>25/1/20</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          
          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Galio.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+25</span> LP</p>
              <p>8/3/15</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Leblanc.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+18</span> LP</p>
              <p>7/4/16</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

          <div className="matchCard win">
            <img className="img-fluid champImg" src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Orianna.png" alt="" />
            <div className="matchInfo">
              <p className="matchLpWin">Victory <span className="matchLpWin">+20</span> LP</p>
              <p>11/3/6</p>
              <p>Ranked SoloQ</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
