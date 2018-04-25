import React, { Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import axios from 'axios';

class MembershipComplete extends Component {
  constructor () {
         super();
         this.state = {
           membershipNo: []
         };
       }
       //Getting membership information from server
    componentDidMount(){

    let currentComponent = this;

     axios.get('http://localhost:4000/api/membershipNumber')
       .then(function (response) {
         currentComponent.setState({
         membershipNo: response.data
         })
         console.log(response.data);
       })
       .catch(function (error) {
         console.log(error);
       });
    }
    //Outputting data from the server
   render () {

     const contents = this.state.membershipNo.map(function(response){
         return <div>
         <label for="orderNo">Membership Number:</label>
                 <div id="orderNo">{response.membershipId}</div>
               <label for="name">Name:</label>
                 <div>{response.name}</div>
               <label for="address">Address:</label>
                 <div>{response.address}</div>
           </div>

      });

     return (
         <div>
             <center>
                 <PageHeader>You are now registered!
                 </PageHeader>
             </center>

            <div className="col-lg-12">
             <Panel  bsStyle="primary"  header={<span>Membership Checkout Information</span>} >
                 <div className="form-group">
                   {contents}
                 </div>
               </Panel>
             </div>

   </div>
   )}
   }

export default MembershipComplete;
