import React from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  rating: number;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Modern Sofa',
    image: '/images/image copy 24.png',
    price: '$250',
    rating: 4,
    description: ' stylish and comfortable modern sofa.',
  },
  {
    id: 2,
    name: 'Elegant Chair',
    image: '/images/image copy 17.png',
    price: '$120',
    rating: 5,
    description: 'A beautiful chair with an elegant design.',
  },
  {
    id: 3,
    name: 'Classic Chair',
    image: '/images/image copy 20.png',
    price: '$75',
    rating: 3,
    description: 'A classic chair for  your room.',
  },
//   {
//     id: 4,
//     name: 'sofa Chair',
//     image: '/images/image copy 23.png',
//     price: '$115',
//     rating: 6,
//     description: 'A classic sofa chair for  your hoom.',
//   },
];

const ShopList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold text-center mb-8">Shop List</h1>
      
      <div className="space-y-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 md:p-6"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-md"
            />
            
            <div className="mt-4 md:mt-0 md:ml-6 flex flex-col">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-500 mt-2">{product.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500">
                  {'★'.repeat(product.rating)}
                  {'☆'.repeat(5 - product.rating)}
                </span>
                <span className="ml-2 text-gray-700">({product.rating} stars)</span>
              </div>
              <p className="text-lg font-bold mt-4">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
