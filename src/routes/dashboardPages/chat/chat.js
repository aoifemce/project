import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import moment from 'moment';
import axios from 'axios';

const title = 'Chat';

import './App.css';
import firebase from './firebase.js';

const textareaStyle = {
   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      backgroundColor: 'white',
      borderRadius: '2px',
      padding: '10px',
      maxWidth: '100%',
      marginTop: '1em'
};

const messageStyle = {
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      padding: '5px',
      maxWidth: '100%',
      marginTop: '1em'
};

const containerStyle = {
   border: '2px solid #dedede',
      backgroundColor: '#f1f1f1',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0',
      width: '100%'
};
class Chat extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      name: '',
      message: [],
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
    const itemsRef = firebase.database().ref('items');
    const item = {
      message: this.state.message,
      name: this.state.name,
      dateAdded: moment().format('MMMM Do YYYY, h:mm:ss a')
    }
    itemsRef.push(item);
    this.setState({
      name: '',
      message: '',
      dateAdded: ''
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          name: items[item].name,
          message: items[item].message,
          dateAdded: items[item].dateAdded
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div className='container' style={containerStyle}>
        <header>
            <div className="wrapper">
              <h1>Chat</h1>
            </div>
        </header>
        <div >
          <section className='display-item'>
              <div className="wrapper">
               <div>
                  {this.state.items.map((item) => {
                    return (
                      <div style={messageStyle} key={item.id}>
                      <div className="text-primary">
                        <h3 class="text-primary">{item.name}:</h3>
                      </div>
                        <p>{item.message} </p>
                        <p style={{ fontSize: "13px", color: "#999"}}> {item.dateAdded} </p>
                      </div>
                    )
                  })}
                </div>
              </div>
          </section>
          <section className='form-group'>
                <form onSubmit={this.handleSubmit}>
                  <input
                  className='form-control'
                   type="text"
                    style={textareaStyle}
                    name="name"
                    placeholder="What's your name?"
                    onChange={this.handleChange}
                    value={this.state.name}
                    required
                     />
              <textarea
                  className='form-control'
                  type="text"
                  cols='20'
                  rows= '4'
                  style={textareaStyle}
                   name="message"
                   placeholder="Type your message here"
                   onChange={this.handleChange}
                   value={this.state.message}
                   required
                   />
                  <button style={{marginTop:'1em'}} className='btn btn-primary btn-lg'>Send</button>
                </form>
          </section>
        </div>
      </div>
    );
  }
}
export default Chat;
