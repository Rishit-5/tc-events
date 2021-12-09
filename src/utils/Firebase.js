// import firestore from "firebase/compat/firestore"
// import firebase from "firebase/compat"
import {initializeApp} from "firebase/app"
import {getFirestore, collection, getDocs} from "firebase/firestore/lite"
import {getAuth} from "firebase/auth"; //auth functions all here
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyC4QADkBYBbkoKslSxuhhpFqkv3EH0iyTM",
    authDomain: "touch-of-class-events.firebaseapp.com",
    projectId: "touch-of-class-events",
    storageBucket: "touch-of-class-events.appspot.com",
    messagingSenderId: "469259622340",
    appId: "1:469259622340:web:758cdcc133cd26cb833691",
    measurementId: "G-Z4QPXLFP6D"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// const firestore = firebase.firestore();
//
// firestore.settings({
//     timestampsInSnapshots: true,
//     merge: true,
// })

// const auth = firebaseConfig.auth();
// const storage  = firebaseConfig.storage();
const auth = getAuth(); //watch aitegin tutorial
const storage = getStorage(app)

export {db, collection, getDocs, auth, storage}