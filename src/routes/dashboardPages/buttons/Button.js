import React, { PropTypes } from 'react';


import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'Buttons';

function displayButtons(props, context) {
  context.setTitle(title);
  return (
    <div>

      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Buttons</PageHeader>
        </div>
      </div>



    </div>
  );
}


displayButtons.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayButtons;
