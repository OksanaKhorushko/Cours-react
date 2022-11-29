import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { ChatItem } from './ChatItem';
import { Divider, Typography } from '@mui/material';

export default function ChatList(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Typography variant="h2" p={2}>Chats</Typography>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          {props.chatList.map(chat => {
            return <ChatItem name={chat.name} key={chat.id} />
          })}
        </List>
      </nav>
    </Box>
  );
}
