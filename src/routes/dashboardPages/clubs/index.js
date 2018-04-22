
import React from 'react';
import Clubs from './clubs';

export default {

  path: '/clubs/:clubName',

  action() {
    return <Clubs />;
  },

};
