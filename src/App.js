// App.js
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/firebaseContext';
import { onAuthStateChanged } from 'firebase/auth'; // Import the method from Firebase v9+
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Create from './Pages/Create';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebase, (user) => {
      setUser(user);
    });

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [firebase, setUser]);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
