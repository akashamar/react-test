import reduxData from "./reducer";
import { combineReducers } from "redux";

const store = combineReducers({
  reduxData,
});

export default store;