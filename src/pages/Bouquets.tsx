import React from 'react';
import Products from '../sections/Products';
import Hero from '../sections/Hero';
import SubHero from '../sections/SubHero';
import VideoSection from '../sections/VideoSection';
import Features from '../sections/Features';
import Blog from '../sections/Blog';
import FAQ from '../sections/FAQ';
import About from '../sections/About';
import Contact from '../sections/Contact';
import { heroConfig, collectionProducts } from '../config';

interface BouquetsProps {
  onAddToCart: (product: any) => void;
}

// bouquet subset
const bouquetList = collectionProducts.filter(p => p.category === 'Fleuries');
const bouquetCats = ['Toutes', ...Array.from(new Set(bouquetList.map(p => p.category)))];

const BouquetsPage: React.FC<BouquetsProps> = ({ onAddToCart }) => {
  return (
    <main>
      <Hero />
      <SubHero />
      <VideoSection />
      <Products onAddToCart={onAddToCart} products={bouquetList} categories={bouquetCats} />
      <Features />
      <Blog />
      <FAQ />
      <About />
      <Contact />
    </main>
  );
};

export default BouquetsPage;
