import React from 'react';
import './logo.styles.scss';

const Logo = ({ size, theme }) => {
  let classes = 'logo';

  if (theme) {
    classes += ` logo--theme--${theme}`
  }

  if (size) {
    classes += ` logo--size--${size}`
  }

  return (
    <a href="/" className={classes}>Sneakers</a>
  );
};

export default Logo;
