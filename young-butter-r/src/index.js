import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import * as serviceWorker from './serviceWorker';
// import redux data store
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'  // binds react to redux
// middleware between dispatch and reducer to go fetch data asynchronously from database!
import thunk from 'redux-thunk'
// connect app to firebase/store
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase} from 'react-redux-firebase'
import fbConfig from './configs/fbConfig'

// create a data store & pass in a reducer to manipulate states
// apply middleware to access database asynchronously to enhance store with extra functionality
// pass in extra arguments for firebase/store into courseAction, for example
const store = createStore(rootReducer, 
    compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // store enhancers to connect to database
    reduxFirestore(fbConfig)
    )
);

// tbh idk wtf is happening here but i got it off the documentation, bo o m
const rrfProps = {
    firebase,
    config: fbConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

// provider wraps app and passes store so app can have access to store!
ReactDOM.render(<Provider store={ store }>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
