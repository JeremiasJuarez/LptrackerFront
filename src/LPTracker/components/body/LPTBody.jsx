import { SideBarRight, SideBarLeft, EmptySideBarRight } from "../index"

export const LPTBody = () => {
  return (
    <div className="row LPTBody">

      <SideBarLeft/>

      {/* aca mostrar condicional si hay un summoner buscado mostrar el historial y si no
      una card vacia */}
      {/* <EmptySideBarRight/> */}
      <SideBarRight/>

    </div>
  )
}
