// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/firebaseContext';
import { auth } from './firebase/config';  // Corrected import

import Context from './store/firebaseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{ firebase: auth }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
);
