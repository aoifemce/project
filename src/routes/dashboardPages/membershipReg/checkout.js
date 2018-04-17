"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import checkout from './checkout.js';

import {Grid, Row, Col, FormControl, Button, Panel, DropdownButton, MenuItem} from 'react-bootstrap';
 var message ='';

class Checkout extends React.Component {
  constructor () {
    super();
    this.state = {
      cardNumber: '',
      csv: '',
      valid: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({
      [id]: value,
      valid: this.cardNumber.validity.valid && this.csv.validity.valid
    });
  };

  render () {
    const { cardNumber, csv, valid,  } = this.state;
    return (
         <div className="col-md-6">
         <Panel className="checkoutItem" header={<h3>Enter Checkout Details</h3>}>
         <form role="form" action="api/createMembership"  method="post">
          <fieldset>
            <div className="form-group">
              <FormControl
                type="name"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <FormControl
                componentClass="textarea"
                className="form-control"
                placeholder="Address"
                type="address"
                name="address"
                required
              />
            </div>
              <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Name on Card"
                type="name"
                name="cardName"
                required
              />
            </div>
            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Card Number"
                type="number"
                name="cardNumber"
                minLength={16}
                maxLength={16}
                required
              />
            </div>
             <small>{this.cardNumber ? this.cardNumber.validationMessage : null}</small>
            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="CSV"
                type="number"
                name="csv"
                minLength={3}
                maxLength={3}
                required
              />
              </div>
               <small>{this.csv ? this.csv.validationMessage : null}</small>
              <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Expiry Date"
                type="month"
                name="expiryDate"
                required
              />
            </div>
            <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
              <select name="membershipType" id="membershipType">
                      <option value="adult">Adult</option>
                      <option value="student">Student</option>
                      <option value="child">Child</option>
                  </select>

            </div>
                <div className="form-group">
                  <select name="price" id="price">
                       <option value="£15">£15</option>
                       <option value="£30">£30</option>
                   </select>
                </div>

      <Button type="submit" bsSize="large" bsStyle="success" block>Checkout</Button>
    <div>

    </div>


    </fieldset>
    </form>
 </Panel>
 </div>
    )
}
}


export default Checkout;
