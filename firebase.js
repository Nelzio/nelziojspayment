import firebase from "firebase/app"

import "firebase/auth"
import "firebase/firestore"
import 'firebase/storage'
// import 'firebase/functions'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUWx5yuHeh9a9NDM0afwSV8XtnqSkmruE",
    authDomain: "musicambiquepayments.firebaseapp.com",
    projectId: "musicambiquepayments",
    storageBucket: "musicambiquepayments.appspot.com",
    messagingSenderId: "755602795566",
    appId: "1:755602795566:web:dcf6ac795b6b292d4483bf",
    measurementId: "G-VLCMEXX5MV"
};

const settings = { timestampsInSnapshots: true }; // firebase

// firebase.initializeApp(firebaseConfig);
// try {
//     firebase.initializeApp(firebaseConfig);
// } catch (error) {
//     console.log(error)
//     console.log("App inicialized")
// }

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}



let auth = firebase.auth()
let firestore = firebase.firestore()
let storage = firebase.storage()
// let functions = firebase.functions()


export { auth, firestore, firebase, storage }