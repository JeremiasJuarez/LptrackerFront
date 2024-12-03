import { useContext, useEffect, useState } from "react"
import { LptContext } from "../../../Context/LptContext"

export const DropDownServer = () => {

    const { setServer } = useContext( LptContext )

    //--State para el manejo del valor de server que se guarda en el context
    const [serverName, setServerName] = useState('')
    //--State para el manejo del texto dentor del boton "server"
    const [serverString, setServerString] = useState('')

    const onSelectServer = (e) => {

        const selectedServer =  e.currentTarget.value
        setServerString( e.currentTarget.innerText )
        setServerName( selectedServer )

        return serverString
    }

    useEffect(() => {
      
        if( serverName === ''){return}
        setServer( serverName )

    }, [serverName])
    
    return (
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle serverMenu" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                { serverString === '' ? 'Server' : serverString }
            </a>

            <div className="dropdown-menu serverMenuOptions" aria-labelledby="dropdownMenuLink">
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'BR1' } type="button">BR <img className="serverImg" src="src/imgs/servericons/BR.svg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'NA1' } type="button">NA <img className="serverImg" src="src/imgs/servericons/NA.svg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'KR' } type="button">KR <img className="serverImg" src="src/imgs/servericons/KR.svg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'JP1' } type="button">JP <img className="serverImg" src="src/imgs/servericons/JP.svg" alt="" /></button> 
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'LA2' } type="button">LAS <img className="serverImg" src="src/imgs/servericons/LAS_server.jpg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'LA1' } type="button">LAN <img className="serverImg" src="src/imgs/servericons/LAN_server.jpg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'EUN1' } type="button">EUN <img className="serverImg" src="src/imgs/servericons/EUNE_server.jpg" alt="" /></button>
                <button className="dropdown-item serverItem" onClick={ onSelectServer } value={ 'EUW1' } type="button">EUW <img className="serverImg" src="src/imgs/servericons/EUW_server.jpg" alt="" /></button>
            </div>
        </div>
    )
}
