
import React, { PropTypes, Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';


const title = 'Admin Information';

class displayProfile extends React.Component {
  constructor () {
    super();
       this.state = {
         clubName: 'Bellaghy Wolfe Tones',
         clubType: 'GAA',
         county: 'Derry',
         email: 'bellaghy@wolfetones.co.uk'
       };
  }

   render () {

  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>User Profile</PageHeader>
      </div>

      <div className="col-lg-12">
        <Panel  bsStyle="primary"  header={<span>Club/ Admin Information</span>} >

           <div class="form-group">
              <label for="name">Club Name:</label>
              <p className="name">{this.state.clubName}</p>
            </div>
             <div class="form-group">
              <label for="clubType">Club Name:</label>
               <p className="clubType">{this.state.clubType}</p>
            </div>
            <div class="form-group">
             <label for="county">Club Name:</label>
              <p className="county">{this.state.county}</p>
           </div>
           <div class="form-group">
            <label for="email">Club Name:</label>
             <p className="email">{this.state.email}</p>
          </div>
          </Panel>
        </div>
        </div>


  );
}
}


export default displayProfile;
