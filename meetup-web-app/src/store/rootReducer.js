import { combineReducers } from "redux";
import eventReducer from "./events/reducer";
const reducers = {
  eventLists: eventReducer,
};
const rootReducer = combineReducers(reducers);
export default rootReducer;
