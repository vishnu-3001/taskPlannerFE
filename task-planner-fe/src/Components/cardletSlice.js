/* eslint-disable no-template-curly-in-string */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initialState={
    cardlets:[],
    status:'idle',
    error:null
}
export const fetchCardlets=createAsyncThunk(
    'cardlets/fetchAll',
    async(_,{rejectWithValue})=>{
        try{
            const response=await fetch('http://localhost:8080/api/tasks');
            if(!response.ok){
                return rejectWithValue("Failed to fetch cardlets ${response.status}")
            }
            return response.json();
        }
        catch(error){
            return rejectWithValue("Failed to fetch cardlets: ${error.message}");
        }
    }
);

const cardletSlice=createSlice({
    name:'cardlets',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCardlets.pending,(state)=>{
            state.status="loading";
        });
        builder.addCase(fetchCardlets.fulfilled,(state,action)=>{
            state.status="success";
            state.cardlets=action.payload;
        });
        builder.addCase(fetchCardlets.rejected,(state,action)=>{
            state.status="failed";
            state.error=action.payload||action.error?.message||'failed to fetch cardlets';
        });
    }
});
export default cardletSlice.reducer;

