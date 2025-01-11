import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import { getFirestore, collection, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase/config"; // Firebase configuration
import Logo from "../../olx-logo.png";
import "./Signup.css";


export default function Signup() {
  const [username, setUsername] = useState(""); 
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const result = await createUserWithEmailAndPassword(auth, email, password);

      // Update the user's display name
      await updateProfile(result.user, { displayName: username });

      // Save user details to Firestore under "users" collection
      const userDoc = doc(db, "users", result.user.uid);
      await setDoc(userDoc, {
        id: result.user.uid,
        username,
        email,
        phone,
        createdAt: new Date().toISOString(),
      });

      // Notify the user and redirect to login
      alert("Signup successful! Redirecting to login...");
      navigate("/login"); // Use navigate for redirection
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert(error.message); // Display the error message to the user
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="OLX Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  );
}
