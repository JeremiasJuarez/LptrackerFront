
export const SummonerNotFound = ( {summonerName, tag, error}  ) => {

  return(
    <div className="notFoundComponent">
      <p className="m-1">
        <i className="fa-solid fa-circle-exclamation"></i> {`Summoner ${summonerName}#${tag} not found`}
      </p>
      <p className="m-1">
        {error.substr(6)}
      </p>
    </div>
  )
}
