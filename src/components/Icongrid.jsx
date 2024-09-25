// src/IconGrid.js
import React from 'react';

const icons = [
  { id: 1, icon: '🌟', description: 'Quality Products' },
  { id: 2, icon: '🚚', description: 'Fast Shipping' },
  { id: 3, icon: '💰', description: 'Affordable Prices' },
  { id: 4, icon: '📦', description: 'Wide Selection' },
  { id: 5, icon: '🔒', description: 'Secure Payments' },
  { id: 6, icon: '🛠️', description: 'Customer Support' },
];

const IconGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Our Features</h2>
      <div className="flex justify-around">
        {icons.map((item) => (
          <div key={item.id} className="flex flex-col items-center border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="text-lg text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
