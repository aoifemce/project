"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {deleteFromCart, updateItemUnits} from '../actions/cartActions';
import {Col, Row, Panel, Badge, Button} from 'react-bootstrap';
import CartItem from "./cartItem";
import Checkout from "./checkout";


class Cart extends React.Component {
    renderCart() {
        return (
        <div className="col-lg-8 col-md-8">
            <Panel className='cartList' header='Basket' bsStyle='primary'>
                {this.cartList()}
            </Panel>
         </div>
        );
    }
    handleDeleteFromCart(id) {
        this.props.deleteFromCart({id})
    }
    handleDeductUnit(id) {
        let units = -1;
        this.props.updateItemUnits({id, units})
    }
    handleAddUnit(id) {
        let units = 1;
        this.props.updateItemUnits({id, units})
    }

    cartList() {
        return (
            this.props.cart.map(cartItem => {
              return (
                  <CartItem key={cartItem.id}
                            cartItem={cartItem}
                            onAddUnit={this.handleAddUnit.bind(this, cartItem.id)}
                            onDeductUnit={this.handleDeductUnit.bind(this, cartItem.id)}
                            handleDeleteFromCart={this.handleDeleteFromCart.bind(this, cartItem.id)} />
              );
            })
        );
    }

    cartTotal() {
        return (
        <div className="col-lg-8 col-md-8" >
            <Panel>
                <Row >
                    <Col  >
                        <h4>Total Price: £{this.totalAmount(this.props.cart)}</h4>
                    </Col>
                </Row>
            </Panel>
          </div>
        );
    }
     renderCheckout() {
       return(
         <Checkout />
       );
     }

    totalAmount(cartArray) {
        return cartArray.reduce((acum, item) => {
            acum += item.price * item.units;
            return acum;
        }, 0);
    }

    render() {
        if (this.props.cart.length !== 0) {
            return (
                <aside className='cart'>
                    {this.renderCart()}
                    {this.cartTotal()}
                    {this.renderCheckout()}
                </aside>
            );
        }

        return (
            <aside className='cart'>Cart is empty</aside>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        deleteFromCart,
        updateItemUnits
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(Cart);
