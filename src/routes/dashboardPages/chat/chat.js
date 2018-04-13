import React, { PropTypes, Component } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import MessageList from './components/MessageList';
import firebase from 'firebase';
import MessageBox from './components/MessageBox';

const title = 'Chat';


const containerStyle = {
   border: '2px solid #dedede',
      backgroundColor: '#f1f1f1',
      borderRadius: '5px',
      padding: '10px',
      margin: '10px 0'
};

const headerStyle = {
      width: '50%',
      backgroundColor: '#5bc0de',
      borderRadius: '5px',
      padding: '10px',
      margin: '15px 0',
      textAlign: 'center'
};


class Chat extends Component {

constructor(props){
  super(props);
  var config = {
      apiKey: "AIzaSyCOgQiq1Tq6Cdgx60UVZ6a2mp-42T9XNJ0",
      authDomain: "clubconnect-c4852.firebaseapp.com",
      databaseURL: "https://clubconnect-c4852.firebaseio.com",
      projectId: "clubconnect-c4852",
      storageBucket: "clubconnect-c4852.appspot.com",
      messagingSenderId: "270307080443"
    };
    firebase.initializeApp(config);
}

  render() {
    return (
    <div className="container" style={containerStyle}>
    <h1 style={headerStyle}> Chat </h1>
            <div className="columns">
              <div className="column is-3"></div>
              <div className="column is-6">
                <MessageList db={firebase} />
              </div>
            </div>

        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
        </div>

    );
  }
}

export default Chat;
