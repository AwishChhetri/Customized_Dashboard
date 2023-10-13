import React from 'react';
import { Routes,Route  } from 'react-router-dom';
import Home from './components/Home.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';


function App() {
  return (
    <div className="App">
    
        <Routes>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        </Routes>
    
       

    </div>
  );
}

export default App;

