import { useContext, useEffect, useState } from "react"
import { LptContext } from "../../../../Context/LptContext"

export const SideBarRight = () => {
  
  const { fullProfile } = useContext( LptContext )
  const [ profile, setProfile] = useState({})

  useEffect(() => { 
    if( !fullProfile ){ return }
    setProfile( fullProfile )
  }, [ fullProfile ])

  const matches = profile?.arrFilterMatchs
  
  const getResult = ( match ) => {
    if( match?.isRemake === true ){ return 'Remake'}
    switch ( match.result ) {
      case 'Win':
        return 'Win';
      case 'Loss':
        return 'Loss'
      default:
        break;
    }
  }

  // const champIcon = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${'2'}.png`

  return (
    <section className="col-lg-4 col-12-md sideBarRight">
      <div className="row col-12">

        <h3 style={{ color: "white", marginTop: "0.8rem" }}>Match History</h3>

        <div className="row matchContainer">

        {  
          matches?.map( ( match, index ) =>     
          (
            <div  key={ index } className={`matchCard ${ getResult( match ) }`}  >
              <img className="img-fluid champImg" src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${ match.champId }.png`} alt={`${match.champ.substr(0,4)}Icon`} />
              <div className="matchInfo">
                <p className={`matchLp${getResult(match)}`}>
                  { getResult(match) === 'Win' ? 'Victory'
                    : getResult(match) === 'Loss' ? 'Defeat'
                    : 'Remake'
                    
                  }
                  <span className={`matchLp${getResult(match)}`}>+20</span> LP</p>
                <p>{ `${ match.kills }/${ match.deaths }/${ match.assists }` }</p>
                <p>{`${ match.queueType }`}</p>
              </div>
            </div>
          ))
        }

        </div>

      </div>

    </section>
  )
}


