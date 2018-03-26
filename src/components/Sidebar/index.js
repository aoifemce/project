import React, { Component } from 'react';
import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">

             <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/membershipReg'); }} >
                <i className="fa fa-user-plus fa-fw" /> &nbsp;Members Registration
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/resultsFixtures'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Fixtures / Results
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/chat'); }} >
                <i className="fa fa-comments fa-fw" /> &nbsp;Group Chat
              </a>
            </li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/onlineStore'); }} >
                <i className="fa fa-shopping-cart fa-fw" /> &nbsp;Online Shore
              </a>
            </li>
            </ul>
         </div>
      </div>


    );
  }
}


export default Sidebar;
