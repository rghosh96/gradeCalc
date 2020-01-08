
const initState = {
    email: null,
    password: null,
    authError: null
};

// pass in state to be altered by action; initialize state on first call
const authReducer = (state = initState, action) => {
     // check action type
     switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('login success!')
            return {
                ...state,
                authError: null
            }
        case 'LOGIN_ERROR':
            console.log('login failed rip')
            return {
                ...state,
                authError: 'Failed to log in ):'
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success!')
            return state;

        case 'SIGNUP_ERROR':
            console.log('signup failed rip')
            return {
                ...state,
                authError: action.error.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success!')
            return {
                ...state,
                authError: null
            }
            return state;
        default:
            return state;
    }
};

export default authReducer;