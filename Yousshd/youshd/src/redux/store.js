import { combineReducers,legacy_createStore } from "redux";
import { authReducer } from "./auth/authReducer";

export const rootReducer = combineReducers({
    auth:authReducer,
    
})

export const store = legacy_createStore(rootReducer);