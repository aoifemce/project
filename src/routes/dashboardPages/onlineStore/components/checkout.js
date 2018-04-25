"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import {Grid, Row, Col, FormControl, Button, Panel} from 'react-bootstrap';
 var message ='';
//checkout form when user is ready to checkout their cart
class Checkout extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      valid: false
    };
this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({
      [id]: value,
      valid: this.email.validity.valid
    });
  };
 render() {
  const { email, valid,  } = this.state;
        return (
         <div className="col-md-6">
         <Panel className="checkoutItem" header={<h3>Enter Checkout Details</h3>}>
         <form role="form" action="/api/createCheckout"  method="post">
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
                placeholder="Card Number (16 digit number)"
                type="input"
                name="cardNo"
                pattern=".{16}"
                required
              />
            </div>
            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="CSV (3 digit number)"
                type="input"
                name="csv"
                pattern=".{3}"
                required
              />
              </div>
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
              value={email}
              onChange={(event) => this.handleChange(event)}
              required
            />
          </div>
         <small>{this.email ? this.email.validationMessage : null}</small>

      <Button type="submit" bsSize="large" bsStyle="success" block>Checkout</Button>
    </fieldset>
    </form>
 </Panel>
 </div>
    )
}
}





export default Checkout;
