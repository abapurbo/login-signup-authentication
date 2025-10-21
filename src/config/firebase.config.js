// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyApQ2DcIvfGzlKnp3mHNohVnc-PTo6xdEo",
    authDomain: "practise-firebase-86ecc.firebaseapp.com",
    projectId: "practise-firebase-86ecc",
    storageBucket: "practise-firebase-86ecc.firebasestorage.app",
    messagingSenderId: "766440224228",
    appId: "1:766440224228:web:aa96d2128085fe20f543f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)