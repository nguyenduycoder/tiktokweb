import { combineReducers } from "redux";
import userInfo from './userInfo'
import urlNavigation from './urlnavigation'
import modalMode from './modalmode'



const myReducer = combineReducers({
    userInfo,
    urlNavigation,
    modalMode,



});
export default myReducer;