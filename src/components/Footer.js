import React from "react";
import "./Footer.css";


const Footer =()=>{
    return(
        <div className="footer_container">
            <div>
                <ul className="footer_links">
                    <li ><a href="#" className="footer_link">Build Software</a>   </li>
                    <li><a   href="#" className="footer_link">Design Different</a> </li>
                    <li><a  href="#" className="footer_link">Apply Your Knowledge</a></li>
                    <li><a href="#" className="footer_link">FAQ</a></li>
                </ul>
            </div>
            <div className="contact-us">
                <p>Our local Campus center: Kilometer 7, Enugu/Port 
                Harcourt, Expressway, Centenary City, Enugu, <br/>
                Nigeria
                </p>
                <a href="#" className="footer_link">GET IN TOUCH</a>
            </div>
            <div className="dev_studio">
                <img className="footer_img" src="https://i.ibb.co/VHM4XW8/image-32.png" alt="dev studio image" />
                <div className="we">
                <p>Learnable is proud to be a collaborative effor of all the arms of our product team
                
                <br/><br/>
                <a className="footer_link">HEAD TO DEV STUDIO</a>
                </p>
                </div>
            </div>
            <div className="social_media">
                
            </div>
        </div>
    )
}

export default Footer