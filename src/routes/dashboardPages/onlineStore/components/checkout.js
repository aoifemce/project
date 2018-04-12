"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';

import {Grid, Row, Col, FormControl, Button, Panel} from 'react-bootstrap';
 var message ='';

class Checkout extends React.Component {
 render() {
        return (
         <div className="col-md-6">
         <Panel className="checkoutItem" header={<h3>Enter Checkout Details</h3>}>
         <form role="form" action="/createCheckout"  method="post">
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
                name="cardNo"
                required
              />
            </div>
            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="CSV"
                type="number"
                name="csv"
                required
              />
              </div>
              <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Expiry Date"
                type="date"
                name="expiryDate"
                required
              />
            </div>

      <Button type="submit" bsSize="large" bsStyle="success" block>Checkout</Button>
    <div>
     {message.length > 0 ? (
            <div class="alert alert-danger col-sm-12"> {message}</div>
          ) : (
           <div> not working </div>
          )}
    </div>


    </fieldset>
    </form>
 </Panel>
 </div>
    )
}
}





export default Checkout;
