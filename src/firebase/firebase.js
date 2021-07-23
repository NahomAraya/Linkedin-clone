import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDQjqvZX7UdcBv0RQARRlnDhRNUMMKrK8I",
    authDomain: "linkdin-clone-deffe.firebaseapp.com",
    projectId: "linkdin-clone-deffe",
    storageBucket: "linkdin-clone-deffe.appspot.com",
    messagingSenderId: "472028629296",
    appId: "1:472028629296:web:5c6ac88cfdb2d49a4c60f5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};