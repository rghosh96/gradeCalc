export const logIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        // retrieve firebase data
        const firebase = getFirebase();
        // pass in params to to be authenticated
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error})
        })
    }
}

export const logOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        // retrieve firebase data
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS' })
        })
    }
}