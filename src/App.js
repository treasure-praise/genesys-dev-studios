import React from 'react';
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer";
import './App.css';
import Hero from './components/Hero';
import Learnable from './components/Learnable';

function App() {
  return (
    <div className="App genesys">
      <Navbar />
      <Hero />
      <Learnable />
      <Subscribe  />
      <Footer />
    </div>
  );
}

export default App;
