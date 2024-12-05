// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC09TBV-mTyccTopJf9jO6xdRzAXMILZVI",
    authDomain: "byteblaze-52d50.firebaseapp.com",
    projectId: "byteblaze-52d50",
    storageBucket: "byteblaze-52d50.firebasestorage.app",
    messagingSenderId: "666340041338",
    appId: "1:666340041338:web:2a7c9641423a09406e91c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth


/**
 * for deployment - npm install -g firebase-tools
 * 
 * next = firebase login
 *        firebase init
 *        firebase deploy
 * 
 */