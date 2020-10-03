import React from 'react';
import SHOP_DATA from '../../../../data/shoes.data';

import ProductCard from '../../../../components/product-card/product-card.component';

import './products.styles.scss';

const ProductsWrapper = () => (
  <div className="products-page-products-wrapper">
    <div className="products-page-products-wrapper__list">
      {
        SHOP_DATA['adidas'].items
          .map(item => (
            <div className="products-page-products-wrapper__item" key={item.id}>
              <ProductCard item={item} />
            </div>
          ))
      }
    </div>
  </div>
);

export default ProductsWrapper;
