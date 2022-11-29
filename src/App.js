import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Chat } from './components/Chat/Chat';
import ChatList from './components/ChatList/ChatList';
import { MessageForm } from './components/MessageForm/MessageForm';

export const robotName = 'Robot';
const userName = 'You';

function App() {
  const [messageList, setMessageList] = useState([]);
  const [chatList] = useState([
    {
      name: 'Home chat',
      id: '1234hfcgdxf',
    },
    {
      name: 'Work chat',
      id: 'jncj55443',
    },
    {
      name: 'Chat with friends',
      id: 'iuhefiuhe8439',
    },
  ]);
  const timer = useRef();

  useEffect(() => {
    if (
      messageList[messageList.length - 1]
      && messageList[messageList.length - 1].author !== robotName
    ) {
      clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        setMessageList([...messageList, {
          author: robotName,
          message: 'Robot answerd',
        }]);
      }, 1500);
    }
  }, [messageList]);

  const saveMessage = (message) => {
    setMessageList([...messageList, {
      author: userName,
      message,
    }]);
  };

  return (
    <Box>
      <Grid container height="100vh" flexDirection="column" flexWrap="nowrap">
        <Grid component="header">
          <Typography align="center" variant="h1" gutterBottom={true}>My chat App</Typography>
        </Grid>
        <Grid container component="main" overflow="hidden" flexGrow={1}>
          <Grid item xs={3}>
            <ChatList chatList={chatList} />
          </Grid>
          <Grid item xs={9} height="100%">
            <Box p={2} height="100%" sx={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: 'helper.main',
            }}>
              <Chat messages={messageList} />
              <MessageForm saveMessage={saveMessage} />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
