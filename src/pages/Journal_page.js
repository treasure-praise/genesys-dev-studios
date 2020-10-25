import React from 'react';
import Navbar from '../components/Navbar';
import Secondary_Nav from '../components/Secondary_Nav';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Journal_Posts from '../components/Journal_Posts';
import Journal_Hero from '../components/Journal_Hero';

const Journal_page = () => {
    return (
        <div>
            <Navbar/>
            <Secondary_Nav/>
            <Journal_Hero/>
            <Journal_Posts/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default Journal_page;
