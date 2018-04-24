import React, { PropTypes } from 'react';


import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'Buttons';

function displayButtons(props, context) {
  context.setTitle(title);
  return (
    <div>
         <center>


        <h1> Order complete </h1>
        <p> Thank you for your order </p>
    </center>
        </div>
  );
}


displayButtons.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayButtons;
