import {createSlice} from '@reduxjs/toolkit'

const navSlice=createSlice({
    name:'navbar',
    initialState:{toggle:true},
    reducers:{
        toggle(state){
            state.toggle=!state.toggle;
        }
    },
})

export const navActions=navSlice.actions;

export default navSlice;