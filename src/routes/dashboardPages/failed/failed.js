import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';
import StatWidget from '../../../components/Widget';
const title = 'failed';


function displayFailed(props, context) {
  context.setTitle(title);
  return (
     <div>
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Something wasnt right</PageHeader>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Panel header={<span>Failed login</span>} >
                <div>
                Your email and password dont seem to match. Please try again
                or continue as a guest
           <div className=" col-md-6">
                     <StatWidget
                       style="panel-primary"
                       headerText="Back to Login"
                       linkTo="/login"
                     />
                     </div>
                     <div className="col-md-6">
                     <StatWidget
                        style="panel-info"
                        headerText="Continue as guest"
                        linkTo="/"
                      />
                   </div>
                </div>
              </Panel>
            </div>


            </div>
        </div>
  );
}

displayFailed.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayFailed;
