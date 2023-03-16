import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "react";
import amountReducer from "./amountReducer";

 const Reducer = combineReducers({
    amount: amountReducer
    // name: 'incdec',
    // initialState: 20,
    // reducers: {
    //     Inc: (state, action) => {
    //         return state += action.payload;
    //     },
    //     Dec: (state, action) => {
    //         return state -= action.payload;
    //     }
    // }
})

// export const {Inc, Dec} = incdecSlice.actions;
export default Reducer;