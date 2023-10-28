// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY ,
    authDomain: process.env.REACT_APP_PUBLIC_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_PUBLIC_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_PUBLIC_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId : process.env.REACT_APP_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ,
    appId: process.env.REACT_APP_PUBLIC_FIREBASE_APP_ID ,
    measurementId: process.env.REACT_APP_PUBLIC_FIREBASE_MEASUREMENT_ID
};

console.log(process.env.REACT_APP_PUBLIC_FIREBASE_API_KEY)

// Initialize Firebase
let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth();
export default firebase_app;