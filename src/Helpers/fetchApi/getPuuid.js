//--Precisa gameName y tagLine que obtenemos del form
//--Obtenemos puuid, nombre de invocador y tag
//--{ puuid, gameName, tagLine }

export const getPuuid = async( gameName = "" , tagLine = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/puuid?gameName=${ gameName }&tagLine=${ tagLine }`

    try {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error('Failed to fetch data');
          }

        const data = await res.json()
        return data;
    } catch (error) {
        throw error
    }


}