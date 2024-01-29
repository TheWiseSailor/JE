import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import "./Product.css"

const Product = () => {

  const products = [
    { id: 1, name: 'Product 1', price: '$10', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: '$20', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$50', imageUrl: 'https://via.placeholder.com/150' }
  ];

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-container">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id}> 
            <div className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Product;
