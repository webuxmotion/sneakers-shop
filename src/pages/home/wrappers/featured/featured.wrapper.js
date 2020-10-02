import React from 'react';

import Featured from '../../../../components/featured/featured.component';

import SHOP_DATA from './shoes.data';

const FeaturedWrapper = () => (
  <Featured
    items={Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])}
    title="Featured Shoes"
    action={{
      text: 'Shop All Collection',
      link: '/shop'
    }}
  />
);

export default FeaturedWrapper;
