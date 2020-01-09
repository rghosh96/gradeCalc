import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import * as serviceWorker from './serviceWorker';
// import redux data store
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'  // binds react to redux
// middleware between dispatch and reducer to go fetch data asynchronously from database!
import thunk from 'redux-thunk'
// connect app to firebase/store
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import fbConfig from './configs/fbConfig'
import Spinner from 'react-bootstrap/Spinner'

// create a data store & pass in a reducer to manipulate states
// apply middleware to access database asynchronously to enhance store with extra functionality
// pass in extra arguments for firebase/store into courseAction, for example
const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // store enhancers to connect to database
    reduxFirestore(fbConfig)
    )
);

// react-redux-firebase config
// can access state.firebase.profile to get logged in user profile!!
const rrfConfig = {
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
    userProfile: 'users'
}

// tbh idk wtf is happening here but i got it off the documentation, bo o m
const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
}




// to make sure authenticate before rendering to dom
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div>
          <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  <Spinner animation="grow" variant="warning" />
  <Spinner animation="grow" variant="info" />
  <Spinner animation="grow" variant="dark" />
    </div>;
    return children
}

// provider wraps app and passes store so app can have access to store!
ReactDOM.render(<Provider store={ store }>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
