// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAP8_QQMOQQZPFI2SQJo3OOfzN8a3lwLyg",
    authDomain: "spssapp-89373.firebaseapp.com",
    projectId: "spssapp-89373",
    storageBucket: "spssapp-89373.firebasestorage.app",
    messagingSenderId: "85999413488",
    appId: "1:85999413488:web:54f548f44cd04809627a35",
    measurementId: "G-FCB7QPRL15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const getFirebaseApp = () => app;