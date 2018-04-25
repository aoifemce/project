import React, { PropTypes } from 'react';
import { FormControl, Panel, Button } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

class LoginForm extends React.Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
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
  // Save to local storage
  saveData() {
  var input = document.getElementById('email').value;
  localStorage.setItem('email', input);
}
  render () {
    const { email, password, valid,  } = this.state;

    return (
// Login Form
      <Panel header={<h3>Please Sign In</h3>}>
        <form role="form" action="/api/checkLogin" method="post">
          <fieldset>
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
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
                required
              />
            </div>
            <Button onClick={this.saveData} type="submit" bsSize="large" bsStyle="success" block>Login</Button>

          </fieldset>
        </form>
      </Panel>

    );
  }
}



export default withStyles(s)(LoginForm);
