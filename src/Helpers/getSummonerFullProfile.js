import { getRankProfile, getSummonerId } from "./fetchApi"


export const getSummonerFullProfile = async( puuid, a ) => {

    //*esta fn ejecuta todas las demas funciones y debe retornar el perfil completo del summoner
    // const { summonerLong } = await getSummonerId( puuid )
    // const { id, accountId, profileIconId } = summonerLong
    
    // const res = await getRankProfile( id )

    // if( res.riotError === "Summoner has not played any ranked games recently" ){
    //     return res.riotError
    // }else{
    //     console.log( res )
    // }

    console.log( {puuid, a} )

}