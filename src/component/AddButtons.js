
import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { onchanges } from '../Redux/inputSlice';
import {addCart,removeItem} from "../Redux/inputSlice";

const AddButtons = () => {
    const dispatch= useDispatch();
    const val= useSelector((state)=>state.inp.inputValue)
   const result= useSelector((state)=>state.inp.array)

     const handleChange=(e)=>{
         dispatch(onchanges(e.target.value))
     }
     const submit=()=>{
          dispatch(addCart())
     }
   return (
     <div>
       <input type="text" value={val} onChange={handleChange} />
       <button onClick={submit}>Add</button>  
       {    
        result.map((val,index)=>(
            <li>{val}<button onClick={()=>dispatch(removeItem(index))}>Remove</button> <button>Edit</button> </li>
        ))
       }
       
     </div>
   )
}

export default AddButtons


