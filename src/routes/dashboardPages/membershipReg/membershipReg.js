import React, { PropTypes } from 'react';
import { Panel, PageHeader, Button } from 'react-bootstrap';
import Checkout from './checkout';
import firebase from '../firebase.js';

const title = 'Membership Registration';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

class membershipReg extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
        showComponent: false,
        title: [],
        price: []
      };
      this._onButtonClick = this._onButtonClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }
  handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

   removeItem(itemId) {
     const itemRef = firebase.database().ref(`/membership/${itemId}`);
     itemRef.remove();
   }

//Sending membership option to firebase
  handleSubmit(e) {
      e.preventDefault();
      const infoRef = firebase.database().ref('membership');
      const item = {
        title: this.state.title,
        price: this.state.price
      }
      infoRef.push(item);
      this.setState({
        title: '',
        price: ''
      });
    }
      _onButtonClick() {
        this.setState({
          showComponent: true,
        });
      }
//getting membership options from firebase
   componentDidMount() {
         const infoRef = firebase.database().ref('membership');
         infoRef.on('value', (snapshot) => {
           let membership = snapshot.val();
           let newState = [];
           for (let item in membership) {
             newState.push({
               id: item,
               title: membership[item].title,
               price: membership[item].price
             });
           }
           this.setState({
             membership: newState
           });
         });
       }
       // if a club admin is logged in
       //show the club admin page(add new membership options)
       //else show the membership options from firebase
 render() {
    var membershipShow;

 if (localStorage.getItem('email') === null ) {
    membershipShow =
     <div>
     {this.state.membership.map((item) => {
               return (
            <div className="col-lg-6">
           <div className="panel panel-success">
              <div className="panel-heading">Membership Options</div>
              <div className="panel-body">
              <span><b>Type: </b>{item.title}</span>
              <br/>
              <span><b>Price: </b>{item.price}</span>
              </div>
            </div>
            </div>
          )
          })}
          <div className="row">
          <Button onClick={this._onButtonClick} bsStyle="primary">Sign up for membership here</Button>
          </div>
             {this.state.showComponent ?
                  <Checkout /> :
                    null
              }
          </div>;
      } else {
        membershipShow =  <div>
          <Panel >
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                 <textarea
                    className='form-control'
                    type="text"
                    name="title"
                    placeholder="Type membership title here"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                      />
              </div>
              <div className="form-group">
                 <textarea
                    className='form-control'
                    type="number"
                    name="price"
                    placeholder="Type the price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    required
                  />
              </div>
               <button style={{marginTop:'1em'}} className='btn btn-primary btn-lg' >Send</button>
              </form>
              </Panel>
               {this.state.membership.map((item) => {
                    return (
              <div className="col-lg-6">
               <div className="panel panel-success">
                  <div className="panel-heading">Membership Options</div>
                  <div className="panel-body">
                  <span><b>Type: </b>{item.title}</span>
                  <br/>
                  <span><b>Price: </b>{item.price}</span>
                  </div>
                  <div className="panel-footer">
                   <Button className="btn btn-danger" onClick={() => this.removeItem(item.id)}>Delete item </Button>
                   </div>
                </div>
                </div>
              )
             })}
              </div>


            }
     return (
        <div className="container-fluid">
           <PageHeader>Membership Option</PageHeader>
           {membershipShow}
         </div>
      );
}
}

export default membershipReg;
