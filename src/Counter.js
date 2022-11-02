import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement,reset} from './redux/counterSlice'
const Counter = () => {
    const {counter}=useSelector((state)=>state.counter)
    console.log('counter',counter)
    const Dispatch = useDispatch()
  return (
    <div>
        <h1 style={{color:'white'}}>Meilleur film de la semaine :{counter}</h1>
        <div class="containercounter">
        <button class="button-36" onClick={()=>Dispatch(increment())}>Suivant</button>
        <button class="button-36" onClick={()=>Dispatch(decrement())}>Precedent</button>
        <button class="button-36" onClick={()=>Dispatch(reset())}>revenir au debut </button>
        </div>
    </div>
  )
}

export default Counter