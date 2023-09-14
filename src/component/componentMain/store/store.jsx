
import { createSlice, configureStore } from "@reduxjs/toolkit";


export const toggleDarkMode = createSlice({
    name: "toggleMode",
    initialState: {
        mode: true
    },
    reducers: {
        changeModeOn: (state = initialState) => {
            state.mode = true
        },
        changeModeOff: (state = initialState) => {
            state.mode = false
        }
    }
})

export const store = configureStore({
    reducer: {
        darkMode: toggleDarkMode.reducer,
    }
})

export const { changeModeOn, changeModeOff } = toggleDarkMode.actions

export default toggleDarkMode.reducer;

