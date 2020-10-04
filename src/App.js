import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/home/home.page';
import ShopPage from './pages/shop/shop.page';
import CheckoutPage from './pages/checkout/checkout.page';
import LoginPage from './pages/login/login.page';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Cart from './components/cart/cart.component';

import './App.css';

function App({ currentUser }) {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [indexPage, setIndexPage] = useState(false);
  
  return (
    <div className="app">
      <div className="app__content">
        <Cart open={isOpenCart} setIsOpenCart={setIsOpenCart} />
        <Header setIsOpenCart={setIsOpenCart} absolute={indexPage ? true : null} theme={`${indexPage ? "transparent-light" : null}`}  />
        <Switch>
          <Route exact path='/' component={() => <HomePage setIndexPage={setIndexPage} />} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/login' render={() =>
              currentUser ? (
                <Redirect to='/' />
              ) : (
                <LoginPage />
              )
            }
          />
        </Switch>
      </div>
      <div className="app__footer">
        <Footer />
      </div>
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }}) => ({
  currentUser
});

export default connect(mapStateToProps)(App);
