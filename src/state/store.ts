/**
 * Copyright (C) 2026 camelbushe (https://github.com/camelbushe/portable-crossword)
 * Licensed under GNU General Public License v3.0 only.
 */

import { configureStore } from "@reduxjs/toolkit";
import { applicationSlice } from "./applicationSlice";

const store = configureStore({
    reducer: {
        [applicationSlice.reducerPath]: applicationSlice.reducer
    }
})

export default store