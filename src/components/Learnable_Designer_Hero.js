import React from 'react';
import "./Learnable_Designer_Hero.css"

const Learnable_Designer_Hero = () => {
    return (
        <div>
            <div className="designer-hero-container">
            <div>
                <h1>The Learnable Product Designer</h1>
                <p>At Genesys, you'll be exposed to every discipline in our creative process – UX, UI, interaction design, and copywriting. You’ll be part of a dynamic team that's made up of like-minded, talented people. You'll work hard with them to create things that will amaze everyone everywhere.

                In addition to your team projects, you’ll be lending a hand to the creative team. Participating in brainstorm sessions, building winning pitches, preparing assets, and design scriptures for productions, you'll be in the thick of it all.

                Oh, and you’ll make amazing friends while you're at it!</p>
            </div>
            <div className="cutout">
                <img  src="images/cutout.png"/>
            </div>
            </div>
            <p className="quote">“The greats weren’t great because at birth they could paint. The greats were great because they painted a lot.” <br/>
            - Macklemore
</p>
        </div>
    );
}

export default Learnable_Designer_Hero;
