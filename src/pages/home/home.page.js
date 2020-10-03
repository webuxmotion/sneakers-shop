import React from 'react';

import Slider from '../../components/slider/slider.component';

import FeaturedWrapper from './wrappers/featured/featured.wrapper';
import BrandsWrapper from './wrappers/brands/brands.wrapper';

const HomePage = () => (
  <>
    <Slider />
    <BrandsWrapper />
    <FeaturedWrapper />
  </>
);

export default HomePage;
