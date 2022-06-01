import * as ActionTypes from './action-types';

/* Initial states */
const INITIAL_STATE = {
    isLogin: false,
    response: [],
}

/**
 * Reducer for payment status
 */
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                response: action.payload
            }

        case ActionTypes.CLEAR_ALL_STATE:
            return {
                ...state,
                isLogin: false,
            }

        default:
            return state;
    }
}