import React, { useState } from 'react';
import './MessageForm.css';


export const MessageForm = (props) => {
  const [message, setMessage] = useState('');

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const onSendClick = () => {
    props.saveMessage(message);
    setMessage('');
  }

  return (
    <div className="message-form">
      <div className="container">
        <div className="message-form-row">
          <textarea onChange={onMessageChange} value={message} placeholder="Add message form..."></textarea>
          <button disabled={!message} onClick={onSendClick}>Send</button>
        </div>
      </div>
    </div>
  )
}
