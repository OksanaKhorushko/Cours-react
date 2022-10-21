import React from 'react';
import { robotName } from '../../App';
import './Chat.css';

export const Chat = (props) => {
  return (
    <div className="chat">
      <div className="container">
        <h2>Chat</h2>
        <ul className="chat-list">
          {props.messages.map((message, i) => {
            return <li key={`message-${i}`} className={message.author === robotName ? 'left' : 'right'}>
              <span>{message.author}</span>
              <p>{message.message}</p>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
}
