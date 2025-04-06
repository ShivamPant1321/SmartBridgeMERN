import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Discover the Latest Tech Products
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Shop the newest gadgets and electronics from top brands. From smartphones to smart home devices, we have everything you need.
          </p>
          <div className="mt-10">
            <a
              href="#products"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-base font-medium hover:bg-gray-100 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
