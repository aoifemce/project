/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Registration.css';
import history from '../../core/history';

const title = 'Registration';


function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

function Registration(props, context) {
  context.setTitle(title);
  return (
    TESTTTTTTT

  );
}


Registration.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Registration);
