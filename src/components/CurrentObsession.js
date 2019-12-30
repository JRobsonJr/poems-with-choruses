import React from 'react';

import './CurrentObsession.css';

const CurrentObsession = () => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">Current obsession</h2>
            <p className="text-light text-center m-0">
                <i>
                    I'm out of my head, and I know that you're scared, because
                    hearts get broken
                </i>
            </p>
            <p className="text-light text-center">
                — Harry Styles, Kid Harpoon, Mitch Rowland, Tyler Johnson
            </p>
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/enuYFtMHgfU"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default CurrentObsession;
