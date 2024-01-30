import React from 'react';
import { Link } from 'react-router-dom';
import AcquaImage from './ProductImages/Acqua.png';
import GoldBarImage from './ProductImages/GoldBar.png';

import "./Product.css"

const Product = () => {

  const products = [
    { id: 1, name: 'Paco Rabanne', price: '$75', imageUrl: GoldBarImage },
    { id: 2, name: 'Acqua Di Gio', price: '$85', imageUrl: AcquaImage },
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
              <h3 className="text-decoration-none">{product.name}</h3>
            </Link>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;


//in the futurem add like an add to cart and make itto where we can view all our products we have in our car as well as making it to where we can add or delete as well