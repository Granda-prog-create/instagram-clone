import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXKu90n8XOh0T8KFW_o1xcvbd7rDxZksk",
    authDomain: "instagram-clone-m.firebaseapp.com",
    projectId: "instagram-clone-m",
    storageBucket: "instagram-clone-m.appspot.com",
    messagingSenderId: "543883611950",
    appId: "1:543883611950:web:3953be7ea45c033e09b4bf",
    measurementId: "G-FGEHKW4FXC" 
  });

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const functions = firebase.functions();

export {db, auth, storage, functions};