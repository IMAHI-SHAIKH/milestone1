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
      name: 'wood Sofa',
      image: '/images/image copy 3.png',
      price: '$350',
      rating: 4,
      description: ' stylish and comfortable modern sofa.',
    },
    {
      id: 2,
      name: 'comfy Chair',
      image: '/images/image copy 22.png',
      price: '$150',
      rating: 5,
      description: 'A beautiful comfy chair.',
    },
    {
      id: 3,
      name: ' basic Chair',
      image: '/images/image copy 15.png',
      price: '$70',
      rating: 3,
      description: 'A classic chair for  your hoom.',
    },
 
  ];
  
  const ShopList: React.FC = () => {
    return (
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center mb-8">Trending Products</h1>
        
        <div className="space-y-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 md:p-6"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-26 h-26 md:w-40 md:h-40 object-cover rounded-md"
              />
              
              <div className="mt-4 md:mt-0 md:ml-6 flex flex-col">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-black-500 mt-2">{product.description}</p>
                <div className="flex items-center mt-4">
                  
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
  