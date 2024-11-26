import { useContext, useState } from "react"
import { getPuuid } from "../../../Helpers/fetchApi"
import { LptContext } from "../../../Context/LptContext"
import { SummonerNotFound } from "./SummonerNotFound"
import { getSummonerFullProfile } from "../../../Helpers/getSummonerFullProfile"

export const NavBar = () => {

  const { provideSummoner } = useContext( LptContext )

  //--Grabar en el context
  const onSummonerFound = ( summonerName, tag, puuid  ) => {
    provideSummoner( summonerName, tag, puuid )
  }

  //--Estado para impedir doble posteo de formulario mientras se hace la peticion
  const [isSubmitting, setIsSubmitting] = useState( false )

  //--Estado para manejo de error
  const [{found, sn, st}, setSumNotFound] = useState({ found: true, sn: '', st: ''})

  //--Estado para el manejo del form
  const [ formValues, setFormValues ] = useState({ summonerName: '', tag: '' })

  //--Estado para el summoner encontrado 
  const [ summoner, setSummoner ] = useState({})

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

    if (isSubmitting) return;

    setIsSubmitting(true); // Indica que el formulario está en proceso de envío

    if (formValues.tag.length > 5 || formValues.tag.length < 3) {
      setIsSubmitting(false)
      throw new Error('Tag length must be between 3 and 5 characters.');
    }
    if (formValues.summonerName.length < 3 || formValues.summonerName.length > 16) {
      setIsSubmitting(false)
      throw new Error('Summoner Name length must be between 3 and 16 characters.');
    }

    try {
      
      const  res  = await getPuuid(formValues.summonerName, formValues.tag)
      
      if( res.summoner?.gameName ){

        setSummoner( res.summoner )
        const { gameName, tagLine, puuid } = res.summoner
        onSummonerFound( gameName, tagLine, puuid )
        setSumNotFound({ found:true, sn:'', st:'' } )
        getSummonerFullProfile( puuid )
        
      } else{
        const err = JSON.stringify(res)
        throw new Error( err )
      }

      //--Limpiamos valores del form, dando 1 seg de delay para la pantalla de load
      setSumNotFound({ found: true, sn: formValues.summonerName, st: formValues.tag})

      setTimeout(() => {
      setFormValues({ summonerName: '', tag: '' })
      }, 1000);

    } catch (error) {
      setFormValues({ summonerName: '', tag: '' })
      setSumNotFound({ found: false, sn: formValues.summonerName, st: formValues.tag })
      return { error, sn, st }
    } finally {
      setIsSubmitting(false)
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
              value={formValues.summonerName}
              placeholder="Summoner Name" />
            <input 
              onChange={ onInputChange } 
              name="tag" 
              className="inputTag" 
              type="text" 
              value={formValues.tag}
              placeholder="Tag" />
            <button 
              type="submit" 
              className="searchButton"
              disabled={ isSubmitting }
            >
                <i className="fa-solid fa-magnifying-glass" blank="SearchLogo"></i>
            </button>
          </form>
        </div>
      </div>

    {
      found ? null : <SummonerNotFound sn={sn} st={st} />
    }

    </div>
  )
}
