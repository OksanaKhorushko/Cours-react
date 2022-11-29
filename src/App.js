import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ChatPage } from './pages/ChatPage';
import ChatsPage from './pages/ChatsPage';
import { HomePage } from './pages/HomePage';
import { UserPage } from './pages/UserPage';
import { NoChat } from './pages/NoChat';

export const robotName = 'Robot';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} >
        <Route path="/chats" element={<ChatsPage />}>
          <Route path="/chats/:chatId" element={<ChatPage />} />
        </Route>
        <Route path="/user" element={<UserPage />} />
        <Route path="/nochat" element={<NoChat />} />
      </Route>
    </Routes>
  );
}

export default App;
