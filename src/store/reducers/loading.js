const { SET_LOADING } = require("../constants");

const initialState = {
    loading : false
}

export default function setLoadig(state = initialState, action){
    switch(action.type){
        case SET_LOADING : return {...state, loading : action.payload }
        default : return state
    }
}