"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import firebase from '../firebase.js';
import {Grid, Row, Col, FormControl, Button, Panel, DropdownButton, MenuItem} from 'react-bootstrap';


class Checkout extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      valid: false,
      title: [],
      price: []
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

    componentDidMount() {
           const infoRef = firebase.database().ref('membership');
           infoRef.on('value', (snapshot) => {
             let membership = snapshot.val();
             let newState = [];
             for (let item in membership) {
               newState.push({
                 id: item,
                 title: membership[item].title,
                 price: membership[item].price
               });
             }
             this.setState({
               membership: newState
             });
           });
         }

  render () {
    const { email, valid,  } = this.state;


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
                type="input"
                name="cardNumber"
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

              <div className="form-group">
              <label value={item.title}>{item.title}</label>

            </div>
                <div className="form-group">
                   <label value={item.price}>{item.price}</label>
                </div>

      <Button type="submit" bsSize="large" bsStyle="success" block>Checkout</Button>
    <div>
    </div>
    </fieldset>
    </form>
 </Panel>
 </div>
 )
  })}
     </div>
        return (
        <div>
            {checkoutForm}
        </div>
    )
  }
}

export default Checkout;
