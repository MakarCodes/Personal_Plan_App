  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA7u1bPGeCEd2M3qPjvszcnMQ-rQp9Z64U",
    authDomain: "daily-projects-61a39.firebaseapp.com",
    databaseURL: "https://daily-projects-61a39.firebaseio.com",
    projectId: "daily-projects-61a39",
    storageBucket: "daily-projects-61a39.appspot.com",
    messagingSenderId: "495994885710",
    appId: "1:495994885710:web:d157514874002377a4551f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;