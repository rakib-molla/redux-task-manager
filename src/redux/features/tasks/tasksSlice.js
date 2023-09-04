import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks:[]
}

const tasksSlice = createSlice({
    name:'tasksSlice',
    initialState,
    reducers:{
        addTasks : (state, { payload })=>{
            state.tasks.push({ ...payload})
        }
    },
})

export const { addTasks } = tasksSlice.actions;
export default tasksSlice.reducer;