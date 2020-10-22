import React from 'react';
import "./Content.css"

const Content = () => {
    return (
        <div className="content-container">
            <div className="apply-content-img">
                <img src="images/content.png" />
            </div>

            <div className="copy">
                <h3>How to get in </h3>
                <p>We are very deliberate with our selection process. We are on a quest to find amazing people who are passionate about learning and growing their careers in the software industry. To this end, we have designed our selection process to help us get such people.</p>
            </div>

            <div className="copy">
                <h3>Online Application</h3>
                <p>Introduce yourself to us by filling out our application form. When you’re done filling out the form, proceed to download our prep curriculum that contains everything you need to prepare for the physical and technical assessment.</p>
                <a className="copya"> APPLY HERE</a>
            </div>

           <div className="copy">
                <h3>Phone Call Interviews</h3>
                <p>We will reach out to you to discuss possible opportunities, ascertain where you fit in with us, and answer any questions you might have about the program. It’s supposed to be a chat, getting nervous defeats the aim.</p>
            </div>

            <div className="copy">
                <h3>Final Assessment</h3>
                <p>At this stage, we’ll get to meet you in person for the first time. You’ll be invited to the hub for a physical assessment that includes a technical assessment, a psychometric test and a face-to-face chat with our team.</p>
            </div>

            <div className="copy">
                <h3>Get In</h3>
                <p>If you make it to this stage, you can pack your bags and head down to the beautiful city of Enugu. We will join you on your journey to build that career of your dreams and provide all the help, support and love that we can muster along the way!</p>
            </div>
        </div>
    );
}

export default Content;
