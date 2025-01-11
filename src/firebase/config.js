import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore initialization


const firebaseConfig = {
    apiKey: "AIzaSyCPChUh3T9yy80AylCSvfP9lDik0VPu95I",
    authDomain: "fir-e7be0.firebaseapp.com",
    projectId: "fir-e7be0",
    storageBucket: "fir-e7be0.firebasestorage.app",
    messagingSenderId: "123761642124",
    appId: "1:123761642124:web:f2023d7b2c3ad28e5609a9"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app); // Authentication instance
export const db = getFirestore(app); // Firestore database instance

export default app;