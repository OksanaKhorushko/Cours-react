import { ListItem, ListItemText, Paper } from '@mui/material';
import React from 'react';
import { robotName } from '../../App';

export const ChatMessage = ({ message }) => {
  const isRobot = message.author === robotName;
  return (
    <ListItem sx={{
      justifyContent: isRobot ? 'flex-start' : 'flex-end',
    }}>
      <Paper sx={{padding: 1, minWidth: '30%', maxWidth: '80%', backgroundColor: isRobot ? 'helper.light' : 'helper.dark' }}>
        <ListItemText
          sx={{
            background: 'helper.light',
          }}
          primary={message.author}
          secondary={message.message}
          secondaryTypographyProps={{
            component: 'pre',
          }}
        />
      </Paper>
    </ListItem>
  )
}
