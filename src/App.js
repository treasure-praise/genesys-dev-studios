import React from 'react';
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer";
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App genesys">
      <Navbar />
      <Hero />
      <Subscribe  />
      <Footer />
    </div>
  );
}

export default App;
