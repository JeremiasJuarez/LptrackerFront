import { getPuuid } from "./fetchApi"


export const requestApi = async( summonerName, tagLine ) => {

    //*esta fn ejecuta todas las demas funciones y debe retornar el perfil completo del summoner

    const { puuid } = await getPuuid( summonerName, tagLine )



    return {
        summoner,
        lp,
        matchHistory
    }
    //* summoner deberia ser un objeto {}
    //* lp un numero 123456789
    //*matchhistory es un array []
}