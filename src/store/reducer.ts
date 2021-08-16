import { combineReducers } from "redux";
import profiles from "./trainingRecords/profiles";
import counter from "./trainingRecords/counter";

export default combineReducers({
  profiles,
  counter,
});
