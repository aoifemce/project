import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';


const logo = require('./logo.png');

const title = 'Complete';


function displayRegistered(props, context) {
  context.setTitle(title);
  return (<div>
     <center>
  <img src={logo} alt="Welcome" title="ClubConnect" width="500" height="142" />

    <h1> Welcome to Club Connect </h1>
    <p> Your club has now been registered </p>
</center>
    </div>

  );
}

displayRegistered.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayRegistered;

