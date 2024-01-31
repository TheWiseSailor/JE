import React from 'react';
import { useParams } from 'react-router-dom';
import './ViewProducts.css';
import AcquaImage from '../../Product/ProductImages/Acqua.png';
import GoldBarImage from '../../Product/ProductImages/GoldBar.png';
import VersaceEros from '../../Product/ProductImages/VersaceEros.png';
import GucciEAU from '../../Product/ProductImages/GucciEAU.png';
import BleuDeChanel from '../../Product/ProductImages/BleuDeChanel.png';

const ViewProducts = () => {
  const { id } = useParams();

  const products = [
    { id: 1, name: 'Paco Rabanne', price: '$75', imageUrl: GoldBarImage },
    { id: 2, name: 'Acqua Di Gio', price: '$85', imageUrl: AcquaImage },
    { id: 3, name: 'Versace Eros', price: '$100', imageUrl: VersaceEros  },
    { id: 4, name: 'GucciEAU', price: '$140', imageUrl: GucciEAU },
    { id: 5, name: 'Product 5', price: '$150', imageUrl: BleuDeChanel }
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
