//--Precisa puuid que se obtiene de getPuuid.js
//--Obtenemos summonerID ( encryptedSummonerId ) y datos adicionales de la cuenta
//--{ id, accountId, puuid, profileIcon, revisionDate, summonerLevel }

export const getSummonerId = async( puuid = "" ) => {

    // HHIX2TumjofbHQVDFiiv0Fzrhhs5WOW2xLzhw_PmGIYUjE3usE5MikyZ9-gZucyQEV92-9DpanZiwg
    const url = `https://lollpt-production.up.railway.app/api/id?puuid=${ puuid }`
    const res = await fetch(url)
    const data = await res.json()

    return data;

}
