import React, { PropTypes } from 'react';
import { PageHeader, Panel, PanelHeader, PanelBody, PanelFooter } from 'react-bootstrap';

const title = 'Blank';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Registration</PageHeader>
        </div>


         <Panel>
            <Panel.Header>Adult Registration</Panel.Header>
            <Panel.Body>16+ across all sports</Panel.Body>
          </Panel>



      </div>
    </div>



  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
