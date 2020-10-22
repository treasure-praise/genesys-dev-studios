import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Learnable from '../components/Learnable';
import Agora from '../components/Agora';
import Startzone from '../components/Startzone';
import Otherthings from '../components/Otherthings';
import BestTeam from '../components/BestTeam';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';

const Home_Page = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Learnable />
            <Agora />
            <Startzone/>
            <Otherthings/>
            <BestTeam />
            <Subscribe  />
            <Footer />
        </div>
    );
}

export default Home_Page;
