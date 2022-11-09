import { combineReducers } from "redux";
import userInfo from './userInfo'
import urlNavigation from './urlnavigation'


const myReducer = combineReducers({
    userInfo,
    urlNavigation


});
export default myReducer;