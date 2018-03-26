import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';


const title = 'Online Store';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

const logo = require('./logo1.png');

function displayOnlineStore(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Online Store<i className="fa fa-shopping-cart fa-fw" /></PageHeader>
      </div>

      <div className="row">
        <div className="col-lg-4">
          <Panel
            header={<span>Club Jersey</span>} className="panel-success"

            footer={<span>£30
            <Button bsStyle="primary" style={buttonStyle}>Add to Basket</Button>

            </span>}
          >
            <div>
             <img src={logo} alt="Club Connect" title="ClubConnect" />
              <p>17 and above for all sports

              </p>
              <FormGroup controlId="formControlsSelect">
              <ControlLabel>Size</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
              <option value="1">7-8</option>
              <option value="2">9-10</option>
              <option value="3">11-12</option>
              <option value="4">13-14</option>
              <option value="5">Small</option>
              <option value="5">Medium</option>
              <option value="5">Large</option>
              </FormControl>
              </FormGroup>

               <FormGroup controlId="formControlsSelect">
              <ControlLabel>Quantity</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              </FormControl>
              </FormGroup>
            </div>
          </Panel>
        </div>

         <div className="col-lg-4">
                  <Panel
                    header={<span><i className="fa fa-shopping-basket fa-fw" />Basket</span>} className="panel-primary"
                    footer={<span>
                    <Button bsStyle="success">Buy Now</Button>
                    </span>  }
                  >
                    <div>
                      <p>() items in basket</p>

                    </div>

                  </Panel>

                </div>
      </div>
    </div>

);
}

displayOnlineStore.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayOnlineStore;
