import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./modeSlice";

const store = configureStore({
    reducer: {
        modeReducer: modeSlice.reducer
    }
})

export default store;