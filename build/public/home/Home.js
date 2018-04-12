

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
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

function Home(props, context) {
  context.setTitle(title);
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
            count="12"
            headerText="All clubs signed up"
            footerText="View Clubs"
            linkTo="/forms"
          />
        </div>

        <div className="col-lg-4">
           <Panel
           header={<span>
           <i className="fa fa-bell fa-fw" /> All clubs
            </span>}
            >
            <ListGroup>
            <ListGroupItem href="" onClick={(e) => { e.preventDefault(); }}>
              <i className="fa fa-comment fa-fw" /> New Comment
              <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
            </ListGroupItem>

          </ListGroup>
          <Button block>View All Alerts</Button>
        </Panel>
        </div>
    </div>
  );
}

Home.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
