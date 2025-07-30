import { configureStore } from "@reduxjs/toolkit";
import cardRedcuer from "../Components/Card/cardSlice";

const store=configureStore({
    reducer:{
        card:cardRedcuer
    }
});
export default store;