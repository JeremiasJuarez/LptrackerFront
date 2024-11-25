//--Precisa summonerId que se obtiene de getSummonerId.js
//--Obtenemos perfil de ranked [{}]
//--{ leagueId, queueType, tier, rank, summonerId, leaguePoints, wins, losses, 
//--veteran, inactive, freshBlood, hotStreak } 

export const getRankProfile = async( summonerId = "" ) => {

    const url = `https://lollpt-production.up.railway.app/api/rankprofile?summonerId=${ summonerId }`

    try {
        
        const res = await fetch(url)
        const data = await res.json()
        console.log( data )

        
        return data;

    } catch (error) {
        return error
    }





}

//para acceder al arr ej: data.rankProfile[0].leaguePoints