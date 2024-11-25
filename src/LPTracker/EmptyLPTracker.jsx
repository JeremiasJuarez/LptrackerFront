
export const EmptyLPTracker = () => {
  return (
    <div className="container-fluid LPTRacker">
      
    <NavBar/>

    <div className="container bodyContainer">
    <EmptyLPTBody/>
    {/* <NavBody/>
    <LPTBody/> */}
    </div>

    <Footer/>

  </div>
  )
}

{/* {
  summoner.summonerName? (<><NavBody/><LPTBody/></>) : (<EmptyLPTBody/>)
} */}

//* mostrar este componente en ruta /