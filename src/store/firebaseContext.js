import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/config';  // Correctly initialized `auth` instance
import { onAuthStateChanged } from "firebase/auth";

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user state on auth change
    });

    return () => unsubscribe(); // Clean up the subscription
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FirebaseContext.Provider value={{ firebase: auth }}>
        {children}
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
}
