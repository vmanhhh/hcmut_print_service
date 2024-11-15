// Import các functions cần thiết từ Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP8_QQMOQQZPFI2SQJo3OOfzN8a3lwLyg",
  authDomain: "spssapp-89373.firebaseapp.com",
  projectId: "spssapp-89373",
  storageBucket: "spssapp-89373.firebasestorage.app",
  messagingSenderId: "85999413488",
  appId: "1:85999413488:web:54f548f44cd04809627a35",
  measurementId: "G-FCB7QPRL15",
};

// Khởi tạo Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const fireStore = getFirestore(firebaseApp);

// Export các instance cần thiết
module.exports = {
  firebaseApp,
  analytics,
  fireStore,
};
