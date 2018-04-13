import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

const messageStyle = {
      backgroundColor: 'white',
      borderRadius: '2px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
      padding: '10px',
      maxWidth: '50%',
      marginTop: '1em'
};

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
    let app = this.props.db.database().ref('messages');
    app.on('value', snapshot => {
      this.getData(snapshot.val());
    });
  }

  getData(values){
    let messagesVal = values;
    let messages = _(messagesVal)
                      .keys()
                      .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                      })
                      .value();
      this.setState({
        messages: messages
      });
  }

  render() {
    let messageNodes = this.state.messages.map((message) => {
      return (
        <div className="card">
          <div className="card-content" style={messageStyle}>
            <Message message = {message.message} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {messageNodes}
      </div>
    );
  }
}

export default MessageList
