
import React, { PropTypes, Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Well from 'react-bootstrap/lib/Well';
import axios from 'axios';


const title = 'Admin Information';

class displayProfile extends React.Component {
  constructor () {
    super();
       this.state = {
         profile: []
       };


  }



   componentDidMount(){
   let currentComponent = this;

    axios.get('http://localhost:4000/api/clubs')
      .then(function (response) {
          currentComponent.setState({
        profile: response.data
        });
        console.log(response);
      })

      .catch(function (error) {
        console.log(error);
      });
   }
   render () {
  const email = localStorage.getItem('email');
   const contents = this.state.profile.slice(1).map(function(response){
      return <div>
      <label for="adminName">Admin Name:</label>
        <div id="adminName">{response.name}</div>
      <label for="email">Email:</label>
        <div>{response.email}</div>
      <label for="clubName">Club Name:</label>
        <div>{response.clubName}</div>
       <label for="Club Type">Club Type:</label>
        <div>{response.typeOfClub}</div>
        <label for="county">County:</label>
        <div>{response.county}</div>
        <label for="town">Town:</label>
        <div>{response.town}</div></div>
   });

  return (
    <div>
      <div className="col-lg-12">
        <PageHeader>User Profile</PageHeader>
      </div>

      <div className="col-lg-12">
        <Panel  bsStyle="primary"  header={<span>Club / Admin Information</span>} >
            <div className="form-group">
              {contents}
            </div>

          </Panel>
        </div>
        </div>


  );
}
}


export default displayProfile;
