"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import checkout from './checkout.js';
import firebase from '../firebase.js';
import classNames from 'classnames';
import validator from 'validator';

import {Grid, Row, Col, FormControl, Button, Panel, DropdownButton, MenuItem} from 'react-bootstrap';


class Checkout extends React.Component {
  constructor () {
    super();
    this.state = {
      cardNumber: '',
      csv: '',
      email: '',
      valid: false,
      title: [],
      price: []
    };

  }

  onChange = (e) => {
          var state = this.state;
          state[e.target.name].value = e.target.value;

    this.setState({
      [id]: value,
      valid: this.cardNumber.validity.valid && this.csv.validity.valid && this.email.validity.valid
    });
  };

  render () {
    const { cardNumber, csv, email, valid,  } = this.state;

    var checkoutForm;
    checkoutForm =
    <div>
     {this.state.membership.map((item) => {
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
                onChange={(event) => this.handleChange(event)}
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
                onChange={(event) => this.handleChange(event)}
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
              <label value={item.title}>{item.title}</label>

            </div>
                <div className="form-group">
                   <label value={item.price}>{item.price}</label>
                </div>

      <Button onClick={e => this.validate(e)} type="submit" bsSize="large" bsStyle="success" block>Checkout</Button>
    <div>
    </div>
    </fieldset>
    </form>
 </Panel>
 </div>
 )
})} </div>
    return (
      <div>
        {checkoutForm}
      </div>
    )
 }
}


export default Checkout;
