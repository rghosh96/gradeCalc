
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
        default:
            return state;
    }
};

export default authReducer;