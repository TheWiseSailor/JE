import React from 'react';
import { Link } from 'react-router-dom';
import AcquaImage from './ProductImages/Acqua.png';
import GoldBarImage from './ProductImages/GoldBar.png';
import VersaceEros from './ProductImages/VersaceEros.png';
import GucciEAU from './ProductImages/GucciEAU.png';
import BleuDeChanel from './ProductImages/BleuDeChanel.png';

import AOSInitializer from "../AOS/AOSInitializer";

import "./Product.css"

const Product = () => {

  const products = [
    { id: 1, name: 'Paco Rabanne', price: '$75', imageUrl: GoldBarImage },
    { id: 2, name: 'Acqua Di Gio', price: '$85', imageUrl: AcquaImage },
    { id: 3, name: 'Versace Eros', price: '$100', imageUrl: VersaceEros  },
    { id: 4, name: 'Gucci EAU', price: '$140', imageUrl: GucciEAU },
    { id: 5, name: 'Bleu De Chanel', price: '$150', imageUrl: BleuDeChanel }
  ];

  return (
    <div className="product-page">
      <h1></h1>
      <div className="product-container">
      <AOSInitializer />
        {products.map(product => (
          <div className="product-card" data-aos="fade-down"
          data-aos-duration="3000" key={product.id}>
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