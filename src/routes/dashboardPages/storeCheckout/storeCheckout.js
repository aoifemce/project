import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Button from 'react-bootstrap/lib/Button';
import StatWidget from '../../../components/Widget';


function afterCheckout(props, context) {

  return (
     <div>
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Online order complete</PageHeader>
            </div>
          </div>



        </div>
  );
}


export default afterCheckout;
