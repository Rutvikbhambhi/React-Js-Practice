import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

// export const store = createStore(reducers, {}, applyMiddleware (thunk))


const store = configureStore({
    reducer:{
        user: authSlice,
    },
});

export default store;
