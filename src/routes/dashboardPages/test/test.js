import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';
import StatWidget from '../../../components/Widget';
const title = 'checkout';


function test(props, context) {
  context.setTitle(title);
  return (
     <div>
        <h1> Test </h1>
        </div>
  );
}

test.contextTypes = { setTitle: PropTypes.func.isRequired };

export default test;
