import React from 'react';
import './logo.styles.scss';

const Logo = ({ size = 'default' }) => (
  <a href="/" className={`logo logo--size--${size}`}>Sneakers</a>
);

export default Logo;
