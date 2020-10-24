import React from 'react';
import Navbar from '../components/Navbar';
import Secondary_Nav from '../components/Secondary_Nav';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import Learnable_Designer_Hero from '../components/Learnable_Designer_Hero';
import Content_Designer from '../components/Content_Designer';

const Learnable_Product_Designer = () => {

    
    return (
        <div>
            <Navbar/>
            <Secondary_Nav/>
            <Learnable_Designer_Hero/>
            <Content_Designer />
            <Subscribe />
            <Footer/>
        </div>
    );              
}

export default Learnable_Product_Designer;
