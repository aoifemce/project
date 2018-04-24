import React, { PropTypes } from 'react';


import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'Order Complete';

function displayOrder(props, context) {
  context.setTitle(title);
  return (
    <div>
         <center>
<PageHeader> Order Complete </PageHeader>

        <p> Thank you for your order </p>
    </center>
        </div>
  );
}


displayOrder.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayOrder;
