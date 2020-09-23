import React, { useRef, useEffect } from 'react';
import Header from './components/Header';
import products from './products';
import Product from './components/Product';
import { gsap } from 'gsap';
import { CartProvider } from './contexts/use-cart';
import './App.css';

export default function App() {
  const listRef = useRef(null);

  useEffect(() => {
    gsap.from(listRef.current, {
      duration: 0.5,
      y: 30,
      ease: 'Power3.easeOut',
      delay: 1,
    });

    gsap.to(listRef.current, {
      duration: 1,
      opacity: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <CartProvider>
      <div className="app">
        {/* header */}
        <Header />

        <main>
          <div className="products-list" ref={listRef}>
            {/* show products here */}

            {products.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  );
}
