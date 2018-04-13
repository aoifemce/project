import React, {Component} from 'react';
import trim from 'trim';

const textareaStyle = {
   boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2);',
      backgroundColor: 'white',
      borderRadius: '2px',
      padding: '10px',
      maxWidth: '100%',
      marginTop: '1em'
};
class MessageBox extends Component {

  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      name: '',
      message: ''
    };
    this.updateName = this.updateName.bind(this);
  }


  onChange(e){
      this.setState({
        message: e.target.value,
      });
  }
  updateName(event) {
      this.setState({ name: event.target.value.trim() });
    }

  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');

      dbCon.push({
        message: trim(e.target.value),
        name: trim(e.target.value)
      });
      this.setState({
        name: '',
        message: ''
      });
    }
  }
  render() {
    return (
        <textarea
            className="textarea"
            placeholder="Type a message"
            cols="100"
            onChange={this.onChange}
            onKeyUp={this.onKeyup}
            value={this.state.message}
            style={textareaStyle}>
          </textarea>

    )
  }
}

export default MessageBox
