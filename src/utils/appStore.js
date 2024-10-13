import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import gptReducer from "./gptSlice"
import configReducers from './configSlice'

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer,
            config: configReducers
        },
    }
);

export default appStore;