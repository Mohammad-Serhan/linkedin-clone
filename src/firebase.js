import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJGTVYydKHGvAYLc-2jNnj1Yc2dUmJJbU",
    authDomain: "linkedin-clone-d767d.firebaseapp.com",
    projectId: "linkedin-clone-d767d",
    storageBucket: "linkedin-clone-d767d.appspot.com",
    messagingSenderId: "101639651305",
    appId: "1:101639651305:web:1efa67e38e3f2e31965578"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); // this line connects everything, coonect to database,  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };