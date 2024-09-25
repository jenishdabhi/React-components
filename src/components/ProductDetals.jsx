// src/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from './faker/data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="md:w-1/2 p-4">
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600">Color: {product.color}</p>
        <p className="text-gray-800 font-bold text-xl mt-2">{product.price}</p>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
          Buy Now
        </button>
      </div>
      <div className="md:w-1/2 p-4">
        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default ProductDetail;
