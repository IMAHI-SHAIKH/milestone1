import React from 'react';
import FeaturedProducts from './FeaturedProducts';
import TrendingProducts from './TrendingProducts'
import DiscountSection from './DiscountSection'
import BlogPage from './BlogPage';

import ShopGrid from './ShopGrid';
import ShopList from './ShopList';


const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <header className="bg-purple-100 text-center py-16">
        <h1 className="text-4xl font-bold mb-4">New Furniture Collection</h1>
        <p className="text-gray-600">Explore our 2024 trends</p>
      </header>
      <FeaturedProducts />
      <TrendingProducts />
      <DiscountSection />
      <BlogPage />
    
      <ShopList />
      <ShopGrid />
    </div>
  );
};

export default HomePage;
