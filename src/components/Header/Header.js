/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  ProgressBar,
  Button
} from 'react-bootstrap';
import Navbar, {Brand} from 'react-bootstrap/lib/Navbar';
import history from '../../core/history';
import $ from "jquery";
import Sidebar from '../Sidebar';

const logo = require('./logo1.png');

class Header extends React.Component {
  constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: true};
    }
      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }

      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

  render() {
     const isLoggedInStatus = this.state.isLoggedIn;


     var loginButton;
     if (isLoggedInStatus) {
       loginButton =
       <Button className = "pt button pt-intent-button" onClick = {(event) => { history.push('/login');}} >
       Logout
       </Button>;
     } else {
       loginButton =
      <Button className="pt button pt-intent-button" onClick = {(event) => { history.push('/login');}}>
       Registration/Login
      </Button>;
     }
    return (
    <div id="wrapper" className="content">
      <Navbar fluid={true}  style={ {margin: 0} }>
          <Brand>
            <span>
              <img src={logo} alt="Club Connect" title="ClubConnect" />
              <span>&nbsp;Club Connect</span>

            </span>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
          {loginButton}
          </ul>
          <Sidebar />


    </Navbar>
    </div>
  );
  }
}


export default Header;
