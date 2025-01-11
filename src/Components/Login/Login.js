import React, { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/firebaseContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';  // Correct import for Firebase auth
import Logo from '../../olx-logo.png';
import './Login.css';
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { firebase } = useContext(FirebaseContext);
  
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth(firebase);  // Get the Auth instance from Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert('Login successful');
      
        navigate("/"); // Use navigate for redirection
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Use controlled component for email
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Use controlled component for password
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a href="/signup">Signup</a> {/* Added href to navigate to signup */}
      </div>
    </div>
  );
}

export default Login;
