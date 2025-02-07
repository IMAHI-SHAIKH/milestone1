// import React from 'react';
// import products from '../utils/productsData';

// const ShopGrid: React.FC = () => {
//   return (
//     <div className="shop-grid py-14">
//       <h2 className="text-2xl font-bold text-center mb-8">Top Catagories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
//         {products.map((product) => (
//           <div key={product.id} className="p-4 bg-purple-100 shadow rounded">
//             <img src={product.image} alt={product.name} className="w-full mb-4" />
//             <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//             <p className="text-gray-600">{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopGrid;

import products from '@/utils/productsData';
import React from 'react';

interface ShopGrid {
  id: number;
  title: string;
  image: string;
}

const blogPosts: ShopGrid[] = [
  {
    id: 1,
    title: ' Modern chair',
    image: '/images/image copy 26.png',
   
  },
  {
    id: 2,
    title: ' Décor chair',
    image: '/images/image.png',
   
  },
  {
    id: 3,
    title: 'stool chair',
    image: '/images/image copy 16.png',
    
  },
];

const ShopGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Top Catagories</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-semibold mt-4">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGrid;

