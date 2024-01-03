import { createSlice, isAction } from '@reduxjs/toolkit';

const createSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
      addtoCart:(state,action) =>{
        state.push(acion.payload)
      },
      removeCart:(state,action)=>{
        return state.filter(item=>item.id!=action.payload)
      },
      emptyCart:(state)=>{

      }
    }
})
export const {addtoCart,removeCart,emptyCart} = cartSlice.actions
export default cartSlice.reducer