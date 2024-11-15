

export const NavBody = () => {
  return (
    <div className="navBody">
      <img src="src/imgs/evelyn.png" alt="sumIcon" className="sumIcon"/>

      <div style={{ marginLeft: "1rem" }}>
        <span style={{display: "block", marginRight: "100%"}}>ROBODEXO</span>
        <span style={{display: "block"}}>OLP</span>
      </div>

      <div className="rankDiv" style={{width: "100%"}}>
        <img className="rankIcon" src="src/imgs/Rank=Diamond.png" alt="rankIcon"/>
        <span style={{fontSize:"0.9rem", marginTop:"-0.5rem"}}>Diamond IV</span>
      </div>

    </div>
  )
}
