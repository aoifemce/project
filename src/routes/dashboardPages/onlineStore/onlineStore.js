"use strict";
import React, { PropTypes } from 'react';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
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
