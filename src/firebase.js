import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUjFpcojX7Wbs1WRcsS6xlGbghUU5gBjw",
    authDomain: "linkedin-clone-d11bc.firebaseapp.com",
    projectId: "linkedin-clone-d11bc",
    storageBucket: "linkedin-clone-d11bc.appspot.com",
    messagingSenderId: "576221466402",
    appId: "1:576221466402:web:af63b099baafb38fd35f7b",
    measurementId: "G-GMXCDRMS7Q",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { firebaseApp, auth, provider, storage };

export default db;









