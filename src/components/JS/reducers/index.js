import { combineReducers } from "redux";
import phoneReducer from "./phoneReducer";

const rootReducer = combineReducers({
  phoneReducer,
});

export default rootReducer;
