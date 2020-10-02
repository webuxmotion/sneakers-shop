import React from 'react';
import Brands from '../../components/brands/brands.component';

import FeaturedWrapper from './wrappers/featured/featured.wrapper';

import './home.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Brands />
    <FeaturedWrapper />
  </div>
);

export default HomePage;
