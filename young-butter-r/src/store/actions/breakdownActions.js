const addBreakdown = (breakdowns) => {
    // dispatch dispatches action to reducer; returns function and halts that dispatch
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make asynch call to firestore db, then carry on w dispatch
        const firestore = getFirestore();
        firestore.collection('courses').doc(breakdowns.course).collection('breakdowns').add({   // reference to courses collection! adds document to collection
            ...breakdowns,                          // spread operator puts in courseName and numBreakdowns!
        }).then(() => {
            dispatch({
                type: 'ADD_BREAKDOWN',
                breakdown: breakdowns
            });
        }).catch((error) => {
            dispatch({
                type: 'ADD_BREAKDOWN_ERROR',
                error
            })
        })
        
    }
}

export default addBreakdown;