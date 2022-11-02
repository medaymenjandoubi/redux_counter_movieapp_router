import React from 'react'
import Movieelement from './Movieelement'
import { Link } from 'react-router-dom'
const Movielist = ({moviedata,handledelete}) => {
  return (
    <div>
    <div style={{ display: "flex", justifyContent : "space-between" }}>
        {moviedata.map((e)=>(<Movieelement movieelement={e} handledelete={handledelete}/>))}
    </div>
    <div><button class="button-36"><Link to={`/`}>Revenir en page d'accueil</Link></button></div>
    </div>
  )
}

export default Movielist