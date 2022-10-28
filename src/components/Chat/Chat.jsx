import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import React from 'react';
import { ChatMessage } from './ChatMessage';

export const Chat = (props) => {
  return (
    <>
      <Typography variant="h2" pb={2}>Chat</Typography>
      <Divider />
      <List sx={{overflow: 'auto'}}>
        {props.messages.map((message, i) => {
          return <ChatMessage key={`message-${i}`} message={message}/>
        })}
      </List>
    </>
  )
}
