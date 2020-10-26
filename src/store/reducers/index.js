import { combineReducers } from 'redux'
import setUser from './user'
import setLoading from './loading'

export default combineReducers({
    userState : setUser,
    loadingState : setLoading
});