import React from 'react';
import "./Otherthings.css"

const Otherthings = () => {
    return (
        <div className="other-things_container">
            <div className="service-deliverables">
                <img className="other-things-img"  src="images/otherthings1.png"/>
                <div className="other-things-img center"> <a>Genesys Ignite</a>  </div>
                <div className="other-things-img divs">
                    <img className="other-things-img"  src="images/otherthings2.png"/>
                    <a>CodeVile</a>
                </div>
                <div className="other-things-img ">
                    <img className="other-things-img" src="images/otherthings3.png"/>
                    <a>Pink summer of code</a>
                </div>
                
            </div>
            <h2>Other things we do</h2>
        </div>
    );
}

export default Otherthings;
