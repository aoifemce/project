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
        };
      }

   componentDidMount(){
   let currentComponent = this;

    axios.get('http://localhost:4000/api/countClubs')
      .then(function (response) {
        currentComponent.setState({count: response.data.length})
      })
      .catch(function (error) {
        console.log(error);
      });
   }
  render () {
    return (
        <div>
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Welcome to ClubConnect</PageHeader>
            </div>
          </div>
            <div className="col-lg-8 col-md-6">
              <StatWidget
                style="panel-green"
                icon="fa fa-tasks fa-5x"
                count={this.state.count}
                headerText="All clubs signed up"
                footerText="View Clubs"
                linkTo="/clubs"
              />
            </div>

        </div>
        )}
}



export default withStyles(s)(Home);
