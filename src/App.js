import './App.css';
import { moviesData } from './Moviesdata';
import Movielist from './Movielist';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes,Route } from 'react-router-dom';
import Uniquecomponent from './Uniquecomponent';
import Home from './Home';
function App() {
    const [moviesdata,setMoviesdata]=useState(moviesData)
    const handledelete=(ID)=>{
      setMoviesdata(
        moviesdata.filter((el)=>el.id !== ID)
        )
    }
    console.log({Element})
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home moviedata={moviesData}/>}/>
        <Route path='/movielist' element={<Movielist moviedata={moviesData} handledelete={handledelete}/>}/>
        <Route path='/movielist/:ID' element={<Uniquecomponent moviedata={moviesData}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
