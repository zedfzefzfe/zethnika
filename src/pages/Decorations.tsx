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

interface DecorationsProps {
  onAddToCart: (product: any) => void;
}

const decorationList = collectionProducts.filter(p => ['Boisées', 'Orientales'].includes(p.category));
const decorationCats = ['Toutes', ...Array.from(new Set(decorationList.map(p => p.category)))];

const DecorationsPage: React.FC<DecorationsProps> = ({ onAddToCart }) => {
  return (
    <main>
      <Hero />
      <SubHero />
      <VideoSection />
      <Products onAddToCart={onAddToCart} products={decorationList} categories={decorationCats} />
      <Features />
      <Blog />
      <FAQ />
      <About />
      <Contact />
    </main>
  );
};

export default DecorationsPage;
