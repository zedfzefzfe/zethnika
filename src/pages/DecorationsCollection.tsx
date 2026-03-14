import React from 'react';
import { ShoppingBag, Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { heroConfig, decorationProductsConfig } from '../config';
import type { Product } from '../config';

interface DecorationsCollectionProps {
  onAddToCart: (product: Product) => void;
}

const DecorationsCollection: React.FC<DecorationsCollectionProps> = ({ onAddToCart }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [activeCategory, setActiveCategory] = useState(decorationProductsConfig.categories[0] || 'Toutes');
  const [addedItems, setAddedItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  let filteredProducts = decorationProductsConfig.products;
  if (decorationProductsConfig.categories.length > 0 && activeCategory) {
    filteredProducts = activeCategory === decorationProductsConfig.categories[0]
      ? decorationProductsConfig.products
      : decorationProductsConfig.products.filter(p => p.category === activeCategory);
  }

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section
        className="relative h-80 flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroConfig.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <span className="inline-block mb-4 text-sm tracking-[0.2em] text-[#d4b896] font-medium uppercase">
            {decorationProductsConfig.tag}
          </span>
          <h1 className="text-4xl md:text-6xl text-white font-serif">
            {decorationProductsConfig.heading}
          </h1>
        </div>
      </section>

      {/* Products Section */}
      <section
        ref={sectionRef}
        className="py-24 md:py-32 bg-white"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
          {/* Description */}
          <div className="text-center mb-12">
            <p
              className={`max-w-2xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {decorationProductsConfig.description}
            </p>
          </div>

          {/* Category Filter */}
          {/* Category Filter removed */}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-[#fafafa] border border-[#f5f5f5] transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative h-[400px] overflow-hidden bg-[#fafafa]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 flex items-center gap-2 text-sm tracking-wide transition-all duration-300 ${
                      addedItems.includes(product.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-[#8b6d4b] text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
                    }`}
                  >
                    {addedItems.includes(product.id) ? (
                      <>
                        <Check size={16} />
                        {decorationProductsConfig.addedToCartText}
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={16} />
                        {decorationProductsConfig.addToCartText}
                      </>
                    )}
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-5 bg-white">
                  <span className="text-xs text-[#aea4a4] tracking-wide uppercase">{product.category}</span>
                  <h3 className="font-serif text-xl text-black mt-1">{product.name}</h3>
                  <p className="text-[#aea4a4] font-medium mt-2">{product.price.toFixed(2)} MAD</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DecorationsCollection;
