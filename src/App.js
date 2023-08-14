import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
// import Home from './components/pages/Home';



function App() {
  return (
   <>
   <Router>
    <Navbar/>
      <Routes>
        {/* <Route exact path='/' element = {<Home/>} /> */}
        
      </Routes>
   </Router>
   </>
  );
}

export default App;

