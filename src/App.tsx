import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { siteConfig } from './config';
import type { Product } from './config';
import Navigation from './sections/Navigation';
import Checkout from './sections/Checkout';
import Hero from './sections/Hero';
import SubHero from './sections/SubHero';
import VideoSection from './sections/VideoSection';
import Products from './sections/Products';
import DecorationProducts from './sections/DecorationProducts';
import AirDiffuserProducts from './sections/AirDiffuserProducts';
import Features from './sections/Features';
import Blog from './sections/Blog';
import FAQ from './sections/FAQ';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CollectionPage from './pages/Collection';
import DecorationsPage from './pages/DecorationsCollection';
import AirDiffuserPage from './pages/AirDiffuserCollection';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });
  }, []);

  const handleRemoveFromCart = useCallback((id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const handleUpdateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white" lang={siteConfig.language || undefined}>
        <Navigation
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          isCheckoutOpen={isCheckoutOpen}
          onCheckout={() => setIsCheckoutOpen(true)}
        />
        <Checkout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          onClearCart={clearCart}
          cartItems={cartItems}
          totalPrice={cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <SubHero />
                <VideoSection />
                <Products onAddToCart={handleAddToCart} />
                <DecorationProducts onAddToCart={handleAddToCart} />
                <AirDiffuserProducts onAddToCart={handleAddToCart} />
                <Features />
                <Blog />
                <FAQ />
                <About />
                <Contact />
              </main>
            }
          />
          <Route
            path="/collection"
            element={
              <main>
                <CollectionPage onAddToCart={handleAddToCart} />
              </main>
            }
          />
          <Route
            path="/decorations"
            element={
              <main>
                <DecorationsPage onAddToCart={handleAddToCart} />
              </main>
            }
          />
          <Route
            path="/air-diffusers"
            element={
              <main>
                <AirDiffuserPage onAddToCart={handleAddToCart} />
              </main>
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
