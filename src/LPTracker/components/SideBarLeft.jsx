
export const SideBarLeft = () => {
  return (
    <section className="col-lg-8 col-md-12 sideBarLeft"> 
    
      <div className="container-fluid">
        
        <div className="row buttonContainer">
          <button className="countButton">Start Count</button>
        </div>
        
        <div className="row currentLPContainer">
          <span className="currentLP">Current LP</span>
        </div>

        <div className="row lpCountContianer">
          <span className="lpCount">10</span>
        </div>
      </div>


    </section>
  )
}
