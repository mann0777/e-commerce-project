import { Domain } from '@mui/icons-material';
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Product from './Product';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="App">
      <Header/>
      <Routes>

        <Route path="/" element={[<Home />]} />

        <Route path="/checkout" element= {<Checkout/>} />

      </Routes>
    </div>
  </Router>
    
    
  );
}

export default App;
