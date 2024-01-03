import {createAsyncThunk, createSlice  } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('allProducts/fetchProducts',async()=>{
    const response = await axios.get('https://dummyjson.com/products')
    return response.data.products
})
  
const productSlice = createSlice({
    name:'allProducts',
    initialState:{
        products:[],
        loading:false,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true
        })
    builder.addCase(fetchProducts.rejected,(state)=>{
        state.loading = false
        state.products = action.payload
    })
    builder.addCase(fetchProducts.fulfilled,(state)=>{
        state.loading = false
        state.products =[]
        state.error = "API call failed.Please Wait!!!"

    })
    }
})
export default productSlice.reducer

