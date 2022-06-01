
import * as ActionTypes from './action-types';


export const signIn = (res) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: res
    }
}

export const clearAllstate = () => {
    return {
        type: ActionTypes.CLEAR_ALL_STATE
    }
}

