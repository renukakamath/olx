import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { FirebaseContext, AuthContext } from "../../store/firebaseContext";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../firebase/config"; // Import Firestore instance
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const Create = () => {
  const { user } = useContext(AuthContext); // Auth Context for user details
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
     const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async () => {
    if (!user) {
      alert("You must be logged in to add a product.");
      return; // Ensure user is logged in before submitting
    }

    try {
      const date = new Date(); // Capture current date
      // Add product data to Firestore
      await addDoc(collection(db, "product"), {
        name,
        category,
        price,
        userId: user.uid, // Ensure userId is set from the logged-in user
        createdAt: date.toDateString(),
      });
      alert("Product added successfully!");
      navigate("/"); // Use navigate for redirection

    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please try again.");
    }
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name="Price"
          />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">
            Upload and Submit
          </button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
