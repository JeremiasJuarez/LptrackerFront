

export const SideBarLeft = () => {
  return (
    <section className="col-lg-8 col-md-12 sideBarLeft"> 
    
      <div className="container-fluid">
        
        <div className="row buttonContainer">
          <button className="countButton">Start Count</button>
        </div>
        
        <div className="row currentLPContainer">
          <span className="lpBalance">LP Balance</span>
        </div>

        <div className="row lpCountContianer">
          <span className="lpCount">10</span>
        </div>

        <div className="row trackCount">
          <div className="col-6">
            <span>Start</span>
            <br />
            <span>Emerald I { 80 } LP</span>
          </div>
          <div className="col-6">
            <span>Current</span>
            <br />
            <span>Diamond IV { 10 } LP</span>
          </div>
        </div>
      </div>


    </section>
  )
}
