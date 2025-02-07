import React from 'react';

const DiscountSection: React.FC = () => {
  return (
    <div className="bg-purple-300 py-12 text-center rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-purple-900 mb-4">Special Discount</h2>
      
      <p className="text-black-600 mb-6">
        Save up to <span className="font-bold text-purple-600">50%</span> on select items!
      </p>
      <div className="image-content">
    <img src="https://q2-final-hackathon-eight.vercel.app/_next/image?url=%2Fimages%2Ffile-four%2Fleft-img.png&w=640&q=75 " alt="Discount Item" />
</div>
      <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition">
        Shop Now
      </button>
    </div>
  );
};

export default DiscountSection;
