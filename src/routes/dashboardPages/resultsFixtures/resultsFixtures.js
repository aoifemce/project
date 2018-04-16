import React, { PropTypes } from 'react';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';


const title = 'Results and Fixtures';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

function resultsFixtures(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Results and Fixtures</PageHeader>
      </div>




      <div className="row">
        <div className="col-lg-8">
          <Panel
            header={<span>Results</span>} className="panel-success"
            footer={<span>Last 7 days</span>}
             >
            <div>
              <p>
              </p>
            </div>
          </Panel>
        </div>

         <div className="col-lg-4">
                  <Panel
                    header={<span>Club Lotto Results</span>} className="panel-primary"
                    footer={<span> Next weeks lotto - £5000 </span> }
                  >
                    <div>
                      <p>4 6 15 7 No Winners</p>

                    </div>
                  </Panel>
                </div>


        <div className="col-lg-8">
          <Panel
            header={<span>Fixtures</span>} className="panel-success"
            footer={<span>Next 7 days</span>}
          >
            <div>
              <p>u14/u16 Football Training 7pm Tuesday and Thursday</p>
              <p>Senior camogie training 7.30 Wednesday & Friday
              </p>
            </div>
          </Panel>
        </div>

      </div>
    </div>

);
}

resultsFixtures.contextTypes = { setTitle: PropTypes.func.isRequired };

export default resultsFixtures;
