import { combineReducers } from "redux";
import playerReducer from "./playerSlice";

const rootReducer = combineReducers({
    player: playerReducer
    // add more reducers on here
});

export default rootReducer;