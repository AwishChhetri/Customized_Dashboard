
import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home.jsx';
import SignUp from './components/SignUp.jsx';
import Login  from './components/login.jsx';
import Dash from './pages/Dash.jsx';
import About from './components/about.jsx';
import HeroPage from './components/HeroPage.jsx';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero" element={<HeroPage />} />
      </Routes>
    </div>
  );
}

export default App;