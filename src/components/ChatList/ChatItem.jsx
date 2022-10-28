import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export const ChatItem = (props) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText>
          {props.name}
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}
