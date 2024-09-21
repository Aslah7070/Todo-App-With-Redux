import { configureStore } from "@reduxjs/toolkit";
import toduReducer from "../Redux/inputSlice"
export default configureStore({
    reducer:{
        inp:toduReducer
    }
})