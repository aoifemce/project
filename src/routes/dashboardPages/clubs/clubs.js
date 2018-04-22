import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';


import s from './clubs.css';
import StatWidget from '../../../components/Widget';
import Donut from '../../../components/Donut';

import {
  Tooltip,
  XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';

const title = 'Club Connect';

function Clubs(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader></PageHeader>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 col-md-6">
          <StatWidget
            style="panel-primary"
            icon="fa fa-comments fa-5x"
            headerText="Group Chat"
            footerText="View chat"
            linkTo="/chat"
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <StatWidget
            style="panel-green"
            icon="fa fa-user-plus fa-5x"
            headerText="Become a member"
            footerText="View Details"
            linkTo="/membershipReg"
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <StatWidget
            style="panel-yellow"
            icon="fa fa-shopping-cart fa-5x"
            headerText="Shop our online store"
            footerText="View Club Gear"
            linkTo="/onlineStore"
          />
        </div>
        <div className="col-lg-6 col-md-6">
          <StatWidget
            style="panel-red"
            icon="fa fa-tasks fa-5x"
            headerText="Results / Fixtures"
            footerText="View Details"
            linkTo="/resultsFixtures"
          />
        </div>
      </div>
    </div>
  );
}

Clubs.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Clubs.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Clubs);
