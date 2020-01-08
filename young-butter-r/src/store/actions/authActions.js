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

// take in new user we want to sign up
export const signUp = (newUser) => {
    // firebase for signing up via auth service, firestore to communicate w firestore db
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        // asynch func creates user
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email, newUser.password
            ).then((resp) => {      // takes in response of function, info ab user
                // pass in id that firebase generated for user to reference that doc in the collection
                // creates user record in firestore
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS'})
            }).catch(error => {
                dispatch({ type: 'SIGNUP_ERROR', error})
            })
    }
}