import { createSlice } from "@reduxjs/toolkit";

const initialState={
    formData:{
        title:"This is card title",
        startDate:"2023-10-01",
        endDate:"2023-10-31",
        description:"This is a description of the card. It can be edited as well.",
        checkLists:[],
        labels:[],
        url:[],
        comments:[]
    },
    addEnabled:""
}
const cardSlice=createSlice({
    name:'card',
    initialState,
    reducers:{
        updateField(state,action){
            const{name,value}=action.payload;
            state.formData[name]=value;
        },
        setAddEnabled(state,action){
            state.addEnabled=action.payload;
        },
        addLabel(state,action){
            state.formData.labels.push(action.payload)
        },
        addChecklists(state,action){
            state.formData.checkLists.push(action.payload);
        },
        addURL(state,action){
            state.formData.url.push(action.payload);
        }
    }
})
export const {updateField,setAddEnabled,addLabel,addChecklists,addURL}=cardSlice.actions;
export default cardSlice.reducer;