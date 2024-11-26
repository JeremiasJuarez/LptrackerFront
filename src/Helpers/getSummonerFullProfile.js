import { getMatches, getRankProfile, getSummonerId } from "./fetchApi"
import { filterMatch, filterQueueType } from "./filters"



export const getSummonerFullProfile = async( puuid ) => {

    //*esta fn ejecuta todas las demas funciones y debe retornar el perfil completo del summoner
    
    try {
        const { summonerLong } = await getSummonerId( puuid )
        const { id, profileIconId } = summonerLong

        const { rankProfile } = await getRankProfile( id )
        
        const rankedQueues = filterQueueType(rankProfile)

        const { matches } = await getMatches( puuid ) 
        const arrFilterMatchs = await Promise.all( matches.map( async( match ) =>{
            return filterMatch( match, puuid )
        }))

        const summonerFullProfile = {
            id,
            profileIconId,
            arrFilterMatchs,
            rankedQueues
        }

        return summonerFullProfile
        
    } catch (error) {
        console.log( error )
    }

}