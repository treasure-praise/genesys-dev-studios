import React from 'react';
import "./Content_Developer.css"

const Content_Developer = () => {








    const p1 = `Play nice with other people.` 

    const p2 =`Be an actively engaged person. That means you are present, motivated, and social. You know how to communicate effectively with your teammates.`
    
    const p3 =`Love to code. You understand the basics of programming and object-oriented design and development.`
    
    const p4 =`Have an eye for detail. Your keen observation helps you catch discrepancies and fix them quickly.`
    
    const p5 = `Be innately curious. Your love for technology is insatiable, so you’re always researching and experimenting. Learning new technical skills while on the job is something you look forward to.`
    
    const p6=`Appreciate good design. You want to make something that doesn't just work flawlessly but looks amazing.`

    return (
        <div >
            <img className="content-image" src="images/Photooo.png" />
            <div className="kontent">
                <h2>We Expect You To...</h2>
                <p className="p1">{p1}</p><br/>
                <p className="p1">{p2}</p><br/>
                <p className="p1">{p3}</p><br/>
                <p className="p1">{p4}</p><br/>
                <p className="p1">{p5}</p><br/>
                <p className="p1">{p6}</p><br/>
            </div>
        </div>
    );
}

export default Content_Developer;
