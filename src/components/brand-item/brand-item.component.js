import React from 'react';
import './brand-item.styles.scss';

const MenuItem = ({ title, image, link }) => (
  <div className="brand-item">
    <a href={link} className="brand-item__image-wrapper">
      <div className="brand-item__image-bg" style={{
        backgroundImage: `url(/images/${image})`
      }}></div>
    </a>
    <div className="brand-item__info">
      <a href={link} className="brand-item__title">{title}</a>
      <div className="brand-item__columns">
        <div className="brand-item__column">
          <span className="brand-item__counter">14 Products</span>
        </div>
        <div className="brand-item__column">
          <a href={link} className="brand-item__bottom-link">+ Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
);

export default MenuItem;
