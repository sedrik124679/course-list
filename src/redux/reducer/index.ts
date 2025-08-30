import { combineReducers } from "redux";
import courses from "@src/pages/courses/redux/reducer/courses";

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
