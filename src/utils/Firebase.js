import "firebase/firestore"
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyC4QADkBYBbkoKslSxuhhpFqkv3EH0iyTM",
    authDomain: "touch-of-class-events.firebaseapp.com",
    projectId: "touch-of-class-events",
    storageBucket: "touch-of-class-events.appspot.com",
    messagingSenderId: "469259622340",
    appId: "1:469259622340:web:758cdcc133cd26cb833691",
    measurementId: "G-Z4QPXLFP6D"
};


const firestore = firebase.firestore();

db.settings({
    timestampsInSnapshots: true,
    merge: true,
})

const auth = firebaseConfig.auth();
const storage  = firebaseConfig.storage();

export {firestore, auth, storage}