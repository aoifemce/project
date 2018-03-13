import React, { PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';


const title = 'Chat';


var containerStyle = {
  fontSize: 'large',
  color: 'gray',
  display: 'grid',
  gridTemplateColumns: '1fr 7fr',
  gridTemplateAreas: 'sidebar main',
  width: '100vw',
  height: '100vh'
};

var newMessageStyle = {
  position: 'fixed',
  bottom: '0',
  width: '100%',
  padding: '20px',
  marginLeft: '0px',
  borderTop: '5px solid dodgerblue'
};

var messageListStyle = {
  padding: '10px 0 0 12px'
};

var sideBarStyle = {
  padding: '10px 0 0 5px',
  borderRight: '5px solid dodgerblue',
  height: '100%'
}
function displayChat(props, context) {
  context.setTitle(title);
  return (

   <div style={ containerStyle  } id="container">
        <aside  style={sideBarStyle} id="sidebar">Users</aside>
        <section  id="main">
          <section style={messageListStyle} id="messages-list">Messages list</section>
          <section  style={newMessageStyle} id="new-message">New message</section>
        </section>
      </div>
    );
}

displayChat.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayChat;
