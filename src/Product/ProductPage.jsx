import React, { useState } from "react";


const products = [
  {
    id: 1,
    name: "Product One",
    price: "#19.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product Two",
    price: "#29.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product Three",
    price: "#39.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Product Four",
    price: "#49.99",
    image: "https://www.pinterest.com/pin/112308584462149194/",
  },
 
];

const Product = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-amber-600 font-bold mt-2">{product.price}</p>
                <button className="mt-4 w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-xl  transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
