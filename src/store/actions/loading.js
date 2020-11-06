import { SET_LOADING, SET_BOTTOMBAR } from '../constants'

export function setLoading(payload){
    return {
        type: SET_LOADING,
        payload
    }
}

export function setBottomBar(payload){
    return {
        type: SET_BOTTOMBAR,
        payload
    }
}