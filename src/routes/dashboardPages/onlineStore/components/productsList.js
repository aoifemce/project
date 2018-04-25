"use strict";
import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {Grid, Row, Col} from 'react-bootstrap';
import ProductItem from "./productItem";
import Cart from './cart';

//list of all product items
class ProductsList extends React.Component {
    dispachAddToCart(product) {
        this.props.addToCart(product);
    }
    renderProducts() {
        return (
            this.props.products.map((p) => {
                return (
                    <Col className='productsList' xs={12} sm={6} md={4} key={p.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <Grid>
                <Row><h1>Online Store</h1></Row>
                <Row style={{margin:'10px', width: '80%'}}>
                    {this.renderProducts()}
                </Row>
                <Row><Cart /></Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsList);
