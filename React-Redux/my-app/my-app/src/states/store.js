// // import { configureStore } from "@reduxjs/toolkit";
// import { thunk }  from "redux-thunk";
// import { applyMiddleware, createStore } from "redux";
// import Reducers from "./reducers/index";
// import incdecReducer from "./reducers/index";

// const store = createStore(Reducers, {}, applyMiddleware(thunk));

// export default store;

// import { createStore } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import reducers from "./reducers/amountReducer"

 const store = createStore(reducers, {}, applyMiddleware(thunk))

 export default store;