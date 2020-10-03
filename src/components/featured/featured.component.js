import React from 'react';
import { withRouter } from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';

import Title from '../title/title.component';
import ProductCard from '../product-card/product-card.component';

import './featured.styles.scss';

const Featured = ({ title = '', items = [], action = null, history }) => (
  <div className='featured'>
    <div className="featured__header">
      <Title theme="dark" value={title} />
      {
        action
          ? <span className="featured__action" onClick={() => {
            animateScrollTo(0);
            history.push(action.link);
          }}>{action.text}</span>
          : null
      }
    </div>
    <div className="featured__list">
    {
      items
        .filter((_, idx) => idx < 5)
        .map(item => (
          <div className="featured__item" key={item.id}>
            <ProductCard item={item} />
          </div>
        ))
    }
    </div>
  </div>
);

export default withRouter(Featured);
