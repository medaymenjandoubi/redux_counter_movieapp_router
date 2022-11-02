import { configureStore } from "@reduxjs/toolkit";

import counterslice from "./counterSlice";
export default configureStore({
    reducer:{
        counter:counterslice
    }
})