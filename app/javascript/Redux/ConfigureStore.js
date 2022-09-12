import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import greetingReducer from "./reducers/GreetingReducer";


const store = configureStore({
    reducer: {
        greetings: greetingReducer
    }
}, applyMiddleware(thunk, logger));

export default store;
