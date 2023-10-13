import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home  from './components/Home.jsx';
import SignUp from './components/SignUp.jsx';
import Login  from './components/login.jsx';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
