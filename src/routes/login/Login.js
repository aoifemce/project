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
import Modal from 'react-bootstrap/lib/Modal';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import { login } from './reducers/loginReducer'
import history from '../../core/history';

const title = 'Log In';

var message ='';

function submitHandler(e) {
  e.preventDefault();
  history.push('/');
}

class Login extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: true,
      valid: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({
      [id]: value,
      valid: this.email.validity.valid && this.password.validity.valid
    });
  };

  componentDidMount () {
    this.forceUpdate();
    this.email.focus();
  }

  render () {
    const { email, password, valid,  } = this.state;


    return (
    <div className="col-md-6 col-md-offset-3">
      <div className="text-center">
        <h1 className="login-brand-text">Club Connect</h1>
      </div>
      <Panel header={<h3>Please Sign In</h3>}>
        <form role="form" action="/checkLogin" method="post">
          <fieldset>
            <div className="form-group">
              <FormControl
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => this.handleChange(event)}
                required
              />
            </div>

             <small>{this.email ? this.email.validationMessage : null}</small>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <Button  type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            <Button onClick = {(event) => { history.push('/home');}} bsSize="large" bsStyle="primary" block>Continue as guest</Button>
          </fieldset>
        </form>
      </Panel>


      <Panel header={<h3>Please Register Your Club</h3>}>

        <form id="register" action="/createClub" method="post" >
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>


            <div className="form-group">
              <FormControl
                ref={(email) => { this.email = email; }}
                className="form-control"
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(event) => this.handleChange(event)}
                required
              />

            </div>
             <small>{this.email ? this.email.validationMessage : null}</small>

         <div className="form-group">
              <FormControl
                 id="password"
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(event) => this.handleChange(event)}
                minLength={8}
               required
              />
            </div>
     <small>{this.password ? this.password.validationMessage : null}</small>
         <div className="form-group">
          <FormControl
            id="clubName"
            className="form-control"
            placeholder="Club Name"
            type=""
            name="clubName"
            required
          />
        </div>

         <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="Type of Club"
              type=""
              name="clubType"
              required
            />
          </div>
          <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="County"
              type=""
              name="county"
              required
            />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Town"
                type=""
                name="town"
                required
              />
            </div>
           <div >
            <Button type="submit" bsSize="large" bsStyle="primary"  block>Register</Button>
            </div>
          </fieldset>
        </form>
     </Panel>
    </div>

    );
  }
}



export default withStyles(s)(Login);
