import React from 'react';

import Brands from '../../components/brands/brands.component';
import Slider from '../../components/slider/slider.component';

import FeaturedWrapper from './wrappers/featured/featured.wrapper';

const HomePage = () => (
  <>
    <Slider />
    <Brands />
    <FeaturedWrapper />
  </>
);

export default HomePage;
