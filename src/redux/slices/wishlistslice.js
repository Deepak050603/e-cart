import { createSlice } from "@reduxjs/toolkit";



export const wishlistSlice =createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        // to add an item in wishlist
        addWishlistitem :(state,action)=>{
            state.push(action.payload)
        },
        removeWishlistitem : (state,action)=>{
          return  state.filter((item)=>item?.id != action.payload)
        }


    }
})

export const {addWishlistitem,removeWishlistitem} = wishlistSlice.actions



export default wishlistSlice.reducer