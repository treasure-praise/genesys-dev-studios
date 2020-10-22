import React from 'react';
import Navbar from '../components/Navbar';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Secondary_Nav from '../components/Secondary_Nav';
import FAQ_hero from '../components/FAQ_hero';
import FAQ_content from '../components/FAQ_content';

const FAQ_page = () => {
    return (
        <div>
            <Navbar />
            <Secondary_Nav/>
            <FAQ_hero />
            <FAQ_content />
            <Subscribe />
            <Footer />
        </div>
    );
}

export default FAQ_page;
