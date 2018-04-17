import React, { PropTypes } from 'react';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';
import Checkout from './checkout';

const title = 'Membership Registration';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

class membershipReg extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
        showComponent: false,
        adultTitle: 'Adult Membership',
        adultPrice: '£30',
        studentTitle: 'Student Membership',
        studentPrice: '£15',
        childTitle: 'Child Membership',
        childPrice: '£15'
      };
      this._onButtonClick = this._onButtonClick.bind(this);
    }

      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
 render() {
        return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Membership Registration  <i className="fa fa-user-plus fa-fw" /></PageHeader>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span>{this.state.adultTitle}</span>} className="panel-success"
            footer={<span>{this.state.adultPrice}
            </span>}
          >
            <div>
              <p>17 and above for all sports
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>{this.state.studentTitle}</span>} className="panel-success"
            footer={<span>{this.state.studentPrice}</span>}
          >
            <div>
              <p>Anyone still in full time education
              </p>
            </div>
          </Panel>
        </div>
        <div className="col-lg-4">
          <Panel
            header={<span>{this.state.childTitle}</span>} className="panel-success"
            footer={<span>{this.state.childPrice} </span>}
          >
            <div>
              <p>16 or below for all sports </p>
            </div>
          </Panel>
        </div>
        <div>
       <Button onClick={this._onButtonClick} bsStyle="primary" style={buttonStyle}>Sign up for membership here</Button>
      {this.state.showComponent ?
                <Checkout /> :
                null
             }
             </div>
      </div>
    </div>

);
}
}

export default membershipReg;
