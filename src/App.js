import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import DisplayQuotes from './components/Quotes/DisplayQuotes';
import Navbar from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quote" element={<DisplayQuotes />} />
          <Route exact path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
