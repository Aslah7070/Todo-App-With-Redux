import {createSlice} from "@reduxjs/toolkit";
const tidoSlice=createSlice({
    name:"todo",
    initialState:{
        inputValue:"",
        array:[]
    },
    reducers:{
        onchanges:(state,action)=>{
            state.inputValue=action.payload
        },
        addCart:(state,action)=>{
           state.array.push(state.inputValue)
           state.inputValue=""
        },
        removeItem:(state,action)=>{
           state.array=state.array.filter((val,index)=>index!==action.payload)
        }
    }

})
export default tidoSlice.reducer
export const {onchanges,addCart,removeItem}=tidoSlice.actions