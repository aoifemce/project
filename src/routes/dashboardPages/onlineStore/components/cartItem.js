"use strict";
import React from 'react';
import {Col, Row, Panel, Button, Label, Badge} from 'react-bootstrap';

class CartItem extends React.Component {
//Items within cart
    render() {
        return (
            <Panel className='cartItem'>
                <Row>
                    <Col xs={12} sm={6}>
                        <h5>{this.props.cartItem.title} <Badge pullRight>Price: £{this.props.cartItem.price}</Badge></h5>
                    </Col>
                    <Col xs={6} sm={4}>
                        <p>units :&nbsp;
                            <Label bsStyle='success'> {this.props.cartItem.units} </Label>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>DELETE ITEM</Button>
                    </Col>
                </Row>
            </Panel>
        );
    }
}

export default CartItem;
