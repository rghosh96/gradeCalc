
const initState = {
    courses: [
        {id: 1, courseName: 'operating systems', numBreakdowns: 4},
        {id: 2, courseName: 'software engineering', numBreakdowns: 4},
        {id: 3, courseName: 'artificial intellgience', numBreakdowns: 5},
    ]
};

// pass in state to be altered by action; initialize state on first call
const courseReducer = (state = initState, action) => {
    // check action type
    switch (action.type) {
        case 'ADD_COURSE':
            console.log('added course:', action.course);
            return state;
        case 'ADD_COURSE_ERROR':
            console.log('add course error', action.error)
            return state;
        case 'REMOVE_COURSE':
            console.log('removed course:', action.course);
            return state;
        case 'REMOVE_COURSE_ERROR':
            console.log('remove course error', action.error)
            return state;
        default:
            return state;
    }
};

export default courseReducer;