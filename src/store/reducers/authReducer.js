import * as actionTypes from '../actionTypes'

const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_ERROR:
            console.log('Login error!')
            return {
                ...state,
                authError: 'Login failed'
            }
        case actionTypes.LOGIN_SUCCESS:
            console.log('Login success!')
            return {
                ...state,
                authError: null
            }
        case actionTypes.SIGNOUT_SUCCESS:
            console.log('Signout success!')
            return state;
        default:
            return state
    }
}

export default authReducer;