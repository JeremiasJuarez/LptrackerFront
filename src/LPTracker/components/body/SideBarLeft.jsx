

export const SideBarLeft = () => {
  return (
    <section className="col-lg-8 col-md-12 sideBarLeft"> 
    
      <div className="container-fluid">
        
        
        <div className="row currentLPContainer">
          <span className="lpBalance">LP Balance</span>
          <button className="refreshButton">
            Refresh <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>

        <div className="row lpCountContianer">
          <span className="lpCount lpCountWin"> +2928 </span>
        </div>

        <div className="row trackCount">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span>Start</span>
            <br />
            <span>Diamond III { 0 } LP</span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span>Current</span>
            <br />
            <span>Challenger { 2128 } LP</span>
          </div>
        </div>

        <div className="row buttonContainer">
          <button className="countButton">Track<i className="fa-solid fa-play ps-2"></i></button>
        </div>

        <div className="col-12 WLCount">
            <span> Wins: 99 | Losses: 0 </span>
        </div>


      </div>


    </section>
  )
}
