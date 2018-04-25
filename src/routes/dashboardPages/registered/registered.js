import React, { PropTypes } from 'react';
import StatWidget from '../../../components/Widget';

const logo = require('./logo.png');
const title = 'Complete';
//Once registration has been successful
function displayRegistered(props, context) {
  context.setTitle(title);
  return (<div>
  <center>
    <img src={logo} alt="Welcome" title="ClubConnect" width="500" height="142" />
    <h1> Welcome to Club Connect </h1>
      <p> Your club has now been registered </p>
    <div className="col-lg-6">
      <StatWidget
        style="panel-green"
        headerText="Please Login"
        footerText="Login to update information within your new club"
        linkTo='/login'
      />
    </div>

  </center>
  </div>

  );
}

displayRegistered.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayRegistered;

