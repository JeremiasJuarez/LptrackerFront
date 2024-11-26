
export const SummonerNotFound = ( {sn, st } ) => {

  return(
    <div className="notFoundComponent"><p><i className="fa-solid fa-circle-exclamation"></i> {`Summoner ${sn}#${st} not found`}</p></div>
  )
}
