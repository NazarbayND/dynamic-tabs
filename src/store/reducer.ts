import { combineReducers } from "redux";
import profiles from "./trainingRecords/profiles";
import counter from "./trainingRecords/counter";
import tabs from "./tabs/tabs";
import user from "./user/user";

export default combineReducers({
  profiles,
  counter,
  tabs,
  user,
});
