 import firebase from 'firebase/app'

 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAE5zGkqZ3JDVXAthDVJ_sSF-33yrtzwoE",
    authDomain: "nnotificationcenter.firebaseapp.com",
    databaseURL: "https://nnotificationcenter.firebaseio.com",
    projectId: "nnotificationcenter",
    storageBucket: "nnotificationcenter.appspot.com",
    messagingSenderId: "234719215563"
  };
  firebase.initializeApp(config);

  firebase.firestore().settings({timestampsInSnapshots: true})