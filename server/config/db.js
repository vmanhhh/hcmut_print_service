// Import các functions cần thiết từ Firebase SDK
const { initializeApp } = require("firebase/app");
const {
  getFirestore,
} = require("firebase/firestore");

require('dotenv').config()
// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID,
};

// Khởi tạo Firebase
const firebaseApp = initializeApp(firebaseConfig);
const fireStore = getFirestore(firebaseApp);

// Export các instance cần thiết
module.exports = {
  firebaseApp,
  fireStore,
};
