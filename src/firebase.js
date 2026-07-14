import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA52QZE2X9HOLsEMhtRt2FA3XIRC5pKTM",
  authDomain: "projeto-dfdf8.firebaseapp.com",
  projectId: "projeto-dfdf8",
  storageBucket: "projeto-dfdf8.firebasestorage.app",
  messagingSenderId: "431301997075",
  appId: "1:431301997075:web:e16ab5ae6a2a8b6ee505e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
