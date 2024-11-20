//--Precisa puuid que se obtiene de getPuuid.js
//--Obtenemos array de matchs ( los ultimos 5 => &count=5 al final del url )
//--{ matches: [ matchId x 5 ], msg, ok }

export const getMatches = async( puuid = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/matches?puuid=${ puuid }&count=5`

    const res = await fetch(url)
    const data = await res.json()
    return data;

}