import React from 'react';

import './CurrentObsession.css';

const CurrentObsession = () => (
    <div className="current-obssession-container">
        <div className="footer-content">
            <h2 className="text-light text-center">Current obsession</h2>
            <p className="text-light text-center m-0">
                <i>
                    Maniac, some may say that I'm a
                </i>
            </p>
            <p className="text-light text-center">— Conan Gray, Dan Nigro</p>
            <iframe
                className="responsive-iframe"
                src="https://www.youtube.com/embed/-E-_IRJU5w0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
        </div>
    </div>
);

export default CurrentObsession;
