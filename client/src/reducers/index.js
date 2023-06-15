import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./CurrentUser";
import usersReducer from "./Users";
import askQuestionReducer from "./askQuestion";
export default combineReducers({
    authReducer, currentUserReducer, askQuestionReducer, usersReducer
})