// firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Firestore (if needed)


const firebaseConfig = {
  apiKey: "AIzaSyCPChUh3T9yy80AylCSvfP9lDik0VPu95I",
  authDomain: "fir-e7be0.firebaseapp.com",
  projectId: "fir-e7be0",
  storageBucket: "fir-e7be0.appspot.com",
  messagingSenderId: "123761642124",
  appId: "1:123761642124:web:f2023d7b2c3ad28e5609a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export instances for use in other parts of your app
export { auth, db };
