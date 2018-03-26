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
import s from './Login.css';
import history from '../../core/history';

const title = 'Log In';


function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

function register(){

}

function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-6 col-md-offset-3">
      <div className="text-center">
        <h1 className="login-brand-text">Club Connect</h1>
      </div>
      <Panel header={<h3>Please Sign In</h3>}>

        <form role="form" onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Checkbox label="Remember Me" > Remember Me </Checkbox>
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
          </fieldset>
        </form>
      </Panel>


      <Panel header={<h3>Please Register Your Club</h3>}>

        <form id="register" action="/createClub" method="post"  onSubmit={(e) => { submitHandler(e); }}>
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
              />
            </div>

         <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>

         <div className="form-group">
          <FormControl
            id="clubName"
            className="form-control"
            placeholder="Club Name"
            type=""
            name="clubName"
          />
        </div>

         <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="Type of Club"
              type=""
              name="clubType"
            />
          </div>
          <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="County"
              type=""
              name="county"
            />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Town"
                type=""
                name="town"
                isRequired
              />
            </div>


            <Button type="submit" bsSize="large" bsStyle="primary" block>Register</Button>

          </fieldset>
        </form>

      </Panel>
    </div>

  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
