const addCourse = (course) => {
    // dispatch dispatches action to reducer; returns function and halts that dispatch
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynch call to firestore db, then carry on w dispatch
        const firestore = getFirestore();
        firestore.collection('courses').add({   // reference to courses collection! adds document to collection
            ...course,                          // spread operator puts in courseName and numBreakdowns!
        }).then(() => {
            dispatch({
                type: 'ADD_COURSE',
                course: course
            });
        }).catch((error) => {
            dispatch({
                type: 'ADD_COURSE_ERROR',
                error
            })
        })
        
    }
}

export default addCourse;