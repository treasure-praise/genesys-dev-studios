import React from 'react';
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer";
import Home_Page from './pages/Home Page';
import FAQ_page from './pages/FAQ_page';
import Apply_your_knowledge_page from './pages/Apply_your_knowledge_page';

function App() {
  return (
    <div className="App genesys">
      {/* <Home_Page/> */}
      {/* <FAQ_page /> */}
      <Apply_your_knowledge_page />
    </div>
  );
}

export default App;
