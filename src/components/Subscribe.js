import React from 'react';
import "./Subscribe.css"

const Subscribe = () => {
    return (
        <div>
            <div className="subscribe_section">
                <img src="/images/arrow.png" className="arrow_img" />
            <div className="subscribe">
                <h2>Stay up to date on what we are doing and new learning opportunities</h2>
                <div className="email">
                    <div className="email-input__container">
                        <input className="email-input" placeholder="YOUR EMAIL" type="email"/>
                        <small>View Privacy Policy</small>
                    </div>
                    <button>SUBCRIBE</button>
                </div>
            </div> 
            
        </div>
        </div>
    );
}

export default Subscribe;
