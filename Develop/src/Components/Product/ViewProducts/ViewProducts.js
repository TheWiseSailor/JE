import React from 'react';
import { useParams } from 'react-router-dom';

const ViewProducts = () => {
  const { id } = useParams(); 

  const getProductDetails = (productId) => {

    return { id: productId, name: `Product ${productId}`, price: `$${productId * 10}`, imageUrl: `https://via.placeholder.com/150?text=Product+${productId}` };
  };

  const product = getProductDetails(id); 

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.price}</p>
    </div>
  );
};

export default ViewProducts;
