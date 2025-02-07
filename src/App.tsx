import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import pages
import HomePage from './components/HomePage';
import ShopGrid from './components/ShopGrid';
import ShopList from './components/ShopList';
import BlogPage from './components/BlogPage';
import FeaturedProducts from './components/FeaturedProducts';
import DiscountSection from './components/DiscountSection';
import TrendingProducts from './components/TrendingProducts';


const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <header>
          <Navbar />
        </header>

        Main Content
        <main className="flex-grow">
          <Routes>
            <Route path= "/"element={<TrendingProducts />} />
            <Route path="/"element={<DiscountSection />} />
            <Route path="/" element={<FeaturedProducts />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/shop-grid" element={<ShopGrid />} />
            <Route path="/shop-list" element={<ShopList />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
