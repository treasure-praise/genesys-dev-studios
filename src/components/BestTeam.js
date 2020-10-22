import React from 'react';
import "./BestTeam.css"

const BestTeam = () => {
    return (
        <div className="BestTeam_container">
            <div  className="BestTeam_image_container" >
            <img className="BestTeam_img" src="images/Photo5.png" />
            </div>
            
            <div className="content alt" >
                <h2 className="">The best team in the world</h2>
                <p className="sub-content">We work with the most amazing people our industry has to offer. They are really passionate about making a difference</p>
                <a>SEE TEAM</a>
            </div>
        </div>
    );
}

export default BestTeam;
