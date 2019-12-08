import React from 'react';

import './CurrentObsession.css';

const CurrentObsession = () => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">Current obsession</h2>
            <p className="text-light text-center m-0">
                <i>
                    But you just met somebody new / And now it's gon' be me and you
                </i>
            </p>
            <p className="text-light text-center">
                — Robyn, Alexander Kronlund, Klas Åhlund
            </p>
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/CHn7w3o22PA"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default CurrentObsession;
