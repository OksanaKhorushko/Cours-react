import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Chat } from '../components/Chat/Chat';
import { MessageForm } from '../components/MessageForm/MessageForm';

export const robotName = 'Robot';
const userName = 'You';

export const ChatPage = () => {
  const { messages, setMessages } = useOutletContext();

  const timer = useRef();

  useEffect(() => {
    if (
      messages[messages.length - 1] &&
      messages[messages.length - 1].author !== robotName
    ) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setMessages([
          ...messages,
          {
            author: robotName,
            message: 'Robot answerd',
          },
        ]);
      }, 1500);
    }
  }, [messages, setMessages]);

  const saveMessage = message => {
    setMessages([
      ...messages,
      {
        author: userName,
        message,
      },
    ]);
  };

  return (
    <Grid item xs={9} height="100%">
      <Box
        p={2}
        height="100%"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'helper.main',
        }}
      >
        <Chat messages={messages} />
        <MessageForm saveMessage={saveMessage} />
      </Box>
    </Grid>
  );
};
