//--Precisa gameName y tagLine que obtenemos del form
//--Obtenemos puuid, nombre de invocador y tag
//--{ puuid, gameName, tagLine }

export const getPuuid = async( gameName = "" , tagLine = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/puuid?gameName=${ gameName }&tagLine=${ tagLine }`

    const res = await fetch(url)
    const data = await res.json()
    return data;

}