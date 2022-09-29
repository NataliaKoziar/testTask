import {configureStore} from "@reduxjs/toolkit"
import dataReducer from "../store/slices/dataSlice"


export default configureStore({
    reducer:{
        data:dataReducer
    }
})