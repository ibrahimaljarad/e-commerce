import * as firebase from "firebase"

import "firebase/database";


  // Your web app's Firebase configuration
  const  firebaseConfig = {
    apiKey: "AIzaSyBu7V5gie4fORmtEIueUeOnf_J9-YmGJWc",
    authDomain: "the-car-store-83aed.firebaseapp.com",
    databaseURL: "https://the-car-store-83aed.firebaseio.com",
    projectId: "the-car-store-83aed",
    storageBucket: "the-car-store-83aed.appspot.com",
    messagingSenderId: "306566793388",
    appId: "1:306566793388:web:9c6ebc3e8666bced567709"
  };
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);



  export default firebase.firestore();

