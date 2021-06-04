import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBb1FINoWAaTMBwtrBoalTORWv8EwUdM1w",
    authDomain: "clone-67c99.firebaseapp.com",
    projectId: "clone-67c99",
    storageBucket: "clone-67c99.appspot.com",
    messagingSenderId: "740554840136",
    appId: "1:740554840136:web:ce1ad60f9ba6c0d392e07d",
    measurementId: "G-NSTQNVDDS9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }