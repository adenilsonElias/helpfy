import { SET_USER, MAKE_LOGOUT } from '../constants'

export function setUser(user : User){
    return {
        type: SET_USER,
        user
    }
}

export function makeLogout(){
    return {
        type : MAKE_LOGOUT
    }
}