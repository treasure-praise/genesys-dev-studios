import React from 'react';
import "./Secondary_Nav.css"

const Secondary_Nav = () => {
    return (
        <div >
            <ul className="secondary-nav-container">
                <li className="secondary-nav"><a>HOME</a></li>
                <li className="secondary-nav"><a>SOFTWARE DEVELOPERS</a></li>
                <li className="secondary-nav"><a>PRODUCT DESIGNERS</a></li>
                <li className="secondary-nav"><a>APPLY</a></li>
                <li className="secondary-nav"><a>JOURNAL</a></li>
                <li className="secondary-nav"><a>FAQ</a></li>                
            </ul>
        </div>
    );
}

export default Secondary_Nav;
