import firebase from "firebase";

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

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); //for authentication
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();  //for storing images

export { auth, provider, storage };
export default db;
