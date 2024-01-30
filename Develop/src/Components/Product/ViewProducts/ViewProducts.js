import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewProducts.css';
import AcquaImage from '../../Product/ProductImages/Acqua.png';
import GoldBarImage from '../../Product/ProductImages/GoldBar.png';

const ViewProducts = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Paco Rabanne', price: '$75', imageUrl: GoldBarImage },
    { id: 2, name: 'Acqua Di Gio', price: '$85', imageUrl: AcquaImage },
    { id: 3, name: 'Product 3', price: '$30', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: '$40', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: '$50', imageUrl: 'https://via.placeholder.com/150' }
  ];

  const getProductDetails = (productId) => {
    return products.find(product => product.id === parseInt(productId));
  };

  const product = getProductDetails(id);

  return (
    <div className="ViewProductContainer"> 
   
      <img src={product.imageUrl} alt={product.name} className='ViewProductImage'/>
      <h1 className='ViewProductName'>{product.name}</h1>
      <p className='ViewProductPrice'>{product.price}</p>
    </div>
  );
};

export default ViewProducts;
