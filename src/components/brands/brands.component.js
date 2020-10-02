import React, { Component } from 'react';
import { sections } from './data';
import BrandItem from '../brand-item/brand-item.component';
import './brands.styles.scss';

class Brands extends Component {
  constructor() {
    super();

    this.state = {
      sections
    }
  }

  render() {
    return (
      <div className="brands">
        <div className="brands__container">
          {
            this.state.sections
              .filter((_, idx) => idx < 4)
              .map(({ id, ...rest }) => (
                <div className="brands__item">
                  <BrandItem key={id} {...rest} />
                </div>
              ))
          }
        </div>
      </div>
    )
  }
}

export default Brands;
