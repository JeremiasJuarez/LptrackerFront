import { useContext, useState } from "react"
import { getPuuid } from "../../../Helpers/fetchApi"
import { LptContext } from "../../../Context/LptContext"

export const NavBar = () => {

  const { provideSummoner } = useContext( LptContext )

  const onSummonerFound = ( summonerName, tag, puuid  ) => {

    provideSummoner( summonerName, tag, puuid )
  }


  //--estado para el manejo del form
  const [ formValues, setFormValues ] = useState({ summonerName: '', tag: '' })

  //--Estado para el summoner encontrado 
  const [ summoner, setSummoner ] = useState({})

  //--tomamos valor dinamico de los input con propiedad computada de los obj js
  const onInputChange = ( { target } ) => {
    const { name, value } = target
    setFormValues({
      ...formValues,
      [ name ]: value
    })
  }
  
  //--al hacer submit efectuamos validaciones del formulario si esta todo correcto se llama a getpuuid 
  const onSubmit = async(e) => {
    e.preventDefault()

    if( formValues.tag.length > 5  ){
      throw new Error('The maximum number of characters for tag is 5')
    }

    if( formValues.tag.length < 3   ){
      throw new Error('The minimum number of characters for tag is 3')
    }

    if( formValues.summonerName.length < 3 ){
      throw new Error('Summoner Name should be at least 3 characters long')
    }

    if( formValues.summonerName.length > 16  ){
      throw new Error('The maximum number of characters for Summoner Name is 16')
    }

    try {
      const  { summoner }  = await getPuuid(formValues.summonerName, formValues.tag)
      
      setSummoner( summoner )
      let gameName = summoner.gameName
      let tagLine = summoner.tagLine
      let puuid = summoner.puuid
      onSummonerFound( gameName, tagLine, puuid )


    } catch (error) {
      console.log( error )
      return error
    }

  }


  return (
    <div className="row p-2 navWeb flex-row ">

      <div className="col-lg-3 col-md-12 fullLogo">
        <span className="lpLogo">LP</span><span className="trackerLogo">Tracker</span>
      </div>

      <div className="col-lg-3 col-md-12 introLPT">
        <p style={{ wordBreak: "normal", marginBottom: "-0.2rem", fontSize: "0.8rem", textAlign: "center" }}>Search your profile and start monitoring your league points earnings.</p>
      </div>

      <div className="col-lg-6 col-md-12 inputsContainer">
        <div className="row d-inline-flex justify-content-center">
          <form onSubmit={ onSubmit } className="col-12">
            <input 
              onChange={ onInputChange } 
              name="summonerName" 
              className="inputSummonerName" 
              type="text" 
              placeholder="Summoner Name" />
            <input 
              onChange={ onInputChange } 
              name="tag" 
              className="inputTag" 
              type="text" 
              placeholder="Tag" />
            <button 
              type="submit" 
              className="searchButton">
                <i className="fa-solid fa-magnifying-glass" blank="SearchLogo"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
