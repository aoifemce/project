/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Modal from 'react-bootstrap/lib/Modal';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const title = 'Log In';

class Login extends React.Component {
  render () {
    return (
    <div className="col-md-6 col-md-offset-3">
      <div className="text-center">
        <h1 className="login-brand-text">Club Connect</h1>
      </div>
      <LoginForm />
      <RegisterForm />
    </div>

    );
  }
}



export default withStyles(s)(Login);
