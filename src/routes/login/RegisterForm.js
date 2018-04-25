import React, { PropTypes } from 'react';
import { FormControl, Panel, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class RegisterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      valid: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({
      [id]: value,
      valid: this.email.validity.valid && this.password.validity.valid
    });
  };

  componentDidMount () {
    this.forceUpdate();
    this.email.focus();
  }

  render () {
    const { email, password, valid,  } = this.state;
// Registration form
    return (
      <Panel header={<h3>Please Register Your Club</h3>}>

          <form role="form" action="/api/createClub"  method="post">
          <fieldset>
            <div className="form-group">
              <FormControl
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>

            <div className="form-group">
              <FormControl
               id="email"
               type="email"
               className="form-control"
               placeholder="Email"
               name="email"
               value={email}
               onChange={(event) => this.handleChange(event)}
               required
             />

            </div>
             <small>{this.email ? this.email.validationMessage : null}</small>

         <div className="form-group">
              <FormControl
                 id="password"
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(event) => this.handleChange(event)}
                minLength={8}
               required
              />
            </div>
     <small>{this.password ? this.password.validationMessage : null}</small>
         <div className="form-group">
          <FormControl
            id="clubName"
            className="form-control"
            placeholder="Club Name"
            type=""
            name="clubName"
            required
          />
        </div>

         <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="Type of Club"
              type=""
              name="clubType"
              required
            />
          </div>
          <div className="form-group">
            <FormControl
              className="form-control"
              placeholder="County"
              type=""
              name="county"
              required
            />
            </div>

            <div className="form-group">
              <FormControl
                className="form-control"
                placeholder="Town"
                type=""
                name="town"
                required
              />
            </div>
           <div >
      <Button type="submit" bsSize="large" bsStyle="success" block>Register</Button>
            </div>
          </fieldset>
        </form>
     </Panel>

    );
  }
}



export default withStyles(s)(RegisterForm);
