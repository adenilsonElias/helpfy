import { SET_LOADING } from '../constants'

export function setLoading(payload){
    return {
        type: SET_LOADING,
        payload
    }
}