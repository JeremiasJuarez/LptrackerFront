
export const SideBarRight = () => {


  //*Aca iria un map() llenando los datos de las ultimas 5 partidas
  return (
    <section className="col-lg-4 col-12-md sideBarRight">
      <div className="row col-12">

        <h3 style={{ color: "white", marginTop: "0.8rem" }}>Match History</h3>

        <div className="row matchContainer">

          <div className="card mb-1 mt-1 win matchCard col-lg-12 col-sm-12" >
            <div className="row g-0">
              <div className="col-3">
                <img src="https://ddragon.leagueoflegends.com/cdn/14.22.1/img/champion/Udyr.png" className="img-fluid rounded-start p-1 imgMatch" alt="matchInfo" />
              </div>
              <div className="col-9 d-flex">
                <div className="card-body cardText">
                  <p className="card-title" style={{ marginBottom: "-0.5rem" }}>Victory</p>
                  <p className="card-title"> 10/09/11 </p>
                  <p className="card-title"> Ranked SoloQ </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}
