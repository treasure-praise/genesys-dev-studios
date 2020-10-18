import React from 'react';
import "./Hero.css"


const Hero = () => {
    return (
        <div>
            <div className="hero_text">
            <h1>Genesys provides opportunities for young Nigerian techies and opportunities to grow and innovate.</h1>
            <p>We understand that opportunities are scarce in these parts. We are either creating or exposing our people to these opportunities.</p>
        </div>
        <div className="hero_section">
            <img src="/images/arrow.png" className="arrow_img" />
            <div className="hero_image-container">
            {/* create div and make it a circle make use of font-awesome */}
                <div><i></i></div>
            {/* <img className="hero_img" src="/images/hero_image.png" /> */}
            </div> 
            
        </div>
        </div>
        
    );
}

export default Hero;
