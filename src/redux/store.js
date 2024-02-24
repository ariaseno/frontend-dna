import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news"


const rootReducer = {
    news: newsReducer
}

const store = configureStore({
    reducer: rootReducer
});


export default store;