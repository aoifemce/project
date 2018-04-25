import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import axios from 'axios';
const title = 'Order Complete';

class displayOrder extends React.Component {
    constructor () {
        super();
        this.state = {
          orderNo: []
        };
      }
      //getting order information from server
   componentDidMount(){

   let currentComponent = this;

    axios.get('http://localhost:4000/api/orderNumber')
      .then(function (response) {
        currentComponent.setState({
        orderNo: response.data
        })
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
   }
   //outputting order information from the server
  render () {

    const contents = this.state.orderNo.map(function(response){
        return <div>
        <label for="orderNo">Order Number:</label>
                <div id="orderNo">{response.checkout_id}</div>
              <label for="name">Name:</label>
                <div>{response.name}</div>
              <label for="address">Address:</label>
                <div>{response.address}</div>
          </div>

     });

    return (
        <div>
            <center>
                <PageHeader>Your order is now compete
                </PageHeader>
            </center>

           <div className="col-lg-12">
            <Panel  bsStyle="primary"  header={<span>Order Information</span>} >
                <div className="form-group">
                  {contents}
                </div>
              </Panel>
            </div>

  </div>

  )}
}


export default displayOrder;
