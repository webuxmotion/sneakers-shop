import React from 'react';
import Brands from '../../components/brands/brands.component';
import Slider from '../../components/slider/slider.component';

import FeaturedWrapper from './wrappers/featured/featured.wrapper';

import './home.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <Slider />
    <Brands />
    <FeaturedWrapper />
  </div>
);

export default HomePage;
