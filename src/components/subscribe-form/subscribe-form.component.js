import React from 'react';

import Button from '../button/button.component';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';

import './subscribe-form.styles.scss';

const SubscribeForm = () => (
  <form className="subscribe-form">
    <div className="subscribe-form__input-group">
      <div className="subscribe-form__icon-wrapper">
        <EmailIcon className="subscribe-form__icon" />
      </div>
      <input className="subscribe-form__input" type="email" value="" placeholder="Your email address" />
    </div>
    <div className="subscribe-form__button-wrapper">
      <Button>Subscribe</Button>
    </div>
  </form>
);

export default SubscribeForm;
