import React, { PropTypes } from 'react';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';


const title = 'Membership Registration';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

function displayMembershipRegistration(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>Membership Registration  <i className="fa fa-user-plus fa-fw" /></PageHeader>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <Panel
            header={<span>Adult Membership</span>} className="panel-success"
            footer={<span>£30
            <Button bsStyle="primary" style={buttonStyle}>Add to Basket</Button>
            </span>}
          >
            <div>
              <p>17 and above for all sports
              </p>
            </div>
          </Panel>
        </div>

         <div className="col-lg-4">
                  <Panel
                    header={<span><i className="fa fa-shopping-basket fa-fw" />Basket</span>} className="panel-primary"
                    footer={<span>
                    <Button bsStyle="success">Buy Now</Button>
                    </span>  }
                  >
                    <div>
                      <p>() items in basket</p>

                    </div>
                  </Panel>
                </div>


        <div className="col-lg-8">
          <Panel
            header={<span>Student Membership</span>} className="panel-success"
            footer={<span>£15
            <Button bsStyle="primary" style={buttonStyle}>Add to Basket</Button>
            </span>}
          >
            <div>
              <p>Anyone still in full time education
              </p>
            </div>
          </Panel>
        </div>


        <div className="col-lg-8">
          <Panel
            header={<span>Children Membership</span>} className="panel-success"
            footer={<span>£15
            <Button bsStyle="primary" style={buttonStyle}>Add to Basket</Button>
            </span>  }
          >
            <div>
              <p>16 or below for all sports </p>

            </div>
          </Panel>
        </div>
      </div>
    </div>

);
}

displayMembershipRegistration.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayMembershipRegistration;
