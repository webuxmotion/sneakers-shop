import React from 'react';
import './button.styles.scss';

const Button = ({ children, ...rest }) => (
  <button className={`button`} {...rest}>
    {children}
  </button>
);

export default Button;
