import React from 'react';
import BRANDS_DATA from './brands.data';

import Brands from '../../../../components/brands/brands.component';

import './brands.styles.scss';

const BrandsWrapper = () => (
  <div className="brands-wrapper">
    <Brands
      items={BRANDS_DATA}
    />
  </div>
);

export default BrandsWrapper;
