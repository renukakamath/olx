import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';




/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  return (


    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>

     
    </div>
  );
}

export default App;
