import React from 'react';

import BrandItem from '../brand-item/brand-item.component';

import './brands.styles.scss';

const Brands = ({ items = [] }) => (
  <div className="brands">
    <div className="brands__container">
      {
        items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...rest }) => (
            <div className="brands__item">
              <BrandItem key={id} {...rest} />
            </div>
          ))
      }
    </div>
  </div>
)

export default Brands;
