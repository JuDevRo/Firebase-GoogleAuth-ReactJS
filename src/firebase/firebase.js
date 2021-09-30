// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8INgrnZSutPyD_KGsN2V27L_IZ8l-Uuo",
  authDomain: "auth-1e55b.firebaseapp.com",
  projectId: "auth-1e55b",
  storageBucket: "auth-1e55b.appspot.com",
  messagingSenderId: "119174282781",
  appId: "1:119174282781:web:79f0492cf3efc381c7d0f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth()
auth.languageCode = 'en';
export {provider, auth}
