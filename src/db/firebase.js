import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Replace with your app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.APIKEY_FIREBASE,
  authDomain: import.meta.env.AUTHDOMAIN_FIREBASE,
  projectId: import.meta.env.PROJECTID_FIREBASE,
  storageBucket: import.meta.env.STORAGEBUCKET_FIREBASE,
  messagingSenderId: import.meta.env.MESSAGINGSENDERID_FIREBASE,
  appId: import.meta.env.APIID_FIREBASE
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const dataBase = getFirestore(app);
