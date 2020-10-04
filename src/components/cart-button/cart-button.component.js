import React from 'react';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/icons/shopping-bag.svg';

import './cart-button.styles.scss';

const CartButton = ({ onClick, theme, itemCount }) => {
  let classes = 'cart-button';

  if (theme) {
    classes += ` cart-button--theme--${theme}`
  }

  return (
    <div className={classes} onClick={onClick}>
      <ShoppingIcon className="cart-button__icon" />
      <span className="cart-button__counter">{itemCount}</span>
    </div>
  )
};

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps)(CartButton);
