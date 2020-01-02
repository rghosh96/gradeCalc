
const initState = {
    breakdowns: [
        {num: 1}
    ]
};

// pass in state to be altered by action; initialize state on first call
const breakdownReducer = (state = initState, action) => {
    // check action type
    switch (action.type) {
        case 'ADD_BREAKDOWN':
            console.log('added course:', action.breakdown);
            return state;
        case 'ADD_BREAKDOWN_ERROR':
            console.log('add course error', action.error)
            return state;
        default:
            return state;
    }
};

export default breakdownReducer;