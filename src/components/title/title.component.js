import React from 'react';
import './title.styles.scss';

const Title = ({ value = "Default Title" }) => (
  <h2 className="title">{value}</h2>
);

export default Title;
