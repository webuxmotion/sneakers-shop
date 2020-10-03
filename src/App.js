import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import ProductsPage from './pages/products/products.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Cart from './components/cart/cart.component';

function App() {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <div className="app">
      <div className="app__content">
        <Cart open={isOpenCart} setIsOpenCart={setIsOpenCart} />
        <Header setIsOpenCart={setIsOpenCart} />
        <ShopPage />
        <ProductsPage />
        <HomePage />
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
