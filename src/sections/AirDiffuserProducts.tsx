import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { airDiffuserProductsConfig } from '../config';
import type { Product } from '../config';

interface AirDiffuserProductsProps {
  onAddToCart: (product: Product) => void;
}

const AirDiffuserProducts = ({ onAddToCart }: AirDiffuserProductsProps) => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  // Show only first 6 products on homepage
  const homepageProducts = airDiffuserProductsConfig.products.slice(0, 6);
  const filteredProducts = homepageProducts;

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedItems(prev => [...prev, product.id]);
    setTimeout(() => {
      setAddedItems(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  return (
    <section
      id="air-diffusers"
      ref={sectionRef}
      className="py-24 md:py-32"
      style={{ backgroundColor: 'rgba(139, 109, 75, 0.04)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[60px]">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className={`inline-block mb-4 text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {airDiffuserProductsConfig.tag}
          </span>
          <h2
            className={`font-serif text-4xl md:text-5xl text-black mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {airDiffuserProductsConfig.heading}
          </h2>
          <p
            className={`max-w-2xl mx-auto text-[#696969] text-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            {airDiffuserProductsConfig.description}
          </p>
        </div>

        {/* Category Filter */}
        {/* Category Filter removed */}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group bg-white border border-[#f0ebe4] transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
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
                      {airDiffuserProductsConfig.addedToCartText}
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={16} />
                      {airDiffuserProductsConfig.addToCartText}
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

        {/* View All Link */}
        {airDiffuserProductsConfig.viewAllText && (
          <div
            className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                navigate('/air-diffusers');
              }}
              className="px-12 py-4 border-2 border-[#8b6d4b] text-[#8b6d4b] font-light tracking-widest text-sm hover:bg-[#8b6d4b] hover:text-white transition-all duration-300"
            >
              {airDiffuserProductsConfig.viewAllText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AirDiffuserProducts;
