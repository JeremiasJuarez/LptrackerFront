//--Precisa un match {} obtenido del llamado de getMatch.js
//--Retornamos informacion filtrada que necesitamos para la app
//--{ champ, kda, win/loss }

import { getMatch } from "../fetchApi/getMatch"

export const filterMatch = async (matchId = "", puuid = "") => {

  try {

    const { match } = await getMatch(matchId)

    if (!match) {
      throw new Error('Match not found', error)
    }

    const summonerIndex = match.metadata.participants.indexOf(puuid)

    const summonerInfo = match.info.participants[summonerIndex]
    const champ = summonerInfo.championName
    const champId = summonerInfo.championId
    const gameMode = match.info.gameMode
    const kills = summonerInfo.kills
    const deaths = summonerInfo.deaths
    const assists = summonerInfo.assists
    const isRemake = (match.info.gameDuration < 240 ? true : false)
    const result = (summonerInfo.win === true ? 'Win' : "Loss")

    let queueType = "";
    if (match.info.queueId === 420) {
      queueType = "Ranked Solo Q";
    } else if (match.info.queueId === 440) {
      queueType = "Ranked Flex";
    } else if (match.info.queueId === 450) {
      queueType = "ARAM";
    } else if (match.info.queueId === 400) {
      queueType = "Normal Game";
    } else {
      queueType = "Normal Game";
    }

    const matchInfo = { kills, deaths, assists, isRemake, result, champ, champId, gameMode, queueType }
    return matchInfo

  } catch (error) {
    return { error: error.message || "An unexpected error occurred" }
  }

}