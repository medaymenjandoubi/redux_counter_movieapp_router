import { createSlice } from "@reduxjs/toolkit";
export const counterslice =createSlice({
    name : 'counter',
    initialState:{
        counter : 1
    },
    reducers:{
        increment:(state,action)=>{
            if (state.counter <6){
            state.counter += 1
            }
        },
        decrement:(state,action)=>{
            if (state.counter >1){
            state.counter -= 1
            }
        },
        reset:(state,action)=>{
            state.counter = 1
        }
    }
})
export const {increment,decrement,reset}=counterslice.actions
export default counterslice.reducer