import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyCPChUh3T9yy80AylCSvfP9lDik0VPu95I",
  authDomain: "fir-e7be0.firebaseapp.com",
  projectId: "fir-e7be0",
  storageBucket: "fir-e7be0.appspot.com",
  messagingSenderId: "123761642124",
  appId: "1:123761642124:web:f2023d7b2c3ad28e5609a9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
