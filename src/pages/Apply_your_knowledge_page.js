import React from 'react';
import Navbar from '../components/Navbar';
import Secondary_Nav from '../components/Secondary_Nav';
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer';
import Apply from '../components/Apply';
import Content from './Content';

const Apply_your_knowledge_page = () => {
    return (
        <div>
            <Navbar/>
            <Secondary_Nav/>
            <Apply/>
            <Content/>
            <Subscribe/>
            <Footer/>
        </div>
    );
}

export default Apply_your_knowledge_page;
