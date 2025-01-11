import React, { createContext, useState } from 'react';
import { auth } from '../firebase/config'; // Correctly initialized `auth` instance

export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);

export default function Context({ children }) {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FirebaseContext.Provider value={{ firebase: auth }}>
        {children}
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
}
