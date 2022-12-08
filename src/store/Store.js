import {configureStore} from '@reduxjs/toolkit'
import RealSlice from './RealSlice';

const store=configureStore({
    reducer:{
        RealSlice:RealSlice,
    }
})

export default store;