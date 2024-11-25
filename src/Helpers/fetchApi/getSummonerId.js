//--Precisa puuid que se obtiene de getPuuid.js
//--Obtenemos summonerID ( encryptedSummonerId ) y datos adicionales de la cuenta
//--{ id, accountId, puuid, profileIcon, revisionDate, summonerLevel }

export const getSummonerId = async( puuid = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/id?puuid=${ puuid }`
    const res = await fetch(url)
    const data = await res.json()
    return data;

}
