// src/ProductList.js
import React from 'react';
import products from './faker/data';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row h-[432px] animate-slide-up`}
            style={{ animationDelay: `${index * 0.1}s` }} // Stagger animations
          >
            <div className="md:w-1/2 p-4 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">Color: {product.color}</p>
              </div>
              <Link to={`/product/${product.id}`} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Buy Now
              </Link>
            </div>
            <img src={product.imageUrl} alt={product.name} className="md:w-1/2 h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
