"use strict";
import React from 'react';
import firebase from '../firebase.js';
import {FormControl, Button, Panel} from 'react-bootstrap';


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
//Getting membership options from firebase
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

//if the user clicks the checkout button
    var checkoutForm;
    checkoutForm =
    <div>
     {this.state.membership.map((item) => {
        return (
    <div className="col-md-6">
         <Panel className="checkoutItem" header={<h3>{item.title}</h3>}>
         <form role="form" action="api/createMembership"  method="post">
          <fieldset>
          <center><h3>Type: {item.title}</h3>
          <h4>Price: {item.price}</h4></center>

         <div className="form-group">
             <FormControl
               className="form-control"
               placeholder="Membership Title"
               type="hidden"
               value={item.title}
               name="membershipType"
               required
             />
           </div>
           <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Membership Price"
                type="hidden"
                value={item.price}
                name="price"
                required
              />
            </div>
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
                name="cardNumber"
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
                min="2018-04"
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
