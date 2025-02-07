import React from 'react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const featuredProducts: Product[] = [
  { id: 1, name: 'Modern Chair', price: '$150', image: '/images/image copy 18.png' },
  { id: 2, name: 'Stylish Sofa', price: '$250', image: '/images/image copy 17.png' },
  { id: 3, name: 'Elegant chair', price: '$75', image: '/images/image copy 15.png' },
  { id: 4, name: 'Wooden Table', price: '$300', image: '/images/image copy 9.png' },
];

const FeaturedProducts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-500">{product.price}</p>
          <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
