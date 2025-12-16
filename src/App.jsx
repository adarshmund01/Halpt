import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div className="container">
          <h1>Welcome to Halpt</h1>
          <p>Your intelligent assistant for modern solutions</p>
          <div className="cta-buttons">
            <a href="/about" className="btn">About Us</a>
            <a href="/contact" className="btn btn-secondary">Contact</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;