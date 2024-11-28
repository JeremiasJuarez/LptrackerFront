import { useContext, useState } from "react"
import { getPuuid } from "../../../Helpers/fetchApi"
import { LptContext } from "../../../Context/LptContext"
import { SummonerNotFound } from "./SummonerNotFound"

const initialErrorState = {
  hasError: false,
  summonerName: '',
  tag: '',
};

export const NavBar = () => {

  const { provideSummoner } = useContext( LptContext )

  //--Grabar en el context
  const onSummonerFound = ( summonerName, tag, puuid  ) => {
    provideSummoner( summonerName, tag, puuid )
  }

  //--Estado para valores del form
  const [formValues, setFormValues] = useState({ summonerName: '', tag: ''})

  //--Estado para evitar doble posteo
  const [submiting, setSubmiting] = useState(false)

  //--Estado para renderizar mensaje de error
  const [errorCatched, setErrorCatched] = useState(initialErrorState)

  //--Tomamos valor dinamico de los input con propiedad computada de los obj js
  const onInputChange = ( { target } ) => {
    const { name, value } = target
    setFormValues({
      ...formValues,
      [ name ]: value
    })
  }
  
  //--Al hacer submit efectuamos validaciones del formulario si esta todo correcto se llama a getpuuid 
  const onSubmit = async(e) => {
    e.preventDefault()
    if (submiting) return;
    setSubmiting(true);

    try {
      if (formValues.tag.length > 5 || formValues.tag.length < 3) {
        throw new Error('Tag length must be between 3 and 5 characters.');
      }
      if (formValues.summonerName.length < 3 || formValues.summonerName.length > 16) {
        throw new Error('Summoner Name length must be between 3 and 16 characters.');
      }
      const { summoner } = await getPuuid(formValues.summonerName,formValues.tag)
      onSummonerFound( summoner.gameName, summoner.tagLine, summoner.puuid )
      setFormValues({ summonerName: '', tag: '' });
      setErrorCatched(false);
    } catch (error) {
      setErrorCatched( {hasError: true, summonerName: formValues.summonerName, tag: formValues.tag} )
      setFormValues({ summonerName: '', tag: ''})
    } finally {
      setSubmiting(false);
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
          <form onSubmit={ onSubmit } className="col-12 d-flex align-items-center formNav">
            <input 
              onChange={ onInputChange } 
              name="summonerName"
              value={ formValues.summonerName} 
              className="inputSummonerName" 
              type="text" 
              placeholder="Summoner Name" />
            <input 
              onChange={ onInputChange } 
              name="tag" 
              value={ formValues.tag} 
              className="inputTag" 
              type="text"
              placeholder="Tag" />
            <button 
              type="submit" 
              className="searchButton"
              disabled={ submiting }
            >
              <i className="fa-solid fa-magnifying-glass" blank="SearchLogo"></i>
            </button>
          </form>
        </div>
      </div>

      {errorCatched.hasError && <SummonerNotFound summonerName={errorCatched.summonerName} tag={errorCatched.tag} />}

    </div>
  )
}
