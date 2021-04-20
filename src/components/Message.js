import React, { Component } from "react";
import "../style/Message.css";
class Message extends Component {
  render() {
    return <div className="Message">{this.props.children}</div>;
  }
}

export default Message;
