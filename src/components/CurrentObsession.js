import React from 'react';

import './CurrentObsession.css';

const CurrentObsession = () => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">Current obsession</h2>
            <p className="text-light text-center m-0">
                <i>
                    I'm high enough from all the waiting to ride a wave on your
                    inhaling.
                </i>
            </p>
            <p className="text-light text-center">
                — Imogen Heap, Guy Sighsworth (Frou Frou)
            </p>
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/5XONarRhvI4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default CurrentObsession;
