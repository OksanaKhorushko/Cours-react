import { useEffect, useState } from 'react';
import './App.css';
import { Chat } from './components/Chat/Chat';
import { MessageForm } from './components/MessageForm/MessageForm';

export const robotName = 'Robot';
const userName = 'You';

function App() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (
      messageList[messageList.length - 1]
      && messageList[messageList.length - 1].author !== robotName
    ) {
      setTimeout(() => {
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
    <div className="App">
      <div className="wrapper">
        <Chat messages={messageList} />
        <MessageForm saveMessage={saveMessage} />
      </div>
    </div>
  );
}

export default App;
