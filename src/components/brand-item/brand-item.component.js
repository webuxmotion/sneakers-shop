import React from 'react';
import './brand-item.styles.scss';

const MenuItem = ({ title, imageUrl, size = '', linkUrl }) => (
  <div className={`brand-item ${size}`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
