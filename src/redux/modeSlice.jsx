import {createSlice} from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'modeslice',
    initialState: {
        mode: false,
    },
    reducers: {
        darkMode(state){
            state.mode = true
        },
        lightMode(state){
            state.mode = false
        }


    }
})
export const action = modeSlice.actions;
export default modeSlice;
