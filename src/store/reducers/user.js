const { SET_USER, MAKE_LOGOUT } = require("../constants");

const initialState = {
    user : null
}

export default function setUser(state = initialState, action){
    switch(action.type){
        case SET_USER : return {...state, user : action.user }
        case MAKE_LOGOUT : return initialState
        default : return state
    }
}