
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home.jsx';
import SignUp from './pages/SignUp.jsx';
import Login  from './pages/login.jsx';
import About from './components/about.jsx';
import Dashboard from '../src/pages/Dash.jsx';
import ContactForm from './pages/prefer.jsx'
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/dash/:id" element={<Dashboard />} />
        <Route path="/prefer" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;