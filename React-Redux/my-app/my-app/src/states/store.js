// import { configureStore } from "@reduxjs/toolkit";
import { Thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers/index";
import incdecReducer from "./reducers/index";
import { Store } from "react-redux";

export default Store = createStore(reducers, {}, applyMiddleware(Thunk))