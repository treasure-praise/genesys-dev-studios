import React from 'react';
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer";
import Home_Page from './pages/Home Page';
import FAQ_page from './pages/FAQ_page';
import Apply_your_knowledge_page from './pages/Apply_your_knowledge_page';
import Learnable_Software_Developer from './pages/Learnable_Software_Developer';
import Learnable_Product_Designer from './pages/Learnable_Product_Designer';
import Journal_page from './pages/Journal_page';

function App() {
  return (
    <div className="App genesys">
      {/* <Home_Page/> */}
      {/* <FAQ_page /> */}
      {/* <Apply_your_knowledge_page /> */}
      {/* <Learnable_Software_Developer/> */}
      {/* <Learnable_Product_Designer/> */} 
      <Journal_page/>
    </div>
  );
}

export default App;
