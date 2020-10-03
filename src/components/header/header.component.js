import React from 'react';
import CartButton from '../cart-button/cart-button.component';

import Logo from '../logo/logo.component';

import './header.styles.scss';

const Header = () => (
  <header className="header">
    <div className="header__column">
      <Logo />
    </div>
    <div className="header__column header__column--big">
      <nav className="header__nav">
        <a href="/" className="header__link">Home</a>
        <a href="/shop" className="header__link">Shop</a>
      </nav>
    </div>
    <div className="header__column">
      <nav className="header__nav">
        <a href="/login" className="header__link">Login</a>
      </nav>
      <div className="header__cart-button-wrapper">
        <CartButton />
      </div>
    </div>
  </header>
);

export default Header;
