import React, { PropTypes } from 'react';
import { Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader } from 'react-bootstrap';
import firebase from '../firebase.js';
import moment from 'moment';

const title = 'Results and Fixtures';

var buttonStyle = {
  float: 'right',
  margin: '-7px -10px 0px 0px'
}

class resultsFixtures extends React.Component {
constructor() {
      super();
      this.state = {
          results: [],
          fixtures: [],
          dateAdded: ''
          }
     this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

  handleSubmit(e) {
      e.preventDefault();
      const infoRef = firebase.database().ref('resultsFixtures');
      const item = {
        results: this.state.results,
        fixtures: this.state.fixtures,
        dateAdded: moment().format('MMMM Do YYYY, h:mm:ss a')
      }
      infoRef.push(item);
      this.setState({
        results: '',
        fixtures: '',
        dateAdded: ''
      });
    }

      componentDidMount() {
         const infoRef = firebase.database().ref('resultsFixtures');
         infoRef.on('value', (snapshot) => {
           let resultsFixtures = snapshot.val();
           let newState = [];
           for (let item in resultsFixtures) {
             newState.push({
               id: item,
               results: resultsFixtures[item].results,
               fixtures: resultsFixtures[item].fixtures,
               dateAdded: resultsFixtures[item].dateAdded
             });
           }
           this.setState({
             resultsFixtures: newState
           });
         });
       }

  render() {

  var resultsFixturesShow;

       if (localStorage.getItem('email') === null ) {
         resultsFixturesShow =
          <div>
          {this.state.resultsFixtures.map((item) => {
                    return (
              <div className="row">
                 <div className="col-lg-6">
                   <Panel
                     header={<span>Results:</span>} className="panel-success"
                     footer={<span>{item.results} <p style={{ fontSize: "13px", color: "#999"}}> {item.dateAdded} </p></span>}
                      >
                   </Panel>
                 </div>
                 <div className="col-lg-6">
                   <Panel
                     header={<span>Fixtures:</span>} className="panel-success"
                     footer={<span>{item.fixtures} <p style={{ fontSize: "13px", color: "#999"}}> {item.dateAdded} </p></span>}
                   >
                   </Panel>
                 </div>
               </div>
               )
               })}
               </div>;

       } else {
        resultsFixturesShow =  <div>
          <Panel >
            <form onSubmit={this.handleSubmit} >
              <div className="form-group">
                 <textarea
                    className='form-control'
                    type="text"
                    cols='20'
                    rows= '4'
                    name="results"
                    placeholder="Type any new results here"
                    value={this.state.results}
                    onChange={this.handleChange}
                    required
                      />
              </div>
              <div className="form-group">
                 <textarea
                    className='form-control'
                    type="text"
                    cols='20'
                    rows= '4'
                    name="fixtures"
                    placeholder="Type any new fixtures here"
                    value={this.state.fixtures}
                    onChange={this.handleChange}
                    required
                  />
              </div>
               <button style={{marginTop:'1em'}} className='btn btn-primary btn-lg' >Send</button>
              </form>
              </Panel>
              </div>
        ;

       }

  return (
      <div>
      <div className="col-lg-12">
      <PageHeader>Results and Fixtures</PageHeader>
      </div>
      <div>
      {resultsFixturesShow}
      </div>
      </div>

 );
  }
}


export default resultsFixtures;
