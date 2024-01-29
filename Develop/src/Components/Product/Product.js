import React from 'react';
import { Link } from 'react-router-dom';

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
      <h1></h1>
      <div className="product-container">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <Link to={`/product/${product.id}`}>
              <h3>{product.name}</h3>
            </Link>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
