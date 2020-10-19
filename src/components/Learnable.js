import React from 'react';
import "./Learnable.css"

const Learnable = () => {
    return (
        <div className="learnable_container">
            <div  className="learnable_image_container" >
            <img className="learnable_img" src="images/Photo.png" />
            </div>
            
            <div className="content" >
                <h2>Learnable</h2>
                <p>Every year, young Nigerians are launching new careers in the technology industry. Find out how Genesys is helping them do it.</p>
                <a>LEARN MORE</a>
            </div>
        </div>
    );
}

export default Learnable;
