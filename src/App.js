import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if(!localStorage.getItem('username'))   return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="8e5828f5-ea04-4414-a1b8-4068271ee8e9"
            userName={ localStorage.getItem('username') }
            userSecret={ localStorage.getItem('password') }
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;