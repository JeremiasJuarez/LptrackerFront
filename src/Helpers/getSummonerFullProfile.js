import { getMatches, getRankProfile, getSummonerId } from "./fetchApi"
import { filterMatch, filterQueueType } from "./filters"



export const getSummonerFullProfile = async( puuid, server ) => {

    //*esta fn ejecuta todas las demas funciones y debe retornar el perfil completo del summoner

    // try {
    //     const { summonerLong } = await getSummonerId( puuid )
    //     const { id, profileIconId } = summonerLong

    //     const { rankProfile } = await getRankProfile( id )
        
    //     const rankedQueues = filterQueueType(rankProfile)

    //     const { matches } = await getMatches( puuid )


    //     const arrFilterMatchs = await Promise.all( matches.map( async( match ) =>{
    //         return filterMatch( match, puuid )
    //     }))
        
        
    //     const summonerFullProfile = {
    //         id,
    //         profileIconId,
    //         arrFilterMatchs,
    //         rankedQueues
    //     }

    //     return summonerFullProfile
        
    // } catch (error) {
    //     console.log( error )
    //     return null
    // }

    try {
        // Obtener información del summoner
        const { summonerLong } = await getSummonerId(puuid, server);
        if (!summonerLong) {
          throw  new Error("Summoner data not found.");
        }
    
        const { id, profileIconId } = summonerLong;
    
        // Obtener el perfil de ranking
        const { rankProfile } = await getRankProfile(id, server);
        if (!rankProfile) {
          throw new Error("Rank profile not found.");
        }
        const rankedQueues = filterQueueType(rankProfile);
    
        // Obtener las partidas
        const { matches } = await getMatches(puuid);
        if (!matches || matches.length === 0) {
          throw new Error("No matches found.");
        }
    
        // Filtrar las partidas
        const arrFilterMatchs = await Promise.all(
          matches.map(async (match) => {
            return filterMatch(match, puuid);
          })
        );
    
        // Crear el perfil completo del summoner
        const summonerFullProfile = {
          id,
          profileIconId,
          arrFilterMatchs,
          rankedQueues,
        };
    
        return summonerFullProfile;
      } catch (error) {
        // console.error("Error fetching summoner full profile:", error.message || error);
        // Retorna un valor vacío o null en caso de error
        throw error;
      }

}