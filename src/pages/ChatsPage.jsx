import { Box, Grid } from '@mui/material';
import { useState } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import ChatList from '../components/ChatList/ChatList';

const initialChats = {
  '1234hfcgdxf': {
    name: 'Home chat',
    messages: [{ message: 'Robot answerd', author: 'Petya' }],
  },
  jncj55443: {
    name: 'Work chat',
    messages: [{ message: 'New answerd', author: '3' }],
  },
  iuhefiuhe8439: {
    name: 'Chat with friends',
    messages: [],
  },
};

const ChatsPage = () => {
  const [chatList, setChatList] = useState(initialChats);
  const { chatId } = useParams();

  if (chatId && !chatList[chatId]) {
    return <Navigate to="/nochat" replace />;
  }

  const setMessages = (messages) => {
    setChatList({...chatList, [chatId]: {...chatList[chatId], messages: messages}});
  }

  return (
    <Box>
      <Grid
        container
        height="calc(100vh - 81px)"
        flexDirection="column"
        flexWrap="nowrap"
      >
        <Grid container component="main" overflow="hidden" flexGrow={1}>
          <Grid item xs={3}>
            <ChatList chatList={chatList} />
          </Grid>
          {chatId ? <Outlet context={{ messages: chatList[chatId].messages, setMessages }} /> : <p>Choose the chat</p>}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatsPage;
