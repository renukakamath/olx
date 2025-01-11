import React, { useState, useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from '../../firebase/config'; // Import the Firestore instance from config

function Posts() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching data
        const productsRef = collection(db, 'product'); // Reference to 'products' collection
        const snapshot = await getDocs(productsRef); // Get documents from Firestore
        const allPost = snapshot.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id, // Adding document ID
          };
        });
        console.log('Fetched product:', allPost); // Debug: check if products are fetched
        setProducts(allPost); // Set products in state
      } catch (error) {
        console.error('Error fetching product:', error); // Log errors
        setError('Failed to load product.'); // Set error message
      } finally {
        setLoading(false); // Set loading state to false after fetching is done
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {loading ? (
            <p>Loading...</p> // Show loading message while fetching data
          ) : error ? (
            <p>{error}</p> // Show error message if fetching fails
          ) : product.length > 0 ? (
            product.map((product) => (
              <div key={product.id} className="card">
                <div className="favorite">
                  <Heart />
                </div>
                <div className="image">
                  <img
                    src={product.imageUrl || "../../../Images/default.jpg"} // Set image from Firestore data
                    alt={product.name || "Product"} // Display name as alt text
                  />
                </div>
                <div className="content">
                  <p className="rate">&#x20B9; {product.price}</p>
                  <span className="kilometer">{product.name}</span>
                  <p className="name">{product.category}</p>
                </div>
                <div className="date">
                  <span>{product.createdAt || 'Date not available'}</span> {/* Handle missing createdAt */}
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p> // Display message if no products are found
          )}
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="Recommended" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name">YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
