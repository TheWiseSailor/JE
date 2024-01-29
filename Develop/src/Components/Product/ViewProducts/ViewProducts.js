import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewProducts.css';

const ViewProducts = () => {
  const { id } = useParams();

  const getProductDetails = (productId) => {
    return { id: productId, name: `Product ${productId}`, price: `$${productId * 10}`, imageUrl: `https://via.placeholder.com/150?text=Product+${productId}` };
  };

  const product = getProductDetails(id);

  return (
    <div className="ViewProductContainer"> 
   
      <img src={product.imageUrl} alt={product.name}  className='ViewProductImage'/>
      <h1 className='ViewProductName'>{product.name}</h1>
      <p className='ViewProductPrice'>{product.price}</p>
    </div>
  );
};

export default ViewProducts;
