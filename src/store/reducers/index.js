import { combineReducers } from 'redux'
import setUser from './user'



export default combineReducers({
    userState : setUser
});