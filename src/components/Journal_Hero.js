import React from 'react';
import "./Journal_Hero.css"

const Journal_Hero = () => {
    return (
        <div className="journal-hero-container">
            <div className="hero-description">
                <h1>Journal</h1>
                <button>Categories</button>
            </div>
            <div className="hero-journal">
                <img src="images/journal-hero.png" />
                <div className="journal-snippet">
                    <a href="#">INSPIRATION </a>
                    <h2>Learn Design Thinking like a Pro and Build Projects that People will care about </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sapien arcu vitae orci at molestie. Pharetra quisque donec accumsan rhoncus risus. Urna magna turpis duis imperdiet elit, et, hendrerit viverra risus. Vulputate euismod commodo donec tincidunt et, aliquam. Eget scelerisque netus habitant dui porttitor cursus. Ipsum sem ut tortor ac ullamcorper. Lacus.</p>
                    <div className="avatar-container">
                        <img src="images/avatar.png"/>
                        <h5> David Mong, April 9 2020</h5>
                    </div>
                   
                </div>
                 
            </div>
        </div>
    );
}

export default Journal_Hero;
