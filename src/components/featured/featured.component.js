import React from 'react';
import './featured.styles.scss';

const Featured = ({ title = '', items = [], action = null }) => (
  <div className='featured'>
    <div className="featured__header">
      {title}
      {
        action
          ? <a href={`${action.link}`}>{action.text}</a>
          : null
      }
    </div>
    <div className="featured__list">
    {
      items
        .filter((_, idx) => idx < 5)
        .map(({ id, ...rest }) => (
          <div className="featured__item">
            <div>item</div>
          </div>
        ))
    }
    </div>
  </div>
);

export default Featured;
