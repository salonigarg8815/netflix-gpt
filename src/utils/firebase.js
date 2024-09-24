import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJwyjliWFEl5LUozDumzYLbb7d5P7cGrQ",
    authDomain: "netflixgpt-8dddd.firebaseapp.com",
    projectId: "netflixgpt-8dddd",
    storageBucket: "netflixgpt-8dddd.appspot.com",
    messagingSenderId: "570530105888",
    appId: "1:570530105888:web:ed204e8f85bcaee2d6ca45",
    measurementId: "G-CBY1466RGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();