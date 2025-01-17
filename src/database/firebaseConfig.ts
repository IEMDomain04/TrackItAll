// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA2LAe1u5H7yPBnq5Z_XrwN6tE324N1p4o",
    authDomain: "trackitall-fadd6.firebaseapp.com",
    projectId: "trackitall-fadd6",
    storageBucket: "trackitall-fadd6.firebasestorage.app",
    messagingSenderId: "757333481047",
    appId: "1:757333481047:web:e981eb3e41702fab3db512",
    measurementId: "G-H5VB34GXCH"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
