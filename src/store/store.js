import {configureStore} from '@reduxjs/toolkit'
import navSlice from './nav-slice'

const store = configureStore({
    reducer:{
        navbar:navSlice.reducer
    }
})

export default store;