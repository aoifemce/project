import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import axios from 'axios';
import _ from 'lodash';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './Home.css';
import StatWidget from '../../components/Widget';
import Donut from '../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Club Connect';

class Home extends React.Component {
    constructor () {
        super();
        this.state = {
          count: '',
          clubs: []
        };
      }

   componentDidMount(){
   let currentComponent = this;

    axios.get('http://localhost:4000/api/countClubs')
      .then(function (response) {
        currentComponent.setState({
        count: response.data.length,
        clubs: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      });
   }
  render () {

    const contents = this.state.clubs.map(function(response){
        return <div>

         <StatWidget
            style="panel-green"
            headerText={response.clubName}
            bodyText="test"
            footerText="Click to see more information"
           linkTo="/clubs"
          />
          </div>

     });
    return (
        <div class="justify-content-center">

              <PageHeader>Welcome to Club Connect</PageHeader>
            <div className="col-lg-6 col-md-6">
            <Panel
                header={<span>Number of clubs signed up: {this.state.count} </span>} className="panel-success"
                footer={<span>View all clubs signed up with Club Connect below</span>}
                style={{fontSize: "20px"}}
            / >

       <div className="col-lg-6">
              {contents}
       </div>
     </div>
     </div>

        )}
}



export default withStyles(s)(Home);
