import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAzVEVeoV_HIvLaDRlQKKJzEvNC9BvoDyc",
    authDomain: "e-commerce-6d766.firebaseapp.com",
    databaseURL: "https://e-commerce-6d766.firebaseio.com",
    projectId: "e-commerce-6d766",
    storageBucket: "e-commerce-6d766.appspot.com",
    messagingSenderId: "716783921553",
    appId: "1:716783921553:web:e43eeafa6f4b7e2470d230",
    measurementId: "G-5KQL6X04FF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;