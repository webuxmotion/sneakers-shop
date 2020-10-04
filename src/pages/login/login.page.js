import React from 'react';
import { connect } from 'react-redux';

import { setCurrentUser } from '../../redux/user/user.actions';

import TopTitle from '../../components/top-title/top-title.component';
import Button from '../../components/button/button.component';

import './login.styles.scss';

const LoginPage = ({ setCurrentUser }) => (
  <div className="login-page">
    <TopTitle value="Login Page" />
    <div className="login-page__body">
      <Button onClick={() => setCurrentUser({ id: 111, name: 'Andrii' })}>Login</Button>
    </div>
  </div>
);

const mapDispatchToPros = dispatch => ({
  setCurrentUser: item => dispatch(setCurrentUser(item))
});

export default connect(
  null,
  mapDispatchToPros
)(LoginPage);
