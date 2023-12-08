import {configureStore } from "@reduxjs/toolkit";
import Userslice from "./Slice/Userslice";


const store = configureStore({
    
    reducer:{
           users : Userslice
    }
})

export default store;