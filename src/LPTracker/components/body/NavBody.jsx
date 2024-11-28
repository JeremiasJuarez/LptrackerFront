import { useContext, useEffect, useState } from "react"
import { LptContext } from "../../../Context/LptContext"
import { getSummonerFullProfile } from "../../../Helpers/getSummonerFullProfile"
import { LoadingBody } from "../Loaders/LoadingBody"
import { ProfileIconLoader } from "../Loaders/ProfileIconLoader"
import { RankIconLoader } from "../Loaders/RankIconLoader"

export const NavBody = () => {

  //--Tomar puuid del context y funcion para establecer el fullprofile
  const { summoner, setFullSummoner, fullProfile } = useContext(LptContext)
  const [actProfile, setActProfile] = useState({})


  useEffect(() => {

    if (!summoner?.puuid) return;

    const fetchFullSummoner = async (puuid) => {
      try {
        const fullSummonerData = await getSummonerFullProfile(puuid);
        setFullSummoner(fullSummonerData);
        console.log(fullSummonerData)
        setActProfile(fullSummonerData)
      } catch (error) {
        console.error("Error fetching full summoner profile:", error);
      }
    }
    fetchFullSummoner(summoner.puuid);

  }, [])

  console.log(fullProfile?.rankedQueues?.tier)

  const defaultIconUrl = 'https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/-1.png'
  const iconUrl = `https://ddragon.leagueoflegends.com/cdn/14.22.1/img/profileicon/${actProfile?.profileIconId}.png`

  const capitalize = (text) => {
    if (!text) return text; // Si el texto está vacío o es undefined, devuelve tal cual
    const firstLetter = text.charAt(0).toUpperCase(); // Convierte la primera letra a mayúsculas
    const rest = text.slice(1).toLowerCase(); // Convierte el resto a minúsculas
    return firstLetter + rest; // Combina la primera letra y el resto
  };

  const league = (act) => {
    if (act?.rankedQueues?.tier === 'unranked') {
      return 'unranked'
    }
    if (act?.rankedQueues?.soloqProfile) {
      return capitalize(act?.rankedQueues?.soloqProfile.tier)
    }
    if (act?.rankedQueues?.queueType === 'RANKED_SOLO_5x5') {
      return capitalize(act?.rankedQueues?.tier)
    }

    if( act?.rankedQueues && !act.rankedQueues.soloqProfile ){
      console.log( act )
      return 'Unranked'
    }
  }

  const rank = ( act, league ) => {
    if ( league === 'Master' || 'Grandmaster' || 'Challenger'){
      return ''
    }
    if (act?.rankedQueues?.tier === 'unranked') {
      return 'unranked'
    }
    if (act?.rankedQueues?.soloqProfile) {
      return capitalize(act?.rankedQueues?.soloqProfile.rank)
    }
    if (act?.rankedQueues?.queueType === 'RANKED_SOLO_5x5') {
      return capitalize(act?.rankedQueues?.rank)
    }
    if( act?.rankedQueues && !act.rankedQueues.soloqProfile ){
      console.log( act )
      return ''
    }

  }

  const rankIcon = (league) => {

    switch (league) {
      case 'Unranked':
        return "src/imgs/Rank=Unranked.png"
      case "unranked":
        return "src/imgs/Rank=Unranked.png"
      case "Iron":
        return "src/imgs/Rank=Iron.png";
      case "Bronze":
        return "src/imgs/Rank=Bronze.png"
      case "Silver":
        return "src/imgs/Rank=Silver.png"
      case "Gold":
        return "src/imgs/Rank=Gold.png"
      case "Platinum":
        return "src/imgs/Rank=Platinum.png"
      case "Emerald":
        return "src/imgs/Rank=Emerald.png"
      case "Diamond":
        return "src/imgs/Rank=Diamond.png"
      case "Master":
        return "src/imgs/Rank=Master.png"
      case "Grandmaster":
        return "src/imgs/Rank=Grandmaster.png"
      case "Challenger":
        return "src/imgs/Rank=Challenger.png"
      default:
        break;
    }

  }

  return (

    <>

      {
        !actProfile?.id && !summoner.puuid ? <LoadingBody />
          : (
            <div className="navBody">

              {
                !actProfile.id ? <ProfileIconLoader />
                  : <img src={actProfile?.profileIconId ? iconUrl : defaultIconUrl} alt="sumIcon" className="sumIcon" />
              }

              <div className="summonerNameNavBody">
                <span className="text">{summoner?.summonerName || 'Hide on bush'}</span>
                <span style={{ display: "block" }}>{summoner?.tag || '#KR1'}</span>
              </div>

              <div className="d-flex flex-row justify-content-end rankDiv" style={{ width: "100%" }}>

                {
                  !actProfile.id ? <RankIconLoader />
                    : (
                      <div className="d-flex flex-column me-2">
                        <img className="rankIcon" src={actProfile?.profileIconId ? rankIcon(league(actProfile)) : defaultIconUrl} alt="rankIcon" />
                        <div className="d-flex justify-content-center align-items-center">

                          <span style={{ fontSize: "0.9rem", marginTop: "-0.5rem", textAlign: 'center'}}>{ league(actProfile) } { rank( actProfile, league(actProfile) ) }</span>

                        </div>
                      </div>
                    )
                }

              </div>

            </div>)

      }

    </>
  )
}

