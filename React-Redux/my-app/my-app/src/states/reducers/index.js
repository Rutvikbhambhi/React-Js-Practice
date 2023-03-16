import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import amountReducer from "./amountReducer";

export default reducer  = combineReducers({
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
// export default incdecSlice.reducer;