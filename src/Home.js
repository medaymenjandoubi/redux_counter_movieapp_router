import React from 'react'
import Counter from './Counter'
import Element from './Element'
import { Link } from 'react-router-dom';
import './App.css';

const Home = ({moviedata}) => {
  return (
    <div >
        <Element moviedata={moviedata}/>
        <Counter/>
        <button class="linkbutton"><Link to={`/movielist`}>Tous Les films</Link></button>
    </div>
  )
}

export default Home