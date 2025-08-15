import { configureStore } from "@reduxjs/toolkit";
import cardRedcuer from "../Components/Card/cardSlice";
import cardletReducer from "../Components/cardletSlice"

const store=configureStore({
    reducer:{
        card:cardRedcuer,
        cardlets:cardletReducer
    }
});
export default store;