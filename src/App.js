import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login.js'
import Signup from './signup.js'
import Pagenotfound from './Pagenotfound.js'
import Chat from './chat.js'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/pagenotfound" element={<Pagenotfound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
