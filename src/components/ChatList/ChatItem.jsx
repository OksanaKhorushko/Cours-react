import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { NavLink } from 'react-router-dom';

export const ChatItem = props => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={`/chats/${props.id}`}>
        <ListItemText>{props.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  );
};
