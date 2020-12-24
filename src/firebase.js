import firebase from 'firebase'

var firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyBwJ-xCGQdSEWRFpsYm4j_GbG_-Y_IR9Q0",
    authDomain: "portafolio-5c5e8.firebaseapp.com",
    projectId: "portafolio-5c5e8",
    storageBucket: "portafolio-5c5e8.appspot.com",
    messagingSenderId: "1043490969867",
    appId: "1:1043490969867:web:4291ec2a669c199575aa0e",
    measurementId: "G-HN40QRN474"
  });
  // Initialize Firebase

  var db = firebaseApp.firestore();

  export { db };