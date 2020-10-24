import React from 'react';
import "./Content_Designer.css"

const Content_Designer = () => {

    const p1 = `Play nice with other people.` 

    const p2 =`Be an actively engaged person. That means you are present, motivated, and social.`
    
    const p3 =`Understand how to use the Figma design software`
    
    const p4 =`Be able to create initial design layouts with confidence and know-how to effectively communicate concepts to everyone on your team.`
    
    const p5 = `Have a basic understanding of design principles and theories
    To have creative courage. This is a tough industry, only the brave and sturdy remain.`
     
    const p6 =`Be prepared to defend your decisions and take constructive criticism`

    const p7 =`To us, beauty without substance has no value. At Genesys, design thinking and execution are equally important, so we’re constantly on the lookout for not only the how but also the why.`

    return (
        <div >
            <img className="content-image" src="images/Photoo.png" />
            <div className="kontent">
                <h2>We Expect You To...</h2>
                <p className="p1">{p1}</p><br/>
                <p className="p1">{p2}</p><br/>
                <p className="p1">{p3}</p><br/>
                <p className="p1">{p4}</p><br/>
                <p className="p1">{p5}</p><br/>
                <p className="p1">{p6}</p><br/>
                <p className="p2">{p7}</p>
            </div>
        </div>
    );
}

export default Content_Designer;
