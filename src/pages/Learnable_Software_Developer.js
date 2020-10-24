import React from 'react';
import Navbar from '../components/Navbar';
import Secondary_Nav from '../components/Secondary_Nav';
import Footer from '../components/Footer';
import Subscribe from '../components/Subscribe';
import Learnable_Designer_Hero from '../components/Learnable_Designer_Hero';
// import Content from '../components/Content';
import Learnable_SoftwareDeveloper_Hero from '../components/Learnable_SoftwareDeveloper_Hero';
import Content_Developer from '../components/Content_Developer';

const Learnable_Software_Developer = () => {

    

    return (
        <div>
            <Navbar/>
            <Secondary_Nav/>
            <Learnable_SoftwareDeveloper_Hero/>
            <Content_Developer />
            <Subscribe />
            <Footer/>
        </div>
    );
}

export default Learnable_Software_Developer;
