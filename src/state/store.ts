import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from "./applicationSlice";

const store = configureStore({
    reducer: {
        [applicationSlice.reducerPath]: applicationSlice.reducer
    }
})

export default store