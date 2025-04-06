import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-bold text-red-600">Product not found</h2>
        <button 
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div>
          <button 
            onClick={() => navigate('/')}
            className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to products
          </button>
          
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-2xl font-bold text-blue-600 mt-2">${product.price.toFixed(2)}</p>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900">Description</h2>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>
          
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-900">Features</h2>
            <ul className="mt-2 pl-5 list-disc text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index} className="mt-1">{feature}</li>
              ))}
            </ul>
          </div>
          
          <button 
            className="mt-8 w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
