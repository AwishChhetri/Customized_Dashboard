
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home.jsx';
import SignUp from './components/SignUp.jsx';
import Login  from './components/login.jsx';
import About from './components/about.jsx';
import Dash from './components/dash.jsx';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/dash" element={<Dash />} />
      </Routes>
    </div>
  );
}

export default App;