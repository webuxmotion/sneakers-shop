import React from 'react';

import './cart.styles.scss';

const Cart = ({ open, setIsOpenCart }) => {
  let classes = 'cart';

  if (open) {
    classes += ' is-open'
  }

  return (
    <div className={classes}>
      <div className='cart__body'>
        
      </div>
      <div className='cart__bg' onClick={() => setIsOpenCart(false)}></div>
    </div>
  )
};

export default Cart;
