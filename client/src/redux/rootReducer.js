import { combineReducers } from "redux";
import matrixReducer from "./reducers/matrixReducer/";

//uses combine 'cause if in the future will be more reducers will need to combine their
export const rootReducer = combineReducers({ matrix: matrixReducer });
