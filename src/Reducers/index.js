import seletion from "./selection";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  selector: seletion,
});

export default allReducers;
