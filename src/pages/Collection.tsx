import React from 'react';
import Products from '../sections/Products';
import { heroConfig, collectionProducts, productsConfig } from '../config';

interface CollectionProps {
  onAddToCart: (product: any) => void;
}

const CollectionPage: React.FC<CollectionProps> = ({ onAddToCart }) => {
  return (
    <div className="bg-white">
      {/* simple hero/banner for collection */}
      <section
        className="relative h-80 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroConfig.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative z-10 text-4xl md:text-6xl text-white font-serif">
          {"Notre Collection"}
        </h1>
      </section>

      <Products onAddToCart={onAddToCart} hideViewAll products={collectionProducts} categories={productsConfig.categories} />
    </div>
  );
};

export default CollectionPage;
