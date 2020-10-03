import React from 'react';
import SHOP_DATA from './shoes.data';

import Featured from '../../../../components/featured/featured.component';

import './featured.styles.scss';

const FeaturedWrapper = () => (
  <div className="featured-wrapper">
    <Featured
      items={SHOP_DATA.adidas.items}
      title="Featured Shoes"
      action={{
        text: 'Shop All Collection',
        link: '/shop'
      }}
    />
  </div>
);

export default FeaturedWrapper;
