import { createSlice } from "@reduxjs/toolkit";
const itemSlice=createSlice({
    name:'menuItem',
    initialState:{
        menuItemList:[],
    },
    reducers:{
        setMenuItemList:(state,action)=>{
            state.menuItemList=action.payload
        },
    }
})

export  const {setMenuItemList}=itemSlice.actions;
export default  itemSlice.reducer;