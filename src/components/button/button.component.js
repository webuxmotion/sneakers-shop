import React from 'react';

import './button.styles.scss';

const Button = ({ children, theme, ...rest }) => {
  let classes = 'button';
  let CustomTag = 'button';

  if (theme) {
    classes += ` button--theme--${theme}`
  }

  if (rest.href) {
    CustomTag = 'a'
  }

  return (
    <CustomTag className={classes} {...rest}>
      {children}
    </CustomTag>
  )
};

export default Button;
