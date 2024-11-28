
export const SummonerNotFound = ( {summonerName, tag}  ) => {

  return(
    <div className="notFoundComponent"><p><i className="fa-solid fa-circle-exclamation"></i> {`Summoner ${summonerName}#${tag} not found`}</p></div>
  )
}
