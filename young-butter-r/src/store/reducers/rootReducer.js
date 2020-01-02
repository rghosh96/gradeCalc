// combines all reducers into one to pass into the data store!
import authReducer from './authReducer'
import courseReducer from './courseReducer'
import { combineReducers } from 'redux'
// premade reducer to sync firestore w our reduces
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    // authReducer updates info on authenticate property
    authenticate: authReducer,
    // courseReducer updates info on courses property
    courses: courseReducer,
    // automatically syncs state to data in database
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;