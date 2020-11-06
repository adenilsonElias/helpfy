const { SET_LOADING, SET_BOTTOMBAR } = require("../constants");

const initialState = {
    loading: false,
    bottomBar: false
}

export default function setLoadig(state = initialState, action){
    switch(action.type){
        case SET_LOADING : return {...state, loading : action.payload }
        case SET_BOTTOMBAR : return {...state, bottomBar : action.payload }
        default : return state
    }
}