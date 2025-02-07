import React from 'react';

import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import TrendingProducts from '@/components/TrendingProducts';
import DiscountSection from '@/components/DiscountSection';
import ShopList from '@/components/ShopList';
import ShopGrid from '@/components/ShopGrid';
import Navbar from '@/components/Navbar';
import BlogPage from '@/components/BlogPage';




const HomePage: React.FC = () => {
  return (
    <div>
      
      <Navbar />

      {/* Hero Section of page */}
      <header className="bg-purple-100 py-20 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Best furniture for your Home</h1>
        <h1 className='bg-purple-100 py-25  text-centre text-xl'>New Furniture Collection
        Trends in 2024</h1>
       
<div className="image-content">
    <img src="Sofa1.png" alt="Furniture" />
</div>



        <p className="text-black-600 text-lg">
          Explore our latest collection of modern furniture and home decor!
        </p>
      </header>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Special Offer 50% off</h2>
          <TrendingProducts />
        </div>
      </section>

      {/* Discount Section */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <DiscountSection />
        </div>
      </section>

      {/* ShopList */}
<section className='py-16 bg-white'>
<div className='container mx-auto px-4'>
<ShopList/>
</div>
</section>

{/* ShopGrid */}
<section className='py-15 bg-purple-200'>
<div className='box mx-auto px-5'>
<ShopGrid />
</div>
</section>

{/* BlogPage */}
<section className='box bg-purple-400'>
<div className=' box-border mx-6 px-6'>
<BlogPage/>
</div>
</section>

{/* HomePage
<section className='box bg-purple-200'>
  <div className=' box border-separate mx-5 px 6'>
<HomePage/>
  </div> 
</section> */}
{/* 
Contact page
<section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-8">Contact Page</h3>
          <ContactPage />
        </div>
      </section> */}



      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
