import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC4yEUKrrhKzFRiCmpVfPhAWmkwS_0vL0w",
    authDomain: "young-butter-rashi-r.firebaseapp.com",
    databaseURL: "https://young-butter-rashi-r.firebaseio.com",
    projectId: "young-butter-rashi-r",
    storageBucket: "young-butter-rashi-r.appspot.com",
    messagingSenderId: "141836012693",
    appId: "1:141836012693:web:7d08ef2c3f4db91cf11f9c",
    measurementId: "G-QKKVSEJKWD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;