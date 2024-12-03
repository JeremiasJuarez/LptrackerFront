
export const EmptyLPTracker = () => {
  const truck = getSummonerFullProfile('Ivvr5RrqcIG_jmcl8ZiQrRYhfux6LJfVizqXrbisJpcR_pNGNvdMD_DJsosclzYvCZSIeVvcSK4tRA')
  console.log( truck )
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