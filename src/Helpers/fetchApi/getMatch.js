//--Precisa matchId que se obtiene de getPuuid.js
//--Obtenemos objeto match {}
//--{ match{}, msg, ok }

export const getMatch = async( matchId = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/matchid?matchId=${ matchId }`

    const res = await fetch(url)
    const data = await res.json()
    return data;

}





//? summonerIndex =  match.metadata.participants.indexOf( puuid )

//! match.info.participants[ summonerIndex ]
