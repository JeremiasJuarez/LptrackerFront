
export const SideBarRight = () => {


  //*Aca iria un map() llenando los datos de las ultimas 5 partidas
  return (
    <section className="col-lg-4 col-12-md sideBarRight">
      <h3 style={{color: "white", marginTop: "0.8rem"}}>Match History</h3>

      <div className="card mb-3 mt-3 loss matchCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="src/imgs/udyr.jpg" className="img-fluid rounded-start p-1" alt="matchInfo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Defeat</h4>
              <h5 className="card-title"> 10/09/11 </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-3 win matchCard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="src/imgs/udyr.jpg" className="img-fluid rounded-start p-1" alt="matchInfo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Victory</h4>
              <h5 className="card-title"> 10/09/11 </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-3 remake matchCard" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="src/imgs/udyr.jpg" className="img-fluid rounded-start p-1" alt="matchInfo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Remake</h4>
              <h5 className="card-title"> 10/09/11 </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-3 loss matchCard" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="src/imgs/udyr.jpg" className="img-fluid rounded-start p-1" alt="matchInfo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Defeat</h4>
              <h5 className="card-title"> 10/09/11 </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mt-3 win" >
        <div className="row g-0">
          <div className="col-md-4">
            <img src="src/imgs/udyr.jpg" className="img-fluid rounded-start p-1" alt="matchInfo"/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h4 className="card-title">Victory</h4>
              <h5 className="card-title"> 10/09/11 </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
