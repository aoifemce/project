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


"use strict";
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ProductsList from "./components/productsList";

// store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

const title = 'Online Store';


function displayOnlineStore(props, context) {
  context.setTitle(title);
  return (
    <Provider store={store}>
        <ProductsList/>
    </Provider>
);
}

displayOnlineStore.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayOnlineStore;
