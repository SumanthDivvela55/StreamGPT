// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXuvqqSt0hzXb41joHK9tvGx9vL04sNiU",
    authDomain: "streamgpt-fa6cf.firebaseapp.com",
    projectId: "streamgpt-fa6cf",
    storageBucket: "streamgpt-fa6cf.firebasestorage.app",
    messagingSenderId: "343139319040",
    appId: "1:343139319040:web:5cce81d3c34375bf8187e5",
    measurementId: "G-6KDV4Y9DXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();